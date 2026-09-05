import { ArrowRight, FileCog, Image, MessageSquareText, Network, ScanSearch, Video } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { projects, type Project } from "@/lib/projects"

const projectIcons: Record<Project["icon"], LucideIcon> = {
  image: Image,
  analysis: ScanSearch,
  reviews: MessageSquareText,
  documents: FileCog,
  grouping: Network,
  communication: Video,
}

function ProjectWorkflow({ steps }: { steps: readonly string[] }) {
  return (
    <ol aria-label="Project workflow" className="flex items-center gap-2 rounded-xl border border-primary/15 bg-primary/5 p-3 sm:p-4">
      {steps.map((step, index) => (
        <li key={step} className="flex min-w-0 flex-1 items-center gap-2">
          {index > 0 && <ArrowRight aria-hidden="true" className="size-3 shrink-0 text-primary/70" />}
          <span className="flex min-h-10 min-w-0 flex-1 items-center justify-center text-center font-mono text-[11px] leading-4 text-foreground/80 sm:text-xs">
            {step}
          </span>
        </li>
      ))}
    </ol>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-space border-y border-border bg-muted/20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="03 / Selected work"
          title="Featured Projects"
          description="Practical engineering across AI products, seller automation, and real-time communication."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.icon]

            return (
              <article
                key={project.id}
                className="surface-card flex min-w-0 flex-col p-6 transition-colors duration-200 hover:border-primary/40 sm:p-8"
              >
                <div className="mb-7 flex items-center justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/5 text-primary">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.6} />
                  </span>
                  <p className="text-right font-mono text-[10px] tracking-wide text-muted-foreground sm:text-xs">
                    <span className="mr-2 text-primary">{String(index + 1).padStart(2, "0")}</span>
                    {project.label}
                  </p>
                </div>

                <h3 className="text-xl font-semibold leading-snug tracking-tight text-balance sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground text-pretty sm:text-base">
                  {project.description}
                </p>

                {project.workflow && (
                  <div className="mt-6 hidden sm:block">
                    <ProjectWorkflow steps={project.workflow} />
                  </div>
                )}

                <div className="flex-1" />
                <ul aria-label="Project technologies" className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5">
                  {project.tags.map((tag) => (
                    <li key={tag} className="font-mono text-[11px] leading-5 text-muted-foreground sm:text-xs">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
