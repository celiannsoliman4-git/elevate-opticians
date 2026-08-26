import { Calendar, Clock } from "lucide-react"
import { events } from "@/data/events"
import { MonthCalendar } from "@/components/MonthCalendar"

export function EventCalendar() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Mark Your Calendar
        </p>
        <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
          Calendar
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          Upcoming study sessions, practice exam nights, and special events. Every session is free and open to anyone pursuing their American Board of Opticianry (ABO).
        </p>

        <div className="mt-12">
          <MonthCalendar events={events} initialYear={2026} initialMonth={8} />
        </div>

        {events.length > 0 && (
          <div className="mt-8 space-y-4">
            {events.map((event, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-lg border border-ink/10 bg-gold/15 p-6 sm:flex-row sm:items-start sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {event.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-4" />
                      {event.date}
                    </span>
                    {event.time && (
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-4" />
                        {event.time}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {event.description}
                  </p>
                </div>
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-md border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    Details
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
