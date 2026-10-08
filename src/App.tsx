import { Routes, Route } from "react-router-dom"
import { Nav } from "@/sections/Nav"
import { Footer } from "@/sections/Footer"
import { Home } from "@/pages/Home"
import { EducationResources } from "@/pages/EducationResources"
import { EventCalendar } from "@/pages/EventCalendar"
import { Shop } from "@/pages/Shop"
import { Sponsorship } from "@/pages/Sponsorship"
import { NewsAndCalendar } from "@/pages/News"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <div className="lg:pl-64">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<EducationResources />} />
            <Route path="/calendar" element={<EventCalendar />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/news" element={<NewsAndCalendar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
