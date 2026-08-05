export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  const { email } = req.body ?? {}
  if (!email || typeof email !== "string") {
    res.status(400).json({ error: "Email is required" })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: "Email service not configured" })
    return
  }

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Elevate Opticians <onboarding@resend.dev>",
        to: "elevateopticians@gmail.com",
        reply_to: email,
        subject: "New study group signup",
        text: `New signup from the website join form.\n\nEmail: ${email}`,
      }),
    })

    if (!resendRes.ok) {
      const detail = await resendRes.text()
      res.status(502).json({ error: "Failed to send email", detail })
      return
    }

    res.status(200).json({ ok: true })
  } catch {
    res.status(500).json({ error: "Unexpected error sending email" })
  }
}
