import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Badhon Vitality - Terms of Service"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        backgroundImage:
          "radial-gradient(circle at 25% 25%, rgba(0, 255, 170, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
      }}
    >
      <div
        style={{
          marginBottom: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: "bold",
            background: "linear-gradient(to right, #00FFAA, #9333EA)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 16,
          }}
        >
          Terms of Service
        </span>
        <span style={{ fontSize: 48, fontWeight: "bold", color: "white" }}>Badhon Vitality</span>
      </div>
      <div
        style={{
          fontSize: 36,
          color: "white",
          marginBottom: 40,
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        Terms and conditions for using our services
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {["Usage", "Intellectual Property", "Liability", "Governing Law"].map((section) => (
          <div
            key={section}
            style={{
              fontSize: 24,
              color: "black",
              backgroundColor: "#00FFAA",
              padding: "8px 24px",
              borderRadius: 24,
              fontWeight: "bold",
            }}
          >
            {section}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  )
}
