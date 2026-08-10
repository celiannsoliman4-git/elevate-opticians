import { whoWeServe } from "@/data/programs"

export function WhoItsFor() {
  return (
    <section id="who" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Who We Serve
        </p>
        <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
          Wherever you are in the journey, there's a seat for you
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whoWeServe.map((audience) => (
            <div
              key={audience.title}
              className="rounded-lg border border-ink/10 bg-gold/15 p-6"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {audience.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
