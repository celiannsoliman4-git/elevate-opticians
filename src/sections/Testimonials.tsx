import { testimonials } from "@/data/team"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gold/15 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Testimonials
        </p>
        <h2 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
          What graduates say.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name + t.quote} className="border border-ink/10 bg-white p-6">
              <p className="text-foreground/75">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 font-display text-sm font-semibold text-ink">
                {t.name}
              </p>
              <p className="text-xs uppercase tracking-wide text-foreground/50">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-wide text-ink/40">
          Sample testimonials — replace with real quotes from your graduates
          before publishing.
        </p>
      </div>
    </section>
  )
}
