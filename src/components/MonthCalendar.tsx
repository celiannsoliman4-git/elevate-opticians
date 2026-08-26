import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Event } from "@/data/events"

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
}

export function MonthCalendar({
  events,
  initialYear,
  initialMonth,
}: {
  events: Event[]
  initialYear: number
  initialMonth: number // 0-indexed
}) {
  const [year, setYear] = useState(initialYear)
  const [month, setMonth] = useState(initialMonth)

  const eventsByDate = new Map<string, Event[]>()
  for (const event of events) {
    const list = eventsByDate.get(event.date) ?? []
    list.push(event)
    eventsByDate.set(event.date, list)
  }

  const firstOfMonth = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const startWeekday = firstOfMonth.getDay()

  const cells: (Date | null)[] = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))

  const today = new Date()
  const todayKey = toDateKey(today)

  function goToPrevMonth() {
    if (month === 0) {
      setYear(year - 1)
      setMonth(11)
    } else {
      setMonth(month - 1)
    }
  }

  function goToNextMonth() {
    if (month === 11) {
      setYear(year + 1)
      setMonth(0)
    } else {
      setMonth(month + 1)
    }
  }

  return (
    <div className="rounded-lg border border-ink/10 bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-bold text-ink">
          {MONTH_NAMES[month]} {year}
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevMonth}
            aria-label="Previous month"
            className="flex size-8 items-center justify-center rounded-md border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={goToNextMonth}
            aria-label="Next month"
            className="flex size-8 items-center justify-center rounded-md border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((day) => (
          <div
            key={day}
            className="pb-2 text-center text-xs font-medium uppercase tracking-wide text-ink/40"
          >
            {day}
          </div>
        ))}

        {cells.map((date, i) => {
          if (!date) return <div key={`empty-${i}`} />
          const key = toDateKey(date)
          const dayEvents = eventsByDate.get(key) ?? []
          const isToday = key === todayKey
          const hasEvent = dayEvents.length > 0

          return (
            <div
              key={key}
              className={`flex aspect-square flex-col items-center justify-center gap-1 rounded-md text-sm ${
                isToday ? "bg-ink text-white" : "text-ink"
              }`}
              title={dayEvents.map((e) => e.title).join(", ")}
            >
              <span>{date.getDate()}</span>
              {hasEvent && (
                <span
                  className={`size-1.5 rounded-full ${isToday ? "bg-gold" : "bg-bronze"}`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
