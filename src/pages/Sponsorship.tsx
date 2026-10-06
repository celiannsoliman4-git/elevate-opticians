import { Mail, HeartHandshake, Gift, ExternalLink } from "lucide-react"
import {
  tiers,
  sponsorAnOptician,
  donations,
  partnerLogos,
  partnersHeading,
  becomeASponsor,
  valueProps,
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
            Invest in the next generation of opticians
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
          <div className="flex items-center gap-2 text-accent">
            <HeartHandshake className="size-5" strokeWidth={1.75} />
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              For Individuals
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
            {sponsorAnOptician.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/75">
            {sponsorAnOptician.summary}
          </p>

          <div className="mt-8 border-t border-ink/15 pt-8">
            <div className="flex items-center gap-2 text-accent">
              <Gift className="size-5" strokeWidth={1.75} />
              <span className="text-xs font-medium uppercase tracking-[0.2em]">
                Donations
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
              {donations.title}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground/75">
              {donations.summary}
            </p>
            <a
              href={donations.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-bronze px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink"
            >
              Donate now
              <ExternalLink className="size-4" />
            </a>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/60">
              {donations.taxNote}
            </p>
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
            </div>
          ))}
        </div>

        {/* Partner logos */}
        {partnerLogos.length > 0 && (
          <div className="mt-20 border-t border-ink/10 pt-12">
            <p className="text-center text-xs font-medium uppercase tracking-[0.32em] text-ink/50">
              {partnersHeading}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
              {partnerLogos.map((p) => {
                const img = (
                  <img
                    src={p.logo}
                    alt={p.name}
                    title={p.name}
                    className="h-12 w-auto max-w-[180px] object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-14"
                  />
                )
                return p.url ? (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={p.name}
                  >
                    {img}
                  </a>
                ) : (
                  <span key={p.name}>{img}</span>
                )
              })}
            </div>
          </div>
        )}

        {/* Closing call to action */}
        <div className="mt-16 rounded-2xl bg-ink px-8 py-12 text-center sm:px-12">
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {becomeASponsor.title}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            {becomeASponsor.body}
          </p>
          <p className="mt-8 inline-flex items-center gap-2 font-display text-lg font-bold text-gold sm:text-xl">
            <Mail className="size-5" strokeWidth={1.75} />
            {JOIN_EMAIL}
          </p>
        </div>
      </div>
    </section>
  )
}
