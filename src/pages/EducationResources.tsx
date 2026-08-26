import { ExternalLink } from "lucide-react"
import { resources } from "@/data/resources"

export function EducationResources() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Keep Learning
        </p>
        <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
          Education Resources
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          A curated list of external sites, organizations, and materials to support your American Board of Opticianry (ABO) preparation and ongoing optical education.
        </p>

        {resources.length === 0 ? (
          <div className="mt-12 rounded-lg border border-dashed border-ink/20 bg-gold/10 p-10 text-center">
            <p className="text-sm text-foreground/60">
              Resources are being added soon. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {resources.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-lg border border-ink/10 bg-gold/15 p-6 transition-colors hover:border-accent sm:flex-row sm:items-start"
              >
                {resource.image && (
                  <img
                    src={resource.image}
                    alt=""
                    className="h-20 w-20 shrink-0 rounded-lg object-cover object-top ring-2 ring-bronze/40"
                  />
                )}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-base font-bold text-ink">
                      {resource.name}
                    </h3>
                    <ExternalLink className="size-4 shrink-0 text-ink/40 transition-colors group-hover:text-accent" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
