import { useState } from "react"
import {
  Menu,
  X,
  Heart,
  Users2,
  Quote,
  GraduationCap,
  HelpCircle,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const links: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "#mission", label: "Our Story", icon: Heart },
  { href: "#founder", label: "Founder", icon: Users2 },
  { href: "#education-partners", label: "Education Partners", icon: Users2 },
  { href: "#testimonials", label: "Testimonials", icon: Quote },
  { href: "#graduates", label: "Graduates", icon: GraduationCap },
  { href: "#faq", label: "FAQ", icon: HelpCircle },
]

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="space-y-1">
      {links.map((l) => {
        const Icon = l.icon
        return (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon className="size-4" strokeWidth={1.75} />
              {l.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <img src="/seal.png" alt="Elevate Opticians seal" className="h-10 w-10 rounded-full" />
      <span className="font-display text-base font-bold text-white">
        Elevate Opticians
      </span>
    </a>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col overflow-y-auto bg-ink px-5 py-7 lg:flex">
        <Logo />
        <nav className="mt-10 flex-1">
          <NavLinks />
        </nav>
        <div className="space-y-4 border-t border-white/10 pt-5">
          <p className="px-1 text-xs leading-relaxed text-white/50">
            100% Free · Open to Anyone Pursuing Their ABO
          </p>
          <Button asChild className="w-full bg-white text-ink hover:bg-white/90">
            <a href="#join">Join Free</a>
          </Button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky inset-x-0 top-0 z-50 flex items-center justify-between bg-ink px-5 py-3 lg:hidden">
        <Logo />
        <button
          className="text-white"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-[80%] flex-col bg-ink px-5 py-6">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2.5">
                <img src="/seal.png" alt="Elevate Opticians seal" className="h-9 w-9 rounded-full" />
                <span className="font-display text-base font-bold text-white">
                  Elevate Opticians
                </span>
              </span>
              <button
                className="text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="mt-8 flex-1">
              <NavLinks onNavigate={() => setOpen(false)} />
            </nav>
            <Button asChild className="w-full bg-white text-ink hover:bg-white/90">
              <a href="#join" onClick={() => setOpen(false)}>
                Join Free
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
