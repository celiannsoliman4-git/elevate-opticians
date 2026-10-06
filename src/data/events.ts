export type Event = {
  title: string
  date: string // ISO format of the FIRST session, e.g. "2026-09-15"
  time?: string // e.g. "6:00 PM PT"
  weeks?: number // number of weekly sessions; omit or 1 for a single date
  description: string
  link?: string // e.g. Zoom link or signup link
  flyer?: string // e.g. "/events/round-table.jpg" — put files in public/events/
  flyerAlt?: string
}

// Add new classes/events here — newest or soonest first.
export const events: Event[] = [
  {
    title: "State Society Round Table",
    date: "2026-10-01",
    time: "5:30 PM PT",
    description:
      "Hosted by D&D Management Services and featuring Kiara Resplandor of Elevate Opticians, this round table covered our story, our mentorship mission, and the partners we collaborate with — part of an ongoing effort to help states build and strengthen their optician associations.",
    flyer: "/events/state-society-round-table.jpg",
    flyerAlt:
      "State Society Round Table flyer featuring Kiara Resplandor, October 1, 2026",
  },
  {
    title: "Acing the ABO with Andrew Bruce — Tuesday sessions",
    date: "2026-09-15",
    time: "9:00 AM",
    weeks: 7,
    description:
      "A free 7-week live American Board of Opticianry (ABO) exam prep course led by nationally recognized instructor Andrew Bruce, covering ocular anatomy, optics, lens design, prism calculations, and dispensing standards. The Tuesday and Wednesday tracks cover the same material — pick whichever fits your schedule.",
    link: "https://www.uuniversity.com/AcingtheABO.html",
  },
  {
    title: "Acing the ABO with Andrew Bruce — Wednesday sessions",
    date: "2026-09-16",
    time: "3:00 PM",
    weeks: 7,
    description:
      "A free 7-week live American Board of Opticianry (ABO) exam prep course led by nationally recognized instructor Andrew Bruce, covering ocular anatomy, optics, lens design, prism calculations, and dispensing standards. The Tuesday and Wednesday tracks cover the same material — pick whichever fits your schedule.",
    link: "https://www.uuniversity.com/AcingtheABO.html",
  },
]

// An event counts as past only once its FINAL session has happened, so a
// multi-week course stays under "Upcoming" while it's still running.
export function isPastEvent(event: Event, now: Date = new Date()): boolean {
  const dates = eventDates(event)
  const [y, m, d] = dates[dates.length - 1].split("-").map(Number)
  const last = new Date(y, m - 1, d)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  return last < today
}

// Every date an event runs, expanded from its weekly repeat.
export function eventDates(event: Event): string[] {
  const [y, m, d] = event.date.split("-").map(Number)
  const count = event.weeks && event.weeks > 0 ? event.weeks : 1
  const out: string[] = []
  for (let i = 0; i < count; i++) {
    const dt = new Date(y, m - 1, d + i * 7)
    out.push(
      `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, "0")}-${String(
        dt.getDate(),
      ).padStart(2, "0")}`,
    )
  }
  return out
}
