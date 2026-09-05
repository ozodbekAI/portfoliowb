import { ImageResponse } from "next/og"
import { PROFILE } from "@/lib/site-config"

export const alt = "Akramjonov Ozodbek — Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#0c1118", padding: "64px 72px", color: "#edf2f7", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #263240", paddingBottom: 30 }}>
          <span style={{ color: "#7ad8cc", fontSize: 28 }}>{PROFILE.name}</span>
          <span style={{ color: "#a0aebe", fontSize: 20 }}>ozodbek-akramov.uz</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 86, fontWeight: 700, letterSpacing: "-4px" }}>Software Engineer<span style={{ color: "#7ad8cc" }}>.</span></div>
          <div style={{ display: "flex", fontSize: 28, color: "#a0aebe" }}>{PROFILE.subtitle}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#a0aebe", fontSize: 20 }}>
          <span>Backend services. Intelligent products. Reliable systems.</span>
          <span>{PROFILE.location}</span>
        </div>
      </div>
    ),
    size,
  )
}
