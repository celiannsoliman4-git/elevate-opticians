import { Nav } from "@/sections/Nav"
import { Hero } from "@/sections/Hero"
import { Mission } from "@/sections/Mission"
import { Founder } from "@/sections/Founder"
import { WhoItsFor } from "@/sections/WhoItsFor"
import { Testimonials } from "@/sections/Testimonials"
import { Graduates } from "@/sections/Graduates"
import { FAQ } from "@/sections/FAQ"
import { Join } from "@/sections/Join"
import { Legal } from "@/sections/Legal"
import { Footer } from "@/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="lg:pl-64">
        <main>
          <Hero />
          <Mission />
          <Founder />
          <WhoItsFor />
          <Testimonials />
          <Graduates />
          <FAQ />
          <Join />
          <Legal />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
