import { BookOpen, ClipboardCheck, Users, FolderOpen, type LucideIcon } from "lucide-react"
import { programs, type Program } from "@/data/programs"

const icons: Record<Program["icon"], LucideIcon> = {
  study: BookOpen,
  practice: ClipboardCheck,
  mentor: Users,
  library: FolderOpen,
}

export function Programs() {
  return (
    <section id="programs" className="bg-purple py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Four ways we help you get certified.
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => {
            const Icon = icons[p.icon]
            return (
              <div key={p.id} className="flex flex-col gap-4 bg-purple p-7">
                <Icon className="size-7 text-violet-300" strokeWidth={1.75} />
                <h3 className="font-display text-base font-semibold text-white">
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/65">
                  {p.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
