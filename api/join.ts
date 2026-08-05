const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

  const apiKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.NOTIFY_EMAIL
  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev"
  const zoomLink = process.env.ZOOM_LINK || "https://zoom.us/j/YOUR_MEETING_ID"

  if (!apiKey) {
    res.status(500).json({ error: "Email service not configured" })
    return
  }

  if (!notifyEmail) {
    res.status(500).json({ error: "Notification email not configured" })
    return
  }

  const from = fromEmail.includes("<")
    ? fromEmail
    : `Elevate Opticians <${fromEmail}>`

  try {
    await sendEmail(apiKey, {
      from,
      to: notifyEmail,
      reply_to: email,
      subject: "New Elevate Opticians study group signup",
      text: `Someone just joined the study group:\n\n${email}\n\nSent from the Elevate Opticians website.`,
      html: `<p>Someone just joined the study group:</p><p><strong>${email}</strong></p><p><em>Sent from the Elevate Opticians website.</em></p>`,
    })

    await sendEmail(apiKey, {
      from,
      to: email,
      subject: "Your Elevate Opticians study group schedule",
      text: [
        "Welcome to Elevate Opticians!",
        "",
        "Here is this week's session info:",
        "",
        "Session: ABO Optics Fundamentals",
        "When: Every Tuesday · 7:00 PM PT",
        "Where: Online via Zoom",
        `Zoom link: ${zoomLink}`,
        "",
        "Topics rotate weekly — optics, anatomy, dispensing, and open Q&A.",
        "",
        "See you there!",
        "— The Elevate Opticians team",
      ].join("\n"),
      html: `
        <p>Welcome to <strong>Elevate Opticians</strong>!</p>
        <p>Here is this week's session info:</p>
        <ul>
          <li><strong>Session:</strong> ABO Optics Fundamentals</li>
          <li><strong>When:</strong> Every Tuesday · 7:00 PM PT</li>
          <li><strong>Where:</strong> Online via Zoom</li>
          <li><strong>Zoom link:</strong> <a href="${zoomLink}">${zoomLink}</a></li>
        </ul>
        <p>Topics rotate weekly — optics, anatomy, dispensing, and open Q&amp;A.</p>
        <p>See you there!<br/>— The Elevate Opticians team</p>
      `,
    })

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error("Join handler error:", err)
    res.status(502).json({ error: "Failed to send email" })
  }
}
