import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CV_DOWNLOAD_URL } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function CVButton({ className }: { className?: string }) {
  return (
    <Button asChild variant="outline" size="lg" className={cn("h-12 gap-2.5 px-5", className)}>
      <a href={CV_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
        <Download aria-hidden="true" className="size-4" />
        Download CV
        <span className="sr-only"> (PDF, opens in a new tab)</span>
      </a>
    </Button>
  )
}
