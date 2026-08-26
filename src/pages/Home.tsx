import { Hero } from "@/sections/Hero"
import { Mission } from "@/sections/Mission"
import { Founder } from "@/sections/Founder"
import { EducationPartners } from "@/sections/EducationPartners"
import { WhyABOMatters } from "@/sections/WhyABOMatters"
import { WhoItsFor } from "@/sections/WhoItsFor"
import { Testimonials } from "@/sections/Testimonials"
import { Graduates } from "@/sections/Graduates"
import { FAQ } from "@/sections/FAQ"
import { Join } from "@/sections/Join"
import { Legal } from "@/sections/Legal"

export function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Founder />
      <EducationPartners />
      <WhyABOMatters />
      <WhoItsFor />
      <Testimonials />
      <Graduates />
      <FAQ />
      <Join />
      <Legal />
    </>
  )
}
