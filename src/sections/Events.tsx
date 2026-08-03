type SessionInfo = {
  id: string
  day: string
  time: string
  title: string
  location: string
  description: string
}

const sessions: SessionInfo[] = [
  {
    id: "abo-fundamentals",
    day: "Every Tuesday",
    time: "7:00 PM PT",
    title: "ABO Optics Fundamentals",
    location: "Online via Zoom",
    description:
      "A rotating weekly review covering core ABO topics — optics, lens types, and dispensing basics — with open Q&A.",
  },
]

export function Events() {
  return (
    <section id="events" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-bold text-purple sm:text-3xl">
            This week's session.
          </h2>
          <a
            href="#join"
            className="text-sm font-semibold text-purple hover:underline"
          >
            Get the full schedule →
          </a>
        </div>

        <div className="mt-10 divide-y divide-purple/10 border-y border-purple/10">
          {sessions.map((s) => (
            <div
              key={s.id}
              className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start sm:gap-8"
            >
              <div className="shrink-0 sm:w-40">
                <p className="font-display text-base font-semibold text-purple">
                  {s.day}
                </p>
                <p className="text-sm text-foreground/60">{s.time}</p>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-purple">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">
                  {s.location}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
