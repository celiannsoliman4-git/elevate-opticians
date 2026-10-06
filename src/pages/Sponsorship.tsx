import { Check, Mail, HeartHandshake } from "lucide-react"
import {
  tiers,
  sponsorAnOptician,
  becomeASponsor,
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

        {/* Sponsor an optician */}
        <div className="mt-12 rounded-2xl border border-ink/10 bg-gold/15 p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-accent">
                <HeartHandshake className="size-5" strokeWidth={1.75} />
                <span className="text-xs font-medium uppercase tracking-[0.2em]">
                  For Individuals
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                {sponsorAnOptician.title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/75">
                {sponsorAnOptician.summary}
              </p>
            </div>

            <div className="w-full lg:w-80">
              <ul className="space-y-3">
                {sponsorAnOptician.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-foreground/80">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      strokeWidth={2.5}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${JOIN_EMAIL}?subject=${encodeURIComponent(
                  "Sponsor an optician — more details",
                )}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-bronze px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
              >
                Reach out for details
              </a>
            </div>
          </div>
        </div>

        {/* Why sponsor */}
        <p className="mt-20 text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          For Companies
        </p>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
          Corporate partnership
        </h3>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
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

              <h3 className="font-display text-2xl font-bold text-ink">
                {tier.name}
              </h3>
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
                Reach out about {tier.name.replace(" Partner", "")}
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

        {/* Closing call to action */}
        <div className="mt-16 rounded-2xl bg-ink px-8 py-12 text-center sm:px-12">
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {becomeASponsor.title}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            {becomeASponsor.body}
          </p>
          <a
            href={`mailto:${JOIN_EMAIL}?subject=${encodeURIComponent(
              "Becoming a sponsor",
            )}`}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold"
          >
            <Mail className="size-4" />
            Contact us about sponsorship
          </a>
        </div>
      </div>
    </section>
  )
}
