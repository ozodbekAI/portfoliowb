import { ArrowDown, ArrowUpRight, Braces, Cpu, Database, Github, MapPin, Network, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CVButton } from "@/components/cv-button"
import { PROFILE } from "@/lib/site-config"

const focusAreas = [
  { icon: Braces, title: "Backend services", detail: "Python · FastAPI · Django", number: "01" },
  { icon: Cpu, title: "AI-powered applications", detail: "LLM integration · Generative AI", number: "02" },
  { icon: Radio, title: "Real-time systems", detail: "WebSockets · WebRTC · asyncio", number: "03" },
]

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative isolate pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]" />
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="animate-enter min-w-0">
            <p className="mb-6 font-mono text-sm font-medium tracking-wide text-primary">{PROFILE.name}</p>
            <h1 id="hero-title" className="text-[clamp(2.75rem,5.7vw,4.5rem)] leading-[1.05] font-semibold tracking-[-0.055em]">
              Software<br />Engineer<span className="text-primary">.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 font-medium text-balance">{PROFILE.subtitle}</p>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground text-pretty">{PROFILE.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 gap-3 px-5">
                <a href="#projects">View My Work <ArrowDown aria-hidden="true" className="size-4" /></a>
              </Button>
              <CVButton />
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 px-3 text-sm font-medium transition-colors hover:text-primary">
                <Github aria-hidden="true" className="size-4" />GitHub<ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground sm:text-sm">
              <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="size-3.5" />{PROFILE.location}</span>
              <span className="inline-flex items-center gap-2"><span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />Open to opportunities</span>
            </div>
          </div>

          <div className="surface-card animate-enter min-w-0 overflow-hidden shadow-sm" aria-label="Engineering focus">
            <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4 sm:px-6">
              <span className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground"><Network aria-hidden="true" className="size-4 text-primary" />engineering.focus</span>
              <span aria-hidden="true" className="flex gap-1.5"><span className="size-1.5 rounded-full bg-border" /><span className="size-1.5 rounded-full bg-border" /><span className="size-1.5 rounded-full bg-primary/60" /></span>
            </div>
            <div className="p-5 sm:p-7">
              <p className="mb-6 text-sm leading-6 text-muted-foreground">Thoughtful architecture.<br /><span className="text-foreground">Practical implementation.</span></p>
              <div className="relative space-y-3">
                <div aria-hidden="true" className="absolute top-6 bottom-6 left-[27px] w-px bg-border" />
                {focusAreas.map(({ icon: Icon, title, detail, number }) => (
                  <div key={title} className="relative flex items-start gap-3 rounded-xl border border-border bg-background p-4 sm:gap-4">
                    <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                    <div className="min-w-0 flex-1"><h2 className="text-sm font-medium">{title}</h2><p className="mt-1.5 text-xs leading-5 text-muted-foreground">{detail}</p></div>
                    <span aria-hidden="true" className="font-mono text-[10px] text-muted-foreground">{number}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2.5 border-t border-border pt-5 text-xs text-muted-foreground">
                <Database aria-hidden="true" className="size-4 shrink-0" /><span>PostgreSQL · Redis · Docker</span>
              </div>
            </div>
            <div className="border-t border-border bg-muted/35 px-5 py-3 font-mono text-[10px] tracking-wide text-muted-foreground sm:px-6">Architecture / Reliability / Maintainability</div>
          </div>
        </div>
        <a href="#about" className="mt-14 inline-flex min-h-11 items-center gap-3 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors hover:text-primary lg:mt-20"><span aria-hidden="true" className="h-px w-8 bg-border" />A little more about me<ArrowDown aria-hidden="true" className="size-3.5" /></a>
      </div>
    </section>
  )
}
