import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Nav } from "@/sections/Nav"
import { Footer } from "@/sections/Footer"
import { Home } from "@/pages/Home"
import { EducationResources } from "@/pages/EducationResources"
import { EventCalendar } from "@/pages/EventCalendar"
import { Shop } from "@/pages/Shop"
import { Sponsorship } from "@/pages/Sponsorship"
import { NewsAndCalendar } from "@/pages/News"

const SIDEBAR_KEY = "eo:sidebar-collapsed"

function App() {
  const [collapsed, setCollapsed] = useState(() => {
    // Per-viewer convenience only; fall back to expanded if storage is blocked.
    try {
      return localStorage.getItem(SIDEBAR_KEY) === "1"
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_KEY, collapsed ? "1" : "0")
    } catch {
      /* storage unavailable (private window, blocked cookies) — ignore */
    }
  }, [collapsed])

  return (
    <div className="min-h-screen bg-background">
      <Nav collapsed={collapsed} onToggleCollapse={() => setCollapsed((c) => !c)} />
      <div className={collapsed ? "lg:pl-[72px]" : "lg:pl-64"}>
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
