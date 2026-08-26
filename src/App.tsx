import { Routes, Route } from "react-router-dom"
import { Nav } from "@/sections/Nav"
import { Footer } from "@/sections/Footer"
import { Home } from "@/pages/Home"
import { EducationResources } from "@/pages/EducationResources"
import { EventCalendar } from "@/pages/EventCalendar"

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
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
