import { ExternalLink, Newspaper } from "lucide-react"
import { posts } from "@/data/posts"
import { JOIN_EMAIL } from "@/data/programs"
import { EventCalendar } from "@/pages/EventCalendar"

// Parse as a local date — new Date("2026-10-07") is treated as UTC and
// renders a day earlier in US timezones.
function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number)
  if (!y || !m || !d) return iso
  return new Date(y, m - 1, d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function News() {
  return (
    <section id="news" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.32em] text-ink/60">
          What's New
        </p>
        <h1 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
          News &amp; announcements
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
          Updates from the community — milestones, sponsor spotlights, and news
          worth sharing with opticians everywhere.
        </p>

        {posts.length === 0 ? (
          <div className="mt-12 rounded-lg border border-dashed border-ink/25 bg-gold/10 p-10 text-center">
            <Newspaper
              className="mx-auto size-8 text-ink/30"
              strokeWidth={1.5}
            />
            <p className="mt-4 font-display text-lg font-bold text-ink">
              First post coming soon
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-foreground/60">
              We're just getting started here. Check back shortly, or{" "}
              <a
                href="/#join"
                className="text-ink underline underline-offset-4 hover:text-accent"
              >
                join our list
              </a>{" "}
              to hear from us directly.
            </p>
          </div>
        ) : (
          <div className="mt-14 space-y-14">
            {posts.map((post, i) => (
              <article
                key={`${post.date}-${i}`}
                className={i > 0 ? "border-t border-ink/10 pt-14" : ""}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wide">
                  <time className="text-ink/50">{formatDate(post.date)}</time>
                  {post.category && (
                    <>
                      <span className="text-ink/25">·</span>
                      <span className="text-accent">{post.category}</span>
                    </>
                  )}
                </div>

                <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
                  {post.title}
                </h2>

                {post.image && (
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="mt-6 w-full rounded-lg border border-ink/10 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                )}

                <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/75">
                  {post.body.split("\n\n").map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>

                {post.link && (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    {post.linkLabel || "Read more"}
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        )}

        <p className="mt-16 border-t border-ink/10 pt-8 text-sm text-foreground/60">
          Have something worth announcing? Email us at{" "}
          <span className="font-medium text-ink">{JOIN_EMAIL}</span>.
        </p>
      </div>
    </section>
  )
}

// Combined "News & Calendar" page: announcements first, then the calendar.
export function NewsAndCalendar() {
  return (
    <>
      <News />
      <EventCalendar />
    </>
  )
}
