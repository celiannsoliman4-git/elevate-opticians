function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-purple/50">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-bold text-purple">{value}</p>
    </div>
  )
}

export function Mission() {
  return (
    <section id="mission" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-purple/60">
              Our Story
            </p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-purple sm:text-5xl">
              A community
              <br />
              built on{" "}
              <span className="italic text-accent">second</span>
              <br />
              chances.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/75">
            <p>
              Elevate Opticians began in 2020, during the COVID-19 pandemic,
              as a small ABO study group. When Araceli Garcia set out to
              prepare for her ABO exam, Dr. Najla Malak-Majdalani and Dr.
              Betsy Shyu stepped in to help — and a study group of eight
              opticians took shape.
            </p>
            <p>
              Nearly everyone passed. One person didn't: Kiara Resplandor.
              Rather than give up, she formed a smaller, focused study group
              of her own — and this time, all three passed.
            </p>
            <p>
              Kiara saw firsthand how much certification could change a
              career: credibility, security, better pay, more confident
              patient care. She kept organizing sessions and inviting more
              opticians in, and what started as a handful of volunteers grew
              into something bigger than any one person could carry alone.
            </p>
            <p className="font-medium text-purple">
              That mission became Elevate Opticians — a volunteer-led
              community built on a simple idea: when one optician succeeds,
              the whole profession gets stronger.
            </p>
            <p>
              Six years later, Elevate Opticians has helped 24 opticians earn
              their ABO certification, many of whom now lead teams, train
              others, and run their own practices. The goal was never just to
              pass an exam — it's to make sure no one has to do it alone.
            </p>

            <div className="mt-10 grid gap-6 border-t border-purple/10 pt-10 sm:grid-cols-3">
              <Stat label="Founded" value="2020" />
              <Stat label="Opticians Certified" value="24" />
              <Stat label="Years Running" value="6+" />
            </div>

            <blockquote className="mt-4 border-l-4 border-purple pl-6">
              <p className="font-display text-xl font-semibold leading-snug text-purple sm:text-2xl">
                Elevate the profession. Empower the optician. Leave no one
                behind.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
