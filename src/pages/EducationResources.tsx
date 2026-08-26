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

        <div className="mt-8 max-w-2xl border-l-4 border-bronze bg-gold/15 px-6 py-5">
          <p className="text-sm leading-relaxed text-foreground/80">
            We are grateful to <span className="font-semibold text-ink">VSP</span> for
            supporting our community and making these educational resources available to
            opticians pursuing certification.
          </p>
        </div>

        {resources.length === 0 ? (
          <div className="mt-12 rounded-lg border border-dashed border-ink/20 bg-gold/10 p-10 text-center">
            <p className="text-sm text-foreground/60">
              Resources are being added soon. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="mt-14 space-y-12">
            {resources.map((resource) => (
              <article
                key={resource.url}
                className="flex flex-col gap-8 border-t border-ink/10 pt-12 sm:flex-row sm:gap-10"
              >
                {resource.image && (
                  <img
                    src={resource.image}
                    alt=""
                    className="aspect-[3/4] w-full shrink-0 rounded-lg object-cover object-top ring-2 ring-bronze/40 sm:w-56"
                  />
                )}
                <div className="flex flex-col items-start">
                  {resource.provider && (
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                      {resource.provider}
                    </p>
                  )}
                  <h2 className="font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                    {resource.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-foreground/75">
                    {resource.description}
                  </p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-md bg-bronze px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink"
                  >
                    Visit Resource
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
