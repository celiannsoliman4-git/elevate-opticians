function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-purple/50">
        {label}
      </p>
      <p className="mt-1 font-display text-base font-bold text-purple">{value}</p>
    </div>
  )
}

export function Mission() {
  return (
    <section id="mission" className="bg-lavender/15 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <h2 className="font-display text-xl font-bold text-purple sm:text-2xl">
          Our Mission
        </h2>

        <div className="mt-4 columns-1 gap-8 space-y-2 text-xs leading-snug text-foreground/70 sm:columns-2 lg:columns-3 lg:gap-10 [&>p]:[break-inside:avoid]">
          <p className="font-medium text-purple">
            That mission became Elevate Opticians.
          </p>
          <p>
            Over the years, Elevate Opticians evolved into a volunteer-led
            mentorship and study group built on a simple philosophy: when one
            optician succeeds, the entire profession becomes stronger. The
            commitment was significant. Study sessions were often held twice
            a week. Members met in person, shared meals, reviewed challenging
            concepts together, and participated in ABO exam marathons
            designed to build confidence and improve first-time pass rates.
          </p>
          <p>
            More importantly, Elevate Opticians became a safe and supportive
            community where opticians could encourage one another, ask
            questions without judgment, and celebrate each other's
            achievements.
          </p>
          <p>
            Today, more than six years later, Elevate Opticians has helped 24
            opticians achieve ABO certification, with many going on to become
            leaders, trainers, managers, business consultants, and respected
            professionals within the optical industry. While certification
            remains an important milestone, the true impact has always been
            about empowering people to believe in themselves and realize
            their full potential.
          </p>
          <p>
            As Elevate Opticians continues to grow, so does its vision. The
            organization remains committed to fostering a culture of
            kindness, inclusion, mentorship, and professional excellence. The
            goal is not only to help more opticians pass an exam but also to
            build a community where no one feels alone in their journey.
          </p>
          <p className="font-medium text-purple">This is only the beginning.</p>
          <p>
            Elevate Opticians will continue to inspire, educate, and support
            future generations of optical professionals, proving that when
            people lift each other up, extraordinary things are possible.
          </p>
        </div>

        <div className="mt-4 grid gap-4 border-t border-purple/10 pt-3 sm:grid-cols-3">
          <Stat label="Founded" value="2020" />
          <Stat label="Opticians Certified" value="24" />
          <Stat label="Years Running" value="6+" />
        </div>

        <blockquote className="mt-4 border-l-4 border-purple pl-4">
          <p className="font-display text-sm font-semibold leading-snug text-purple sm:text-base">
            Elevate the profession. Empower the optician. Leave no one
            behind.
          </p>
        </blockquote>
      </div>
    </section>
  )
}
