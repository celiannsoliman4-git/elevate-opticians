import { founder, coordinator } from "@/data/team"
import { JOIN_EMAIL } from "@/data/programs"
import { Button } from "@/components/ui/button"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z" />
    </svg>
  )
}

export function Founder() {
  return (
    <section id="founder" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Meet the Founder
        </p>

        <div className="mt-6 flex flex-col items-start gap-8 border border-ink/10 bg-gold/15 p-10 sm:flex-row sm:items-center">
          <img
            src="/kiara.jpg"
            alt={founder.name}
            className="h-56 w-44 shrink-0 rounded-lg object-cover ring-2 ring-bronze/40"
          />
          <div>
            <div className="flex items-center gap-3">
              <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
                {founder.name}
              </p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} on LinkedIn`}
                className="text-ink/50 transition-colors hover:text-accent"
              >
                <LinkedinIcon className="size-6" />
              </a>
            </div>
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              {founder.title}
            </p>
            <p className="mt-1 font-display text-base italic text-ink/60">
              {founder.tagline}
            </p>
            <p className="mt-3 max-w-md text-lg text-foreground/70">
              {founder.bio}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-start gap-4 border border-ink/10 bg-white p-6 sm:flex-row sm:items-center">
          <img
            src="/lian.jpg"
            alt={coordinator.name}
            className="h-20 w-16 shrink-0 rounded-lg object-cover ring-2 ring-bronze/40"
          />
          <div>
            <div className="flex items-center gap-2">
              <p className="font-display text-lg font-bold text-ink">
                {coordinator.name}
              </p>
              <a
                href={coordinator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${coordinator.name} on LinkedIn`}
                className="text-ink/50 transition-colors hover:text-accent"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              {coordinator.title}
            </p>
            <p className="mt-2 text-sm text-foreground/70">{coordinator.bio}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild size="sm">
            <a href={`mailto:${JOIN_EMAIL}`}>Join Now</a>
          </Button>
          <a
            href={`mailto:${JOIN_EMAIL}`}
            className="text-sm font-medium text-ink underline-offset-4 hover:underline"
          >
            {JOIN_EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}
