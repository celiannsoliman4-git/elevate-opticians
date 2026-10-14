import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/data/team"

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length
  const t = testimonials[index]

  function go(next: number) {
    setIndex((next + total) % total)
  }

  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-ink">
              What graduates say
            </h3>
          </div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink/40">
            {index + 1} of {total}
          </p>
        </div>

        <div className="mt-6 rounded-lg border border-ink/10 bg-gold/15 p-8">
          {t.quote.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className={i === 0 ? "text-foreground/75" : "mt-4 text-foreground/75"}
            >
              {paragraph}
            </p>
          ))}
          <p className="mt-6 font-display text-sm font-semibold text-ink">
            {t.name}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="flex size-10 items-center justify-center border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name + item.detail}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`size-2.5 rounded-full transition-colors ${
                  i === index ? "bg-ink" : "bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="flex size-10 items-center justify-center border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
