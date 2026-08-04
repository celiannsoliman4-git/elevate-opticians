import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, rgba(233,182,102,0.18) 0%, transparent 60%), radial-gradient(50% 60% at 10% 90%, rgba(233,182,102,0.10) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-10 lg:pb-28 lg:pt-24">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-gold">
            Founded 2020 · Bay Area, California
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            You don't have to
            <br />
            study for the <span className="italic text-gold">ABO</span>
            <br />
            alone.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-white/80">
            Elevate Opticians is a free, volunteer-run mentorship community
            helping opticians everywhere pass the ABO exam — no matter where
            you work or your experience level.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" variant="bronze">
              <a href="#join">Join a Study Session</a>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <a href="#mission">Our Story</a>
            </Button>
          </div>

          <p className="mt-8 font-display text-sm italic tracking-wide text-white/50">
            Elevate the profession · Empower the optician
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl"
            aria-hidden
          />
          <img
            src="/seal.png"
            alt="Elevate Opticians seal — mentorship and study group, volunteer-led"
            className="relative w-[min(360px,88%)] rounded-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-ink/60">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-hidden px-6 py-4 text-xs uppercase tracking-[0.3em] text-white/50 lg:px-10">
          <span className="text-gold">Six Years Running</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>24 Opticians Certified</span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span className="hidden sm:inline">Always Free</span>
        </div>
      </div>
    </section>
  )
}
