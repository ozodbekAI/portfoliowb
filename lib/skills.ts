export type SkillCategory = {
  id: "backend" | "communication" | "ai" | "databases" | "distributed" | "infrastructure" | "integrations" | "engineering"
  title: string
  skills: readonly string[]
}

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "backend",
    title: "Backend",
    skills: ["Python", "FastAPI", "Django", "Django REST Framework", "Flask", "SQLAlchemy", "aiohttp", "asyncio"],
  },
  {
    id: "communication",
    title: "APIs & Communication",
    skills: ["REST API", "WebSockets", "WebRTC", "gRPC"],
  },
  {
    id: "ai",
    title: "AI / ML / LLM",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "LLM Applications",
      "Generative AI",
      "AI API Integration",
      "Computer Vision",
      "Face Recognition",
      "Vector Search",
      "FAISS",
      "OpenCV",
      "NumPy",
    ],
  },
  {
    id: "databases",
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch"],
  },
  {
    id: "distributed",
    title: "Distributed Systems & Messaging",
    skills: ["Celery", "RabbitMQ", "Kafka"],
  },
  {
    id: "infrastructure",
    title: "DevOps & Infrastructure",
    skills: ["Docker", "Linux", "CI/CD", "Git"],
  },
  {
    id: "integrations",
    title: "Integrations & Automation",
    skills: ["Telegram Bots", "aiogram", "Third-Party APIs", "Payment Integrations", "Data Scraping", "Automation"],
  },
  {
    id: "engineering",
    title: "Engineering",
    skills: [
      "System Design",
      "API Design",
      "Asynchronous Programming",
      "Clean Architecture",
      "Object-Oriented Programming",
      "Design Patterns",
      "Legacy Code Integration",
      "Performance Optimization",
    ],
  },
]
