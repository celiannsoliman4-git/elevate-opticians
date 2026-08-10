export function WhyABOMatters() {
  const benefits = [
    "Demonstrates professional knowledge",
    "Builds patient confidence and trust",
    "Increases professional credibility",
    "Creates opportunities for advancement",
    "Supports lifelong learning",
    "Strengthens the optical profession",
  ]

  return (
    <section id="why-abo" className="bg-gold/15 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          The Value of Certification
        </p>

        <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
          Why Earn ABO Certification?
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4">
              <div className="mt-1 shrink-0">
                <div className="flex size-6 items-center justify-center rounded-full bg-bronze text-sm font-bold text-white">
                  ✓
                </div>
              </div>
              <p className="text-lg text-foreground/75">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-base leading-relaxed text-foreground/70">
          American Board of Opticianry is more than a credential — it's an investment in your career, your patients, and the optical profession. It demonstrates your commitment to excellence and opens doors to advancement, higher earning potential, and greater professional satisfaction.
        </p>
      </div>
    </section>
  )
}
