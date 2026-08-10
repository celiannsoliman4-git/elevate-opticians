const faqs = [
  {
    q: "Is Elevate Opticians really free?",
    a: "Yes, completely. We're volunteer-led with no dues, membership fees, or session costs.",
  },
  {
    q: "Do I need experience to join?",
    a: "No. We welcome apprentices, career changers, first-timers, and retakes alike.",
  },
  {
    q: "What's the time commitment?",
    a: "Whatever works for you. Attend every session or drop in when topics are relevant. No minimum.",
  },
  {
    q: "Do I have to be studying for the American Board of Opticianry (ABO)?",
    a: "No. Join to learn optics, connect with mentors, build confidence, or grow professionally.",
  },
  {
    q: "What happens during a study session?",
    a: "Topics vary: optics fundamentals, lens designs, American Board of Opticianry (ABO) review, test strategies, and mentor discussions.",
  },
  {
    q: "What if I've failed the American Board of Opticianry (ABO)?",
    a: "You've come to the right place. We believe a failed exam doesn't define your future.",
  },
  {
    q: "Is this only for California?",
    a: "No. Founded in California, but open to opticians everywhere, regardless of location or background.",
  },
  {
    q: "Can I volunteer or mentor?",
    a: "Absolutely. We're always looking for passionate professionals to share knowledge and help others.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Questions people ask us
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {faqs.map((f, i) => (
            <div key={f.q} className="flex gap-4">
              <span className="font-display text-sm font-bold text-ink/30 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink">
                  {f.q}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-foreground/65">
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
