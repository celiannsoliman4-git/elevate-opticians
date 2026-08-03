import { pathway } from "@/data/programs"

export function Pathway() {
  return (
    <section id="path" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-2xl font-bold text-purple sm:text-3xl">
          Your path to getting licensed.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pathway.map((p, i) => (
            <div key={p.step} className="relative pl-0">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-purple/20">
                  {p.step}
                </span>
                {i < pathway.length - 1 && (
                  <span className="hidden h-px flex-1 bg-purple/15 lg:block" />
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-purple">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
