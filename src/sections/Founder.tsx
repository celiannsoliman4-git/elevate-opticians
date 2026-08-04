import { founder } from "@/data/team"
import { JOIN_EMAIL } from "@/data/programs"
import { Button } from "@/components/ui/button"

export function Founder() {
  return (
    <section id="founder" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Meet the Founder
        </p>

        <div className="mt-6 flex flex-col items-start gap-6 border border-ink/10 bg-gold/15 p-8 sm:flex-row sm:items-center">
          <img
            src="/kiara.jpg"
            alt={founder.name}
            className="size-28 shrink-0 rounded-full object-cover ring-2 ring-bronze/40"
          />
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
      </div>
    </section>
  )
}
