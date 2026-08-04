import { volunteers, type Volunteer } from "@/data/team"
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

function VolunteerTile({ member }: { member: Volunteer }) {
  return (
    <div className="flex items-center gap-4 border border-purple/10 bg-white p-5">
      <div className="flex size-12 shrink-0 items-center justify-center bg-purple font-display text-sm font-bold text-white">
        {initials(member.name)}
      </div>
      <div>
        <p className="font-display text-base font-semibold text-purple">
          {member.name}
        </p>
        <p className="text-xs uppercase tracking-wide text-foreground/50">
          {member.roles.join(" · ")}
        </p>
      </div>
    </div>
  )
}

export function Volunteers() {
  return (
    <section id="volunteers" className="bg-lavender/15 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <h2 className="font-display text-2xl font-bold text-purple sm:text-3xl">
          Run entirely by volunteers.
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button asChild size="sm">
            <a href={`mailto:${JOIN_EMAIL}`}>Join Now</a>
          </Button>
          <a
            href={`mailto:${JOIN_EMAIL}`}
            className="text-sm font-medium text-purple underline-offset-4 hover:underline"
          >
            {JOIN_EMAIL}
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {volunteers.map((member) => (
            <VolunteerTile key={member.name} member={member} />
          ))}
        </div>
        <p className="mt-6 text-xs uppercase tracking-wide text-purple/40">
          Sample roster — swap in your real facilitators before publishing.
        </p>
      </div>
    </section>
  )
}
