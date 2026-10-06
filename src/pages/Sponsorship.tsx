import { Check, Mail } from "lucide-react"
import {
  tiers,
  valueProps,
  activationSteps,
  neutralityNote,
} from "@/data/sponsorship"
import { JOIN_EMAIL } from "@/data/programs"

export function Sponsorship() {
  return (
    <section id="sponsorship" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
            Partner With Us
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Corporate sponsorship
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/75">
            Elevate Opticians advances the profession through continuous
            education, American Board of Opticianry (ABO) exam preparation,
            mentorship, and workforce development. We're a trusted,
            vendor-agnostic resource connecting opticians, optometrists,
            educators, and industry partners nationwide.
          </p>
        </div>

        {/* Why sponsor */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {valueProps.map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-base font-bold text-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tiers */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl p-8 ${
                tier.featured
                  ? "border-2 border-bronze bg-gold/15"
                  : "border border-ink/10 bg-white"
              }`}
            >
              {tier.featured && (
                <span className="mb-4 self-start rounded-full bg-bronze px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  Premier Tier
                </span>
              )}

              <h3 className="font-display text-xl font-bold text-ink">
                {tier.name}
              </h3>
              <p className="mt-3 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-bold text-ink">
                  {tier.price}
                </span>
                <span className="text-sm text-ink/50">{tier.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                {tier.summary}
              </p>

              <ul className="mt-6 flex-1 space-y-3 border-t border-ink/10 pt-6">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-foreground/80">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      strokeWidth={2.5}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${JOIN_EMAIL}?subject=${encodeURIComponent(
                  `${tier.name} sponsorship inquiry`,
                )}`}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-bronze text-white hover:bg-ink"
                    : "border border-ink/20 text-ink hover:border-accent hover:text-accent"
                }`}
              >
                Become a {tier.name.replace(" Partner", "")} Partner
              </a>
            </div>
          ))}
        </div>

        {/* Neutrality + next steps */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="border-l-4 border-bronze bg-gold/15 px-6 py-5">
            <h3 className="font-display text-base font-bold text-ink">
              Open collaboration &amp; neutrality
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">
              {neutralityNote}
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-bold text-ink">
              How to get started
            </h3>
            <ol className="mt-4 space-y-3">
              {activationSteps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm text-foreground/75">
                  <span className="font-display text-sm font-bold text-ink/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <a
              href={`mailto:${JOIN_EMAIL}?subject=${encodeURIComponent(
                "Sponsorship inquiry",
              )}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink underline underline-offset-4 transition-colors hover:text-accent"
            >
              <Mail className="size-4" />
              {JOIN_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
