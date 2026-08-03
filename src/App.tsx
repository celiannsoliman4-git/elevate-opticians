import { Nav } from "@/sections/Nav"
import { Hero } from "@/sections/Hero"
import { Mission } from "@/sections/Mission"
import { WhoItsFor } from "@/sections/WhoItsFor"
import { Volunteers } from "@/sections/Volunteers"
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
          <WhoItsFor />
          <Volunteers />
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
