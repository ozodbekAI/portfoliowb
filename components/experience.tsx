import { ChevronDown } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { EXPERIENCE } from "@/lib/experience"

const DEFAULT_HIGHLIGHTS = 6

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-[15px]">
      {items.map((highlight) => (
        <li key={highlight} className="flex gap-3">
          <span aria-hidden="true" className="mt-3 h-1 w-1 shrink-0 rounded-full bg-primary" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  )
}

export function Experience() {
  return (
    <section id="experience" className="section-space border-t border-border">
      <div className="section-shell">
        <SectionHeading
          eyebrow="02 / Experience"
          title="Where I’ve contributed"
          description="Building backend services, AI-powered products, and real-time systems — from client projects to a commercial product ecosystem."
        />

        <div className="space-y-5">
          {EXPERIENCE.map((experience) => {
            const visibleHighlights = experience.highlights.slice(0, DEFAULT_HIGHLIGHTS)
            const additionalHighlights = experience.highlights.slice(DEFAULT_HIGHLIGHTS)

            return (
              <article
                key={experience.company}
                className="surface-card grid gap-7 p-6 sm:p-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12"
              >
                <header>
                  <p className="mb-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    {experience.current && (
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                    {experience.period}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight">{experience.company}</h3>
                  <p className="mt-2 text-sm font-medium text-primary">{experience.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{experience.location}</p>
                </header>

                <div className="min-w-0">
                  <Highlights items={visibleHighlights} />
                  {additionalHighlights.length > 0 && (
                    <details className="group mt-4">
                      <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">Show more</span>
                        <span className="hidden group-open:inline">Show less</span>
                        <span className="sr-only"> about my work at {experience.company}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none"
                        />
                      </summary>
                      <div className="pt-2">
                        <Highlights items={additionalHighlights} />
                      </div>
                    </details>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
