export type Event = {
  title: string
  date: string // ISO format, e.g. "2026-09-14"
  time?: string // e.g. "6:00 PM PT"
  description: string
  link?: string // e.g. Zoom link or signup link
}

// Add new classes/events here — newest or soonest first.
export const events: Event[] = [
  {
    title: "Acing the ABO with Andrew Bruce",
    date: "2026-09-15",
    time: "9:00 AM",
    description:
      "A free live American Board of Opticianry (ABO) exam prep session led by nationally recognized instructor Andrew Bruce. Choose whichever session time works for you — the same material is covered on both days.",
    link: "https://www.uuniversity.com/AcingtheABO.html",
  },
  {
    title: "Acing the ABO with Andrew Bruce",
    date: "2026-09-16",
    time: "3:00 PM",
    description:
      "A free live American Board of Opticianry (ABO) exam prep session led by nationally recognized instructor Andrew Bruce. Choose whichever session time works for you — the same material is covered on both days.",
    link: "https://www.uuniversity.com/AcingtheABO.html",
  },
]
