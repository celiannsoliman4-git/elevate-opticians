import { graduates } from "@/data/team"

export function Graduates() {
  return (
    <section id="graduates" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          23 Opticians Certified
        </p>
        <h2 className="mt-6 font-display text-2xl font-bold text-ink sm:text-3xl">
          Our graduates.
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {graduates.map((name) => (
            <div
              key={name}
              className="border border-ink/10 bg-gold/15 px-4 py-3 text-sm font-medium text-ink"
            >
              {name}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-wide text-ink/40">
          Sample names — replace with your real graduates before publishing.
        </p>
      </div>
    </section>
  )
}
