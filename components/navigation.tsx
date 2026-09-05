"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { CV_DOWNLOAD_URL, NAV_ITEMS, PROFILE } from "@/lib/site-config"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigationRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)")
    const closeOnDesktop = () => {
      if (desktopQuery.matches) setMobileMenuOpen(false)
    }

    desktopQuery.addEventListener("change", closeOnDesktop)
    return () => desktopQuery.removeEventListener("change", closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !navigationRef.current?.contains(event.target)) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [mobileMenuOpen])

  return (
    <header
      ref={navigationRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md"
    >
      <div className="section-shell flex h-[72px] items-center justify-between gap-4 xl:h-20">
        <a
          href="#hero"
          aria-label={`${PROFILE.name} — home`}
          onClick={() => setMobileMenuOpen(false)}
          className="flex shrink-0 items-center gap-2.5 rounded-md text-lg font-semibold tracking-tight"
        >
          <span className="flex size-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary">
            <Code2 aria-hidden="true" className="size-5" />
          </span>
          <span>ozodbek<span className="text-primary">.</span></span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <ThemeToggle />
          <Button asChild className="hidden h-11 rounded-lg px-4 xl:inline-flex">
            <a href={CV_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <Download aria-hidden="true" />
              Download CV
              <span className="sr-only"> (PDF, opens in a new tab)</span>
            </a>
          </Button>
          <Button
            ref={menuButtonRef}
            type="button"
            variant="ghost"
            size="icon"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="size-11 rounded-lg xl:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </Button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!mobileMenuOpen}
        className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background xl:hidden"
      >
        <div className="section-shell space-y-1 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 border-t border-border pt-4">
            <Button asChild className="h-11 w-full rounded-lg">
              <a
                href={CV_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download aria-hidden="true" />
                Download CV
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
