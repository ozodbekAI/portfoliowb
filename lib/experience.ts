export type ExperienceEntry = {
  company: string
  role: string
  location: string
  period: string
  current?: boolean
  highlights: string[]
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "AVEMOD",
    role: "Software Engineer",
    location: "Russia · Remote",
    period: "2025 – Present",
    current: true,
    highlights: [
      "Design and develop backend services and product infrastructure using Python, FastAPI, REST APIs, asynchronous programming, PostgreSQL, Redis, Celery, and Docker.",
      "Develop and integrate services within a multi-product ecosystem focused on automation and AI-powered solutions for Wildberries sellers.",
      "Build AI-powered product features, including LLM and generative AI integrations for content generation and product-card workflows.",
      "Developed a Telegram-based AI Studio integrating Gemini-powered image generation.",
      "Developed the Checker system for analyzing Wildberries product cards, identifying issues, recommending corrections, and providing quality scoring.",
      "Implemented asynchronous/background workflows with Celery and asyncio.",
      "Worked on A/B testing and Fotostudio-related workflows.",
      "Developed automation for Chestny ZNAK product-label and PDF workflows through Telegram bots.",
      "Developed systems for automated review-response generation and customer review management.",
      "Implemented product grouping and recommendation logic.",
      "Designed APIs and integrations between backend services, external platforms, and client applications.",
      "Worked with PostgreSQL and Redis for persistence, caching, and performance optimization.",
      "Containerized services using Docker and Linux.",
      "Focused on modular architecture, clean code, reliability, maintainability, and scalability.",
    ],
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    location: "Tashkent, Uzbekistan",
    period: "2024 – 2025",
    highlights: [
      "Designed and developed custom backend applications and automation systems using Python, FastAPI, Django, and Flask.",
      "Built REST API and WebSocket-based services and integrated third-party APIs.",
      "Integrated AI APIs, LLM capabilities, and machine learning models into applications.",
      "Built real-time communication functionality using WebRTC and aiortc.",
      "Developed AI/ML solutions involving computer vision, face recognition, vector search, FAISS, OpenCV, and NumPy.",
      "Worked directly with clients from requirements analysis through implementation and delivery.",
      "Developed Telegram bots and automation systems using aiogram.",
      "Worked with PostgreSQL, MySQL, Redis, SQLAlchemy, and asynchronous Python.",
      "Developed data collection and processing tools using Requests, BeautifulSoup, and Selenium.",
      "Integrated external services, cryptocurrency APIs, and payment systems.",
      "Containerized applications using Docker.",
      "Applied Clean Architecture, OOP, and software design patterns.",
    ],
  },
  {
    company: "Bazarchi",
    role: "Backend Developer",
    location: "Tashkent, Uzbekistan",
    period: "2024",
    highlights: [
      "Designed and developed REST APIs for web and mobile applications.",
      "Designed backend architecture with scalability and maintainability in mind.",
      "Integrated external services and payment systems.",
      "Optimized PostgreSQL queries and database operations.",
      "Implemented authentication and authorization using JWT and OAuth.",
      "Worked on API design, database architecture, integrations, debugging, and optimization.",
    ],
  },
  {
    company: "Algoritm Learning Centre",
    role: "Mentor",
    location: "Namangan, Uzbekistan",
    period: "2023 – 2024",
    highlights: [
      "Mentored students in Artificial Intelligence and Cybersecurity.",
      "Delivered lessons covering AI/ML fundamentals, programming, algorithms, and cybersecurity.",
      "Taught Python, C++, algorithms, data structures, Django, FastAPI, and REST APIs.",
      "Guided students through technical exercises and software projects.",
      "Provided individual technical guidance and project feedback.",
    ],
  },
]
