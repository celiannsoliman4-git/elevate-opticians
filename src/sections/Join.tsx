import { useState, type FormEvent } from "react"
import { JOIN_EMAIL } from "@/data/programs"

type Status = "idle" | "loading" | "success" | "error"

export function Join() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus("loading")
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("request failed")
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="join" className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          No dues. No gatekeeping. Just show up.
        </h2>
        <p className="mt-3 text-white/70">
          Drop your email and we'll send you the weekly schedule, topics,
          and the Zoom link.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="join-email" className="sr-only">
            Email address
          </label>
          <div className="relative flex-1">
            <input
              id="join-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="h-14 w-full rounded-md border border-white/20 bg-white/[0.08] px-4 pr-10 text-base text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none sm:h-12 sm:text-sm"
            />
            {email && (
              <button
                type="button"
                onClick={() => setEmail("")}
                aria-label="Clear email"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="h-14 rounded-md bg-white px-6 text-base font-semibold text-ink transition-colors hover:bg-white/90 disabled:opacity-60 sm:h-12 sm:text-sm"
          >
            {status === "loading" ? "Sending…" : status === "success" ? "Check your email!" : "Join the Study Group"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-white/70">
            Thanks! Check your inbox for this week's schedule, topics, and Zoom
            link.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-white/70">
            Something went wrong — email us directly at{" "}
            <a
              href={`mailto:${JOIN_EMAIL}`}
              className="underline underline-offset-4 hover:text-white"
            >
              {JOIN_EMAIL}
            </a>{" "}
            instead.
          </p>
        )}
      </div>
    </section>
  )
}
