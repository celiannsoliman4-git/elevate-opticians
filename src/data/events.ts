export type Event = {
  title: string
  date: string // ISO format, e.g. "2026-09-14"
  time?: string // e.g. "6:00 PM PT"
  description: string
  link?: string // e.g. Zoom link or signup link
}

// Add new classes/events here — newest or soonest first.
export const events: Event[] = []
