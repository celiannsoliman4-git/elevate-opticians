import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { educationPartners } from "@/data/team"

export function EducationPartners() {
  const [index, setIndex] = useState(0)
  const total = educationPartners.length
  const partner = educationPartners[index]

  function go(next: number) {
    setIndex((next + total) % total)
  }

  return (
    <section id="education-partners" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
          {/* Image */}
          <div className="shrink-0 sm:w-64">
            <img
              src={partner.photo}
              alt={partner.name}
              className="aspect-square w-full rounded-lg object-cover ring-2 ring-bronze/40"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
              Education Partners
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              {partner.name}
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-accent">
              {partner.title}
            </p>
            {"website" in partner && partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm text-ink/60 underline-offset-4 hover:text-accent hover:underline"
              >
                {partner.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
            )}

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/75">
              {partner.bio}
            </p>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => go(index - 1)}
                  aria-label="Previous partner"
                  className="flex size-10 items-center justify-center border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <div className="flex items-center gap-2">
                  {educationPartners.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i)}
                      aria-label={`Go to partner ${i + 1}`}
                      className={`size-2.5 rounded-full transition-colors ${
                        i === index ? "bg-ink" : "bg-ink/20 hover:bg-ink/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => go(index + 1)}
                  aria-label="Next partner"
                  className="flex size-10 items-center justify-center border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              <p className="text-xs font-medium uppercase tracking-wide text-ink/40">
                {index + 1} of {total}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
