import { useState } from "react"
import { X } from "lucide-react"
import { educationPartners } from "@/data/team"

export function EducationPartners() {
  const [selected, setSelected] = useState<number | null>(null)
  const partner = selected === null ? null : educationPartners[selected]

  return (
    <section id="education-partners" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
            Partners
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Meet our partners
          </h2>
          <p className="mt-6 text-lg text-foreground/70">
            Industry leaders, educators, and mentors who share their knowledge to
            help opticians grow. Select anyone below to read their story.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {educationPartners.map((p, i) => {
            const isSelected = selected === i
            return (
              <button
                key={p.name}
                onClick={() => setSelected(isSelected ? null : i)}
                aria-expanded={isSelected}
                className={`flex flex-col items-center rounded-2xl border bg-white p-6 text-center transition-colors ${
                  isSelected
                    ? "border-bronze ring-1 ring-bronze"
                    : "border-ink/10 hover:border-bronze/50"
                }`}
              >
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt=""
                    className="size-24 rounded-full object-cover object-top ring-2 ring-bronze/30"
                  />
                ) : (
                  <span className="flex size-24 items-center justify-center rounded-full bg-gold/25 font-display text-2xl font-bold text-ink ring-2 ring-bronze/30">
                    {p.name
                      .split(",")[0]
                      .split(" ")
                      .filter((w) => /^[A-Za-z]/.test(w))
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                )}
                <p className="mt-4 font-display text-lg font-bold text-ink">
                  {p.name.split(",")[0]}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-ink/50">
                  {p.title}
                </p>
                <span className="mt-3 text-xs font-medium uppercase tracking-wide text-accent">
                  {isSelected ? "Hide bio" : "Read bio"}
                </span>
              </button>
            )
          })}
        </div>

        {partner && (
          <div className="mt-8 rounded-2xl border border-ink/10 bg-gold/15 p-8 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              {partner.photo && (
                <img
                  src={partner.photo}
                  alt={partner.name}
                  className="size-28 shrink-0 rounded-full object-cover object-top ring-2 ring-bronze/30"
                />
              )}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                      {partner.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wide text-accent">
                      {partner.title}
                    </p>
                    {"website" in partner && partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm text-ink/60 underline-offset-4 hover:text-accent hover:underline"
                      >
                        {partner.website
                          .replace(/^https?:\/\//, "")
                          .replace(/\/$/, "")}
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Close bio"
                    className="flex size-8 shrink-0 items-center justify-center rounded-md text-ink/50 transition-colors hover:bg-ink hover:text-white"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/75">
                  {partner.bio.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
