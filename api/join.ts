const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const RESEND_SANDBOX_FROM = "onboarding@resend.dev"

// Simple in-memory cache for duplicate detection (24-hour window)
// Note: Resets on deployment; for persistent tracking, use a database
const recentSubmissions = new Map<string, number>()

// Resend only allows sending from verified domains — not gmail.com, yahoo.com, etc.
const UNVERIFIABLE_FROM_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "aol.com",
]

function resolveFromAddress(rawFrom: string | undefined) {
  const fromEmail = rawFrom?.trim() || RESEND_SANDBOX_FROM
  const domain = fromEmail.includes("<")
    ? fromEmail.match(/<[^@]+@([^>]+)>/)?.[1]?.toLowerCase()
    : fromEmail.split("@")[1]?.toLowerCase()

  if (domain && UNVERIFIABLE_FROM_DOMAINS.includes(domain)) {
    console.warn(
      `FROM_EMAIL uses ${domain}, which Resend cannot send from. Falling back to ${RESEND_SANDBOX_FROM}. Verify your own domain at https://resend.com/domains for production.`,
    )
    return `Elevate Opticians <${RESEND_SANDBOX_FROM}>`
  }

  return fromEmail.includes("<")
    ? fromEmail
    : `Elevate Opticians <${fromEmail}>`
}

async function sendEmail(
  apiKey: string,
  payload: {
    from: string
    to: string | string[]
    subject: string
    text: string
    html?: string
    reply_to?: string
  },
) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const detail = await res.text()
    throw new Error(detail || "Failed to send email")
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  const email = req.body?.email?.trim()
  if (!email || !EMAIL_PATTERN.test(email)) {
    res.status(400).json({ error: "Please enter a valid email address" })
    return
  }

  // Check for duplicate submission (24-hour window)
  const lastSubmission = recentSubmissions.get(email)
  const now = Date.now()
  const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000

  if (lastSubmission && now - lastSubmission < TWENTY_FOUR_HOURS) {
    res.status(429).json({ error: "You've already signed up recently. Please check your email or try again in 24 hours." })
    return
  }

  // Record this submission
  recentSubmissions.set(email, now)

  const apiKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.NOTIFY_EMAIL
  const zoomLink = process.env.ZOOM_LINK || "https://zoom.us/j/YOUR_MEETING_ID"
  const from = resolveFromAddress(process.env.FROM_EMAIL)

  if (!apiKey) {
    res.status(500).json({ error: "Email service not configured" })
    return
  }

  if (!notifyEmail) {
    res.status(500).json({ error: "Notification email not configured" })
    return
  }

  try {
    await sendEmail(apiKey, {
      from,
      to: notifyEmail,
      reply_to: email,
      subject: "New Elevate Opticians study group signup",
      text: `Someone just joined the study group:\n\n${email}\n\nSent from the Elevate Opticians website.`,
      html: `<p>Someone just joined the study group:</p><p><strong>${email}</strong></p><p><em>Sent from the Elevate Opticians website.</em></p>`,
    })
  } catch (err) {
    console.error("Notify email failed:", err)
    res.status(502).json({ error: "Failed to send email" })
    return
  }

  try {
    await sendEmail(apiKey, {
      from,
      to: email,
      subject: "Welcome to Elevate Opticians",
      text: [
        "Welcome to Elevate Opticians!",
        "",
        "You're now part of a community dedicated to helping opticians succeed.",
        "",
        "Questions? Reach out to elevateopticians@gmail.com!",
      ].join("\n"),
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Lora', Georgia, serif; color: #221206; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .logo { text-align: center; margin-bottom: 30px; }
            .logo img { max-width: 120px; height: auto; }
            h1 { font-family: 'Playfair Display', Georgia, serif; font-size: 32px; color: #0a0602; text-align: center; margin: 20px 0; }
            .welcome { font-size: 16px; color: #221206; text-align: center; margin-bottom: 30px; }
            .guide-note { background: #fefdf7; padding: 15px; border-radius: 6px; margin: 20px 0; font-size: 14px; color: #221206; }
            .footer { text-align: center; color: #6b5a44; font-size: 14px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <img src="https://elevate-opticians.vercel.app/seal.png" alt="Elevate Opticians">
            </div>

            <h1>Welcome to Elevate Opticians</h1>

            <p class="welcome">You're now part of a community dedicated to helping opticians succeed. Whether you're studying for the ABO or supporting others, you're in the right place.</p>

            <div class="footer">
              <p>Questions? Reach out to elevateopticians@gmail.com!</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
  } catch (err) {
    // Signup is still recorded via the team notification above.
    console.error("Welcome email failed:", err)
  }

  res.status(200).json({ ok: true })
}
