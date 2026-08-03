import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="bg-lavender">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <img
          src="/seal.png"
          alt="Elevate Opticians seal — mentorship and study group, volunteer-led"
          className="mx-auto h-52 w-52 rounded-full shadow-[0_20px_45px_-20px_rgba(76,29,149,0.45)] sm:h-64 sm:w-64"
        />

        <p className="mx-auto mt-8 inline-flex items-center rounded-full border border-purple/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple">
          California Opticians Licensing Support
        </p>

        <h1 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold leading-[1.08] text-purple sm:text-5xl lg:text-6xl">
          Getting licensed shouldn't mean studying alone.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
          Elevate Opticians is a free, volunteer-run study group helping
          opticians across California pass the ABO, NCLE, and state
          licensure exams — through weekly sessions, mentorship, and a
          shared resource library.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#join">Join a Study Session</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#events">See This Week's Session</a>
          </Button>
        </div>

        <p className="mt-6 text-sm font-medium text-purple/60">
          No dues. No applications. No gatekeeping.
        </p>
      </div>
    </section>
  )
}
