function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-ink/50">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-bold text-ink">{value}</p>
    </div>
  )
}

export function Mission() {
  return (
    <section id="mission" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Our Story
        </p>
        <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Lift as you climb —{" "}
          <span className="italic text-accent">no one is left behind.</span>
        </h2>

        <div className="mt-12 columns-1 gap-12 space-y-5 text-lg leading-relaxed text-foreground/75 lg:columns-2 lg:gap-16 [&>p]:[break-inside:avoid]">
          <p>
            Elevate Opticians was born during one of the most challenging
            times in recent history, the COVID-19 pandemic in 2020. What
            began as a small ABO study group would eventually grow into a
            volunteer-led mentorship community dedicated to helping
            opticians achieve certification, build confidence, and advance
            their careers.
          </p>
          <p>
            The journey started when Araceli Garcia, an aspiring
            ABO-certified optician, expressed her desire to prepare for the
            ABO exam. Recognizing her dedication, Dr. Najla Malak-Majdalani
            offered to help guide her studies. Soon after, Dr. Betsy Shyu, who practiced in
            the same office, joined the effort. Together, they formed a
            study group that included six additional opticians who shared
            the same goal of becoming ABO certified.
          </p>
          <p>
            The results were remarkable. Nearly everyone in the group passed
            the ABO exam. However, one person did not: Kiara Resplandor.
          </p>
          <p>
            While disappointing at the time, that setback became the
            foundation of something much bigger. Rather than giving up,
            Kiara reflected deeply on why she had failed and what could be
            done differently. She realized that many talented opticians
            lacked the support, structure, and encouragement needed to
            succeed. Determined to overcome the challenge, she gathered two
            more opticians for a focused self-review study group. Together,
            they committed themselves to the process, and all three
            successfully passed the ABO exam.
          </p>
          <p>
            For many, earning certification would have marked the end of
            the journey. For Kiara, it was only the beginning.
          </p>
          <p>
            She saw firsthand how ABO certification could transform careers
            by increasing professional credibility, creating job security,
            opening opportunities for higher pay, and strengthening
            confidence in patient care. She believed every optician
            deserved access to those opportunities.
          </p>
          <p>
            Driven by this vision, Kiara continued organizing study
            sessions and inviting more opticians to participate. Many of
            the original ABO graduates volunteered their time to help
            future candidates whenever possible. However, as their careers
            advanced and they became busy managing practices and leading
            teams, it became clear that the need for mentorship could not
            rely on a few individuals alone. The mission had to continue
            and grow.
          </p>
          <p className="font-medium text-ink">
            That mission became Elevate Opticians.
          </p>
          <p>
            Over the years, Elevate Opticians evolved into a volunteer-led
            mentorship and study group built on a simple philosophy: when
            one optician succeeds, the entire profession becomes stronger.
            The commitment was significant. Study sessions were often held
            twice a week. Members met in person, shared meals, reviewed
            challenging concepts together, and participated in ABO exam
            marathons designed to build confidence and improve first-time
            pass rates.
          </p>
          <p>
            More importantly, Elevate Opticians became a safe and
            supportive community where opticians could encourage one
            another, ask questions without judgment, and celebrate each
            other's achievements.
          </p>
          <p>
            Today, more than six years later, Elevate Opticians has helped
            24 opticians achieve ABO certification, with many going on to
            become leaders, trainers, managers, business consultants, and
            respected professionals within the optical industry. While
            certification remains an important milestone, the true impact
            has always been about empowering people to believe in
            themselves and realize their full potential.
          </p>

          <div className="[column-span:all] grid gap-6 border-y border-ink/10 py-8 sm:grid-cols-3">
            <Stat label="Founded" value="2020" />
            <Stat label="Opticians Certified" value="24" />
            <Stat label="Years Running" value="6+" />
          </div>

          <p>
            As Elevate Opticians continues to grow, so does its vision. The
            organization remains committed to fostering a culture of
            kindness, inclusion, mentorship, and professional excellence.
            The goal is not only to help more opticians pass an exam but
            also to build a community where no one feels alone in their
            journey.
          </p>
          <p className="font-medium text-ink">
            This is only the beginning.
          </p>
          <p>
            Elevate Opticians will continue to inspire, educate, and
            support future generations of optical professionals, proving
            that when people lift each other up, extraordinary things are
            possible.
          </p>

          <blockquote className="[column-span:all] mt-2 border-l-4 border-ink pl-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink/50">
              Our mission is simple
            </p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
              Elevate the profession. Empower the optician. Leave no one
              behind.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
