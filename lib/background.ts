type EducationEntry = {
  institution: string
  location: string
  year: string
  period: string
}

type Certification = {
  title: string
  year: string
}

type Language = {
  name: string
  proficiency: string | null
}

export const EDUCATION: EducationEntry[] = [
  {
    institution: "PDP University",
    location: "Tashkent, Uzbekistan",
    year: "1st Year",
    period: "2026 – Present",
  },
]

export const CERTIFICATIONS: Certification[] = [
  { title: "Data Science & AI, Python", year: "2022" },
]

export const LANGUAGES: Language[] = [
  { name: "Uzbek", proficiency: "Native" },
  // TODO: Confirm Russian and English proficiency before displaying levels.
  { name: "Russian", proficiency: null },
  { name: "English", proficiency: null },
]

export const INTERESTS = [
  "Designing scalable and high-performance backend systems",
  "Distributed systems, system architecture, reliability, and performance",
  "AI/LLM applications and intelligent automation",
  "Integrating AI capabilities into real-world software products",
  "Real-time communication and event-driven applications",
] as const
