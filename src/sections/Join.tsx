import { useState, type FormEvent } from "react"
import { JOIN_EMAIL } from "@/data/programs"

export function Join() {
  const [email, setEmail] = useState("")
  const [note, setNote] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    const subject = encodeURIComponent("I want to join the study group")
    const body = encodeURIComponent(
      `Hi Elevate Opticians,\n\nPlease add me to the study group. My email is: ${email}`
    )
    window.location.href = `mailto:${JOIN_EMAIL}?subject=${subject}&body=${body}`

    setNote(
      "Opening your email app with a message addressed to us — just hit send and we'll get you on the list!"
    )
    setEmail("")
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
          <input
            id="join-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="h-12 flex-1 rounded-md border border-white/20 bg-white/[0.08] px-4 text-sm text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 rounded-md bg-white px-6 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
          >
            Join the Study Group
          </button>
        </form>
        {note && <p className="mt-4 text-sm text-white/70">{note}</p>}
      </div>
    </section>
  )
}
