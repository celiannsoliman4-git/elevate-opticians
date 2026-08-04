const faqs = [
  {
    q: "Is Elevate Opticians really free?",
    a: "Yes — completely. We're volunteer-run and don't charge dues, session fees, or membership costs of any kind.",
  },
  {
    q: "Do I need experience to join?",
    a: "No. We welcome apprentices just starting out, career-changers, and working opticians studying for the ABO for the first time or retaking it — wherever you work, whatever your background.",
  },
  {
    q: "What's the time commitment?",
    a: "Whatever works for you. Come to every session or drop in only when a topic is relevant to you — there's no attendance requirement.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Questions people ask us.
        </h2>

        <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
          {faqs.map((f, i) => (
            <div key={f.q} className="flex gap-6 py-6">
              <span className="font-display text-sm font-bold text-ink/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  {f.q}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
