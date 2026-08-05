import { graduates } from "@/data/team"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z" />
    </svg>
  )
}

export function Graduates() {
  return (
    <section id="graduates" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Our graduates.
        </h2>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {graduates.map((grad, i) =>
            grad.linkedin ? (
              <a
                key={`${grad.name}-${i}`}
                href={grad.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 border border-ink/10 bg-gold/15 px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {grad.name}
                <LinkedinIcon className="size-4 shrink-0" />
              </a>
            ) : (
              <div
                key={`${grad.name}-${i}`}
                className="border border-ink/10 bg-gold/15 px-4 py-3 text-sm font-medium text-ink"
              >
                {grad.name}
              </div>
            )
          )}
        </div>
        <p className="mt-6 text-xs uppercase tracking-wide text-ink/40">
          Some graduates have chosen to remain anonymous. Order is not
          chronological by date of passing.
        </p>
      </div>
    </section>
  )
}
