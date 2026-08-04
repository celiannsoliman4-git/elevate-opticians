import { founder, testimonials } from "@/data/team"
import { JOIN_EMAIL } from "@/data/programs"
import { Button } from "@/components/ui/button"

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gold/15 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6 border border-ink/10 bg-white p-8 sm:flex-row sm:items-center">
          <div className="flex size-16 shrink-0 items-center justify-center bg-ink font-display text-lg font-bold text-white">
            {initials(founder.name)}
          </div>
          <div>
            <p className="font-display text-2xl font-bold text-ink">
              {founder.name}
            </p>
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              {founder.title}
            </p>
            <p className="mt-2 text-foreground/70">{founder.bio}</p>
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

        <h2 className="mt-16 font-display text-2xl font-bold text-ink sm:text-3xl">
          What graduates say.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name + t.quote} className="border border-ink/10 bg-white p-6">
              <p className="text-foreground/75">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 font-display text-sm font-semibold text-ink">
                {t.name}
              </p>
              <p className="text-xs uppercase tracking-wide text-foreground/50">
                {t.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-wide text-ink/40">
          Sample testimonials — replace with real quotes from your graduates
          before publishing.
        </p>
      </div>
    </section>
  )
}
