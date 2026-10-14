import { whoWeServe } from "@/data/programs"

export function WhoItsFor() {
  return (
    <section className="bg-gold/15 pb-20 sm:pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Wherever you are in the journey, there's a seat for you
        </h3>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {whoWeServe.map((audience) => (
            <div
              key={audience.title}
              className="rounded-lg border border-ink/10 bg-white p-6"
            >
              <h4 className="font-display text-lg font-bold text-ink">
                {audience.title}
              </h4>
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
