import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { ABOUT_PARAGRAPHS } from "@/lib/about"

export function About() {
  return (
    <section id="about" className="section-space border-t border-border">
      <div className="section-shell grid gap-2 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="01 / About" title="An engineering mindset." />
          <a href="#experience" className="hidden min-h-11 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground lg:inline-flex">Explore my experience<ArrowUpRight aria-hidden="true" className="size-4" /></a>
        </div>
        <div className="space-y-5">
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? "text-lg leading-8 font-medium text-pretty" : "text-base leading-7 text-muted-foreground text-pretty"}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
