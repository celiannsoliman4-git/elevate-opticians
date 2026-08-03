import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="bg-lavender/15">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10 lg:py-28">
        <img
          src="/seal.png"
          alt="Elevate Opticians seal — mentorship and study group, volunteer-led"
          className="mx-auto h-64 w-64 rounded-full shadow-[0_20px_45px_-20px_rgba(76,29,149,0.45)] sm:h-80 sm:w-80"
        />

        <div className="mt-10">
          <Button asChild size="lg">
            <a href="#join">Join a Study Session</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
