export type Project = {
  id: string
  title: string
  description: string
  label: "Commercial project" | "Project experience"
  icon: "image" | "analysis" | "reviews" | "documents" | "grouping" | "communication"
  tags: readonly string[]
  workflow?: readonly string[]
}

export const projects: readonly Project[] = [
  {
    id: "ai-studio",
    title: "AI Studio",
    description:
      "AI-powered product content and image generation system integrated with Gemini for Wildberries seller workflows.",
    label: "Commercial project",
    icon: "image",
    tags: ["Python", "FastAPI", "Gemini", "AI", "Telegram", "Generative AI"],
    workflow: ["Telegram", "Gemini", "Content & images"],
  },
  {
    id: "wildberries-checker",
    title: "Wildberries Checker",
    description:
      "A product-card analysis system that identifies issues, recommends corrections, and evaluates product-card quality.",
    label: "Commercial project",
    icon: "analysis",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "AI", "Analytics"],
    workflow: ["Product card", "Analysis", "Corrections & quality"],
  },
  {
    id: "review-assistant",
    title: "Review Assistant",
    description:
      "An AI-assisted review management system for generating and managing responses to Wildberries customer reviews.",
    label: "Commercial project",
    icon: "reviews",
    tags: ["Python", "AI", "LLM", "REST API", "Automation"],
  },
  {
    id: "chestny-znak-automation",
    title: "Chestny ZNAK Automation",
    description: "Telegram-based automation for product label and PDF processing workflows.",
    label: "Commercial project",
    icon: "documents",
    tags: ["Python", "Telegram", "PDF Processing", "Automation", "Integrations"],
  },
  {
    id: "product-grouping",
    title: "Product Grouping & Recommendations",
    description:
      "Backend logic for product grouping and recommendation workflows integrated into the seller ecosystem.",
    label: "Commercial project",
    icon: "grouping",
    tags: ["Python", "Backend", "Recommendations", "Data Processing"],
  },
  {
    id: "real-time-communication",
    title: "Real-Time Communication",
    description:
      "Real-time voice and video communication functionality using WebRTC and aiortc with signaling and session management.",
    label: "Project experience",
    icon: "communication",
    tags: ["Python", "WebRTC", "aiortc", "WebSockets", "Real-Time"],
  },
]
