import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Menu,
  X,
  Heart,
  Users2,
  Quote,
  GraduationCap,
  HelpCircle,
  BookOpen,
  CalendarDays,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.965h-1.513c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}

const socialLinks = [
  { href: "https://www.instagram.com/elevateopticians/", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.facebook.com/groups/1562739018915548/", label: "Facebook", icon: FacebookIcon },
  { href: "https://www.linkedin.com/in/elevate-opticians-428b84426/", label: "LinkedIn", icon: LinkedinIcon },
]

function SocialLinks() {
  return (
    <div className="mt-3 flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-white/60 transition-colors hover:text-white"
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </div>
  )
}

const links: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "#mission", label: "Our Story", icon: Heart },
  { href: "#founder", label: "Founder", icon: Users2 },
  { href: "#education-partners", label: "Partners", icon: Users2 },
  { href: "/resources", label: "Education Resources", icon: BookOpen },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "#why-abo", label: "Why American Board of Opticianry (ABO)", icon: HelpCircle },
  { href: "#who", label: "Who It's For", icon: Users2 },
  { href: "#testimonials", label: "Testimonials", icon: Quote },
  { href: "#graduates", label: "Graduates", icon: GraduationCap },
  { href: "#faq", label: "FAQ", icon: HelpCircle },
]

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="space-y-1">
      {links.map((l) => {
        const Icon = l.icon
        const isPage = l.href.startsWith("/")
        return (
          <li key={l.href}>
            {isPage ? (
              <Link
                to={l.href}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {l.label}
              </Link>
            ) : (
              <a
                href={`/${l.href}`}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {l.label}
              </a>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function Logo() {
  return (
    <a href="/#top" className="flex items-center gap-2.5">
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
        <SocialLinks />
        <nav className="mt-5 flex-1">
          <NavLinks />
        </nav>
        <div className="space-y-4 border-t border-white/10 pt-5">
          <p className="px-1 text-xs leading-relaxed text-white/50">
            100% Free · Open to Anyone Pursuing Their American Board of Opticianry (ABO)
          </p>
          <Button asChild className="w-full bg-white text-ink hover:bg-white/90">
            <a href="/#join">Join Free</a>
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
            <SocialLinks />
            <nav className="mt-3 flex-1">
              <NavLinks onNavigate={() => setOpen(false)} />
            </nav>
            <Button asChild className="w-full bg-white text-ink hover:bg-white/90">
              <a href="/#join" onClick={() => setOpen(false)}>
                Join Free
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
