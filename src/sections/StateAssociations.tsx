import { Map, HeartHandshake, GraduationCap, Users } from "lucide-react"
import { JOIN_EMAIL } from "@/data/programs"

const pipeline = [
  {
    icon: HeartHandshake,
    step: "01",
    title: "No one studies alone",
    body: "Too many aspiring opticians in your state are preparing for certification by themselves, with no mentor and no one to ask. We give them a community, weekly sessions, and people who have already walked the path.",
  },
  {
    icon: GraduationCap,
    step: "02",
    title: "They earn their certification",
    body: "Six years of weekly study sessions, practice exams, and ANSI drills — a proven format, free to every participant, that turns determined candidates into certified opticians.",
  },
  {
    icon: Users,
    step: "03",
    title: "They become your members",
    body: "Newly certified opticians are the most invested people in the profession, and we actively encourage them to join the association representing their state. Every optician we help certify is a future member for you.",
  },
]

export function StateAssociations() {
  return (
    <section id="state-associations" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-gold">
            <Map className="size-5" strokeWidth={1.75} />
            <span className="text-xs font-medium uppercase tracking-[0.32em]">
              For State Associations
            </span>
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Your future members are studying right now
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Partner with us to bring Elevate Opticians to your state. We support
            aspiring licensed opticians through certification — and send them
            toward the association that represents them. You gain members who
            are already certified, already engaged, and already in the habit of
            showing up for their profession.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {pipeline.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title}>
                <div className="flex items-center gap-3">
                  <Icon className="size-6 text-gold" strokeWidth={1.5} />
                  <span className="font-display text-sm font-bold text-white/25">
                    {p.step}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {p.body}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <p className="text-base leading-relaxed text-white/75">
            We never charge opticians, and we don't compete for your members —
            we help build them. If you lead an association and want Elevate in
            your state, reach out at{" "}
            <span className="font-medium text-gold">{JOIN_EMAIL}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
