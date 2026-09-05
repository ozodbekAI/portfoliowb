import { Blocks, BrainCircuit, Braces, Container, Database, PlugZap, Radio, Workflow } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { skillCategories, type SkillCategory } from "@/lib/skills"

const categoryIcons: Record<SkillCategory["id"], LucideIcon> = {
  backend: Braces,
  communication: Radio,
  ai: BrainCircuit,
  databases: Database,
  distributed: Workflow,
  infrastructure: Container,
  integrations: PlugZap,
  engineering: Blocks,
}

export function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="section-shell">
        <SectionHeading
          eyebrow="04 / Toolkit"
          title="Tech Stack"
          description="The tools and engineering practices I use to build reliable software."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id]

            return (
              <article key={category.id} className="surface-card min-w-0 p-6 sm:p-7">
                <div className="mb-5 flex items-start gap-3">
                  <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.6} />
                  <h3 className="text-base font-semibold leading-6 tracking-tight">{category.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm leading-6 text-muted-foreground">
                      {skill}
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
