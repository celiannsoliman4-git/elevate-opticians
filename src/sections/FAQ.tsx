const faqs = [
  {
    q: "Is Elevate Opticians really free?",
    a: "Yes, completely. We're a volunteer-led community and never charge dues, membership fees, or study session costs. Our mission is to make mentorship and certification support accessible to every optician.",
  },
  {
    q: "Do I need experience to join?",
    a: "No. We welcome apprentices, career changers, working opticians, and anyone preparing for the ABO exam for the first time or a retake. Wherever you're starting from, you're welcome here.",
  },
  {
    q: "What's the time commitment?",
    a: "Whatever works for you. Attend every session or join only when a topic is relevant to your goals. There's no attendance requirement and no minimum commitment.",
  },
  {
    q: "Do I have to be studying for the ABO to join?",
    a: "No. While many members are preparing for certification, others join to learn more about optics, connect with mentors, build confidence, and grow professionally. Everyone is welcome.",
  },
  {
    q: "What happens during a study session?",
    a: "Every session is a little different. Topics may include optics fundamentals, lens designs, troubleshooting, ABO review questions, test-taking strategies, and open discussion with mentors and fellow opticians.",
  },
  {
    q: "What if I've already failed the ABO exam?",
    a: "Then you've come to the right place. Elevate Opticians was built on the belief that a failed exam does not define your future. With support, persistence, and the right community, success is possible.",
  },
  {
    q: "Is Elevate Opticians only for California residents?",
    a: "No. Although Elevate Opticians was founded in California, our mission is to support opticians everywhere. We welcome participants from all locations, backgrounds, and experience levels.",
  },
  {
    q: "Can I become a mentor or volunteer?",
    a: "Absolutely. We are always looking for passionate opticians, certified professionals, trainers, and industry leaders who want to share their knowledge and help others succeed.",
  },
  {
    q: "Does Elevate Opticians guarantee exam success?",
    a: "No. We cannot guarantee exam results, but we are committed to providing educational support, mentorship, accountability, and encouragement to help you prepare with confidence.",
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
