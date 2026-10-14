import { founder, coordinator } from "@/data/team"

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z" />
    </svg>
  )
}

type Person = {
  name: string
  title: string
  bio: string
  linkedin?: string
}

function PersonCard({ person, photo }: { person: Person; photo: string }) {
  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-ink/10 bg-gold/15 p-8 sm:flex-row sm:items-start sm:p-10">
      <img
        src={photo}
        alt={person.name}
        className="h-56 w-44 shrink-0 self-center rounded-lg object-cover object-top ring-2 ring-bronze/40 sm:self-start"
      />
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <p className="font-display text-2xl font-bold text-ink sm:text-3xl">
            {person.name}
          </p>
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on LinkedIn`}
              className="text-ink/50 transition-colors hover:text-accent"
            >
              <LinkedinIcon className="size-5" />
            </a>
          )}
        </div>
        <p className="mt-1 text-sm font-medium uppercase tracking-wide text-accent">
          {person.title}
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          {person.bio}
        </p>
      </div>
    </div>
  )
}

// Rendered as the closing part of the Our Story section.
export function Founder() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          The People Behind It
        </p>

        <div className="mt-8 space-y-6">
          <PersonCard person={founder} photo="/kiara.jpg" />
          <PersonCard person={coordinator} photo="/lian.jpg" />
        </div>
      </div>
    </section>
  )
}
