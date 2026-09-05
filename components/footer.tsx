import { ArrowUp } from "lucide-react"
import { PROFILE } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t border-border py-7">
      <div className="section-shell flex flex-col items-start justify-between gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {PROFILE.name}<span className="mx-2 text-border" aria-hidden="true">/</span>{PROFILE.role}</p>
        <a href="#hero" className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-primary">Back to top<ArrowUp aria-hidden="true" className="size-3.5" /></a>
      </div>
    </footer>
  )
}
