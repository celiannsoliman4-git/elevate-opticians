export type Event = {
  title: string
  date: string // ISO format of the FIRST session, e.g. "2026-09-15"
  time?: string // e.g. "6:00 PM PT"
  weeks?: number // number of weekly sessions; omit or 1 for a single date
  description: string
  link?: string // e.g. Zoom link or signup link
}

// Add new classes/events here — newest or soonest first.
export const events: Event[] = [
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
