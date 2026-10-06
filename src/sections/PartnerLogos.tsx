import { partnerLogos, partnersHeading } from "@/data/sponsorship"

export function PartnerLogos() {
  if (partnerLogos.length === 0) return null

  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="border-t border-ink/10 pt-12">
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
      </div>
    </section>
  )
}
