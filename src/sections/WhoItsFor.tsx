import { whoWeServe } from "@/data/programs"

export function WhoItsFor() {
  return (
    <section id="who" className="bg-gold/15 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-ink/60">
          Wherever you are in the journey, there's a seat for you
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {whoWeServe.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink/20 bg-white px-4 py-2 text-sm font-medium text-ink"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
