import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { JOIN_EMAIL } from "@/data/programs"

const links = [
  { href: "#path", label: "Your ABO Journey" },
  { href: "#mission", label: "Mission" },
  { href: "#volunteers", label: "Volunteers" },
  { href: "#legal", label: "Legal" },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-purple text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src="/seal.png" alt="" className="h-10 w-10 rounded-full" />
            <span className="font-display text-base font-bold text-white">
              Elevate Opticians
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Elevate Opticians · Founded in the Bay Area · {JOIN_EMAIL}</p>
          {import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ? (
            <>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="font-medium text-white hover:underline">
                    Member Resources
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-2 text-white">
                  <span className="font-medium">Member Resources</span>
                  <UserButton afterSignOutUrl="#" />
                </div>
              </SignedIn>
            </>
          ) : (
            <span className="font-medium text-white/70">Member Resources</span>
          )}
        </div>
      </div>
    </footer>
  )
}
