import { useState } from "react"
import { Calendar, Clock, ExternalLink } from "lucide-react"
import { events, eventDates, isPastEvent, type Event } from "@/data/events"
import { MonthCalendar } from "@/components/MonthCalendar"

// Parse as a local date. `new Date("2026-09-15")` is treated as UTC, which
// renders as the previous day in US timezones.
function toLocalDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d)
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  if (!y || !m || !d) return iso
  return toLocalDate(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

// Single date, or "Tuesdays · Sept 15 – Oct 27, 2026" for a weekly series.
function formatSchedule(event: Event) {
  const dates = eventDates(event)
  if (dates.length < 2) return formatDate(event.date)

  const first = toLocalDate(dates[0])
  const last = toLocalDate(dates[dates.length - 1])
  const weekday = first.toLocaleDateString("en-US", { weekday: "long" }) + "s"
  const short = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  return `${weekday} · ${short(first)} – ${short(last)}, ${last.getFullYear()}`
}

export function EventCalendar() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming")
  const past = events.filter((e) => isPastEvent(e))
  const upcoming = events.filter((e) => !isPastEvent(e))
  const shown = tab === "upcoming" ? upcoming : past

  return (
    <section id="calendar" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          Mark Your Calendar
        </p>
        <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
          Calendar
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          Upcoming study sessions, practice exam nights, and special events. Every session is free and open to anyone pursuing their American Board of Opticianry (ABO).
        </p>

        <div className="mt-12">
          <MonthCalendar events={events} />
        </div>

        {/* Upcoming / Past toggle */}
        <div className="mt-10 flex gap-2 border-b border-ink/10">
          {(["upcoming", "past"] as const).map((t) => {
            const count = t === "upcoming" ? upcoming.length : past.length
            const active = tab === t
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`-mb-px border-b-2 px-4 py-2.5 text-sm font-medium capitalize transition-colors ${
                  active
                    ? "border-bronze text-ink"
                    : "border-transparent text-ink/50 hover:text-ink"
                }`}
              >
                {t} events
                <span className="ml-1.5 text-xs text-ink/40">({count})</span>
              </button>
            )
          })}
        </div>

        {shown.length === 0 ? (
          <p className="mt-8 rounded-lg border border-dashed border-ink/20 bg-gold/10 p-8 text-center text-sm text-foreground/60">
            {tab === "upcoming"
              ? "No upcoming events posted yet. Check back shortly."
              : "No past events to show yet."}
          </p>
        ) : (
          <div className="mt-8 space-y-4">
            {shown.map((event, i) => (
              <div
                key={i}
                className="rounded-lg border border-ink/10 bg-gold/15 p-6"
              >
                <h3 className="font-display text-lg font-bold text-ink">
                  {event.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-4" />
                    {formatSchedule(event)}
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
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 break-all text-sm font-medium text-ink underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    <ExternalLink className="size-4 shrink-0" />
                    {event.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
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
