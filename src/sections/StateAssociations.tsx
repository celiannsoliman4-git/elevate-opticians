import { Map, Users, BookOpen, Handshake } from "lucide-react"
import { JOIN_EMAIL } from "@/data/programs"

const offerings = [
  {
    icon: BookOpen,
    title: "A proven study model",
    body: "Six years of weekly sessions, practice exams, and ANSI drills — a format aspiring licensed opticians can run from day one instead of building it from scratch.",
  },
  {
    icon: Users,
    title: "Mentors who've done it",
    body: "Certified opticians, educators, and industry leaders who volunteer their time to coach candidates through the exam and beyond.",
  },
  {
    icon: Handshake,
    title: "Partnership, not competition",
    body: "We don't replace your association — we strengthen it. Your members get support, your organization gets stronger retention and a reason to join.",
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
            Bring certification support to your state
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            What began as one study group in California now reaches opticians
            across the country. We work with state associations to bring
            mentorship, exam preparation, and a culture of lifting each other up
            to their members — wherever they practice.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {offerings.map((o) => {
            const Icon = o.icon
            return (
              <div key={o.title}>
                <Icon className="size-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {o.body}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <p className="text-base text-white/75">
            Leading an association and want to talk?{" "}
            <span className="font-medium text-gold">{JOIN_EMAIL}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
