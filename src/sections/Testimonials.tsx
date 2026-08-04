import { testimonials } from "@/data/team"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gold/15 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Testimonials
        </p>
        <h2 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
          What graduates say.
        </h2>

        <div className="mt-8 space-y-6">
          {testimonials.map((t) => (
            <div
              key={t.name + t.detail}
              className="border border-ink/10 bg-white p-8"
            >
              {t.quote.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className={i === 0 ? "text-foreground/75" : "mt-4 text-foreground/75"}
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-6 font-display text-sm font-semibold text-ink">
                {t.name}
              </p>
              <p className="text-xs uppercase tracking-wide text-foreground/50">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
