export type Event = {
  title: string
  date: string // e.g. "September 14, 2026"
  time?: string // e.g. "6:00 PM PT"
  description: string
  link?: string // e.g. Zoom link or signup link
}

// Add new classes/events here — newest or soonest first.
export const events: Event[] = []
