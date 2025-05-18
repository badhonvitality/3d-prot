import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Badhon Vitality - Full Stack Developer & Digital Marketing Specialist"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  try {
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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: "bold",
              color: "#00FFAA",
            }}
          >
            Badhon
          </span>
          <span style={{ fontSize: 80, fontWeight: "bold", color: "white", marginLeft: 16 }}>Vitality</span>
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
          Full Stack Developer & Digital Marketing Specialist
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
          {["React", "Three.js", "Node.js", "SEO", "Marketing"].map((skill) => (
            <div
              key={skill}
              style={{
                fontSize: 24,
                color: "black",
                backgroundColor: "#00FFAA",
                padding: "8px 24px",
                borderRadius: 24,
                fontWeight: "bold",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>,
      {
        ...size,
      },
    )
  } catch (e) {
    console.error(e)
    return new Response("Failed to generate the image", {
      status: 500,
    })
  }
}
