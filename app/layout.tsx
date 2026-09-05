import type { ReactNode } from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { PROFILE, SITE_URL } from "@/lib/site-config"
import "./globals.css"

const title = "Akramjonov Ozodbek | Software Engineer"
const description =
  "Software Engineer specializing in Python backend systems, AI/LLM applications, distributed systems, automation, and real-time technologies."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: `${PROFILE.name} Portfolio`,
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  keywords: ["Software Engineer", "Python Developer", "Python Backend Engineer", "FastAPI Developer", "Django Developer", "AI Engineer", "LLM Developer", "Backend Developer", "Uzbekistan Software Engineer"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: `${PROFILE.name} Portfolio`,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.jpg", shortcut: "/icon.jpg", apple: "/icon.jpg" },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
