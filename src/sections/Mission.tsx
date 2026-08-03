function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-purple/50">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-bold text-purple">{value}</p>
    </div>
  )
}

export function Mission() {
  return (
    <section id="mission" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <h2 className="font-display text-3xl font-bold text-purple sm:text-4xl">
          The Story of Elevate Opticians
        </h2>

        <div className="mt-8 space-y-6 text-xl leading-relaxed text-foreground/75">
          <p>
            Elevate Opticians began in 2020, during the COVID-19 pandemic, as
            a small ABO study group. When Araceli Garcia set out to prepare
            for her ABO exam, Dr. Najla Malak-Majdalani and Dr. Betsy Shyu
            stepped in to help — and a study group of eight opticians took
            shape.
          </p>
          <p>
            Nearly everyone passed. One person didn't: Kiara Resplandor.
            Rather than give up, she formed a smaller, focused study group of
            her own — and this time, all three passed.
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
        </div>

        <div className="mt-10 grid gap-6 border-t border-purple/10 pt-8 sm:grid-cols-3">
          <Stat label="Founded" value="2020" />
          <Stat label="Opticians Certified" value="24" />
          <Stat label="Years Running" value="6+" />
        </div>

        <blockquote className="mt-10 border-l-4 border-purple pl-6">
          <p className="font-display text-2xl font-semibold leading-snug text-purple sm:text-3xl">
            Elevate the profession. Empower the optician. Leave no one
            behind.
          </p>
        </blockquote>
      </div>
    </section>
  )
}
