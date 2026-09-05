import { Award, GraduationCap, Languages } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { CERTIFICATIONS, EDUCATION, INTERESTS, LANGUAGES } from "@/lib/background"

export function Education() {
  return (
    <section id="education" className="section-space border-t border-border">
      <div className="section-shell">
        <SectionHeading eyebrow="05 / Education" title="Learning & perspective" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="surface-card p-6 sm:p-8">
            <GraduationCap aria-hidden="true" className="mb-5 h-5 w-5 text-primary" />
            <h3 className="mb-6 text-base font-semibold">Education</h3>
            <div className="space-y-6">
              {EDUCATION.map((education) => (
                <div key={education.institution}>
                  <p className="text-lg font-semibold tracking-tight">{education.institution}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{education.location}</p>
                  <p className="mt-4 text-sm">{education.year}</p>
                  <p className="mt-2 font-mono text-xs text-muted-foreground">{education.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <Award aria-hidden="true" className="mb-5 h-5 w-5 text-primary" />
            <h3 className="mb-6 text-base font-semibold">Certifications</h3>
            <ul className="space-y-6">
              {CERTIFICATIONS.map((certification) => (
                <li key={`${certification.title}-${certification.year}`}>
                  <p className="text-lg font-semibold tracking-tight">{certification.title}</p>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">{certification.year}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-6 sm:p-8 md:col-span-2 lg:col-span-1">
            <Languages aria-hidden="true" className="mb-5 h-5 w-5 text-primary" />
            <h3 className="mb-4 text-base font-semibold">Languages</h3>
            <ul className="divide-y divide-border">
              {LANGUAGES.map((language) => (
                <li key={language.name} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span>{language.name}</span>
                  {language.proficiency && <span className="text-muted-foreground">{language.proficiency}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12">
          <h3 className="text-base font-semibold">What keeps me curious</h3>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {INTERESTS.map((interest) => (
              <li key={interest} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
