import type { Metadata } from "next"
import ResumeClient from "./ResumeClient"

export const metadata: Metadata = {
  title: "Badhon Vitality | Professional Resume",
  description:
    "Professional resume of Badhon Vitality, Full Stack 3D Web Developer and Digital Marketing Strategist with expertise in React, Three.js, Node.js, and SEO optimization.",
  openGraph: {
    title: "Badhon Vitality | Professional Resume",
    description:
      "Professional resume of Badhon Vitality, Full Stack 3D Web Developer and Digital Marketing Strategist with expertise in React, Three.js, Node.js, and SEO optimization.",
    url: "https://badhonvitality.com/resume",
    siteName: "Badhon Vitality Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badhon Vitality | Professional Resume",
    description:
      "Professional resume of Badhon Vitality, Full Stack 3D Web Developer and Digital Marketing Strategist with expertise in React, Three.js, Node.js, and SEO optimization.",
  },
}

export default function Resume() {
  return <ResumeClient />
}
