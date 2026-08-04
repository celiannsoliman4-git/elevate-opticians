import { JOIN_EMAIL } from "@/data/programs"

export function Legal() {
  return (
    <section id="legal" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Legal notice &amp; privacy.
        </h2>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/70">
          <div>
            <h3 className="font-display text-base font-semibold text-ink">
              Legal notice
            </h3>
            <p className="mt-2">
              Elevate Opticians is a volunteer-led study group and is not a
              licensing, accrediting, or governing body. Content shared
              through study sessions and resources is for educational
              purposes only and does not replace official ABO study
              materials or requirements.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold text-ink">
              Privacy policy
            </h3>
            <p className="mt-2">
              We collect only the email addresses members provide to send
              session schedules and resources. This information is never
              sold or shared with third parties. Questions about your data?
              Contact{" "}
              <a
                href={`mailto:${JOIN_EMAIL}`}
                className="text-ink underline-offset-4 hover:underline"
              >
                {JOIN_EMAIL}
              </a>
              .
            </p>
          </div>

          <p className="text-xs uppercase tracking-wide text-ink/40">
            Last updated August 2026
          </p>
        </div>
      </div>
    </section>
  )
}
