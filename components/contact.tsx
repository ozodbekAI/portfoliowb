import { ArrowUpRight, Github, Mail, MapPin, Phone, Send } from "lucide-react"
import { CVButton } from "@/components/cv-button"
import { PROFILE } from "@/lib/site-config"

const contactLinks = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, external: false },
  { icon: Send, label: "Telegram", value: "@Akramovv_Ozodbek", href: PROFILE.telegram, external: true },
  { icon: Github, label: "GitHub", value: "ozodbekAI", href: PROFILE.github, external: true },
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref, external: false },
]

export function Contact() {
  return (
    <section id="contact" className="section-space border-t border-border">
      <div className="section-shell">
        <div className="surface-card grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-12">
          <div>
            <p className="eyebrow mb-5">06 / Get in touch</p>
            <h2 className="max-w-md text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">Let&apos;s Build Something Useful</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">I&apos;m open to interesting Software Engineering, Backend, and AI-powered product opportunities.</p>
            <CVButton className="mt-7 bg-transparent" />
            <p className="mt-7 flex items-center gap-2 text-sm text-muted-foreground"><MapPin aria-hidden="true" className="size-4" />{PROFILE.location}</p>
          </div>
          <div className="min-w-0 self-center divide-y divide-border">
            {contactLinks.map(({ icon: Icon, label, value, href, external }) => (
              <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="group flex min-w-0 items-center gap-4 py-5 first:pt-0 last:pb-0">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background transition-colors group-hover:border-primary/50 group-hover:text-primary"><Icon aria-hidden="true" className="size-4" /></span>
                <span className="min-w-0 flex-1"><span className="block text-xs text-muted-foreground">{label}</span><span className="mt-1 block text-sm font-medium break-words transition-colors group-hover:text-primary sm:text-base">{value}</span></span>
                <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
