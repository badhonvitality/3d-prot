import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Badhon Vitality | Full Stack Developer & Digital Marketing Specialist",
  description:
    "Professional portfolio of Badhon Vitality, a Full Stack 3D Web Developer and Digital Marketing Strategist specializing in React, Three.js, Node.js, and SEO optimization.",
  keywords: [
    "Badhon Vitality",
    "Full Stack Developer",
    "Digital Marketing",
    "3D Web Developer",
    "React Developer",
    "Three.js",
    "SEO Specialist",
    "Web Development",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Badhon Vitality" }],
  creator: "Badhon Vitality",
  publisher: "Badhon Vitality",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://badhonvitality.com",
    title: "Badhon Vitality | Full Stack Developer & Digital Marketing Specialist",
    description:
      "Professional portfolio of Badhon Vitality, a Full Stack 3D Web Developer and Digital Marketing Strategist specializing in React, Three.js, Node.js, and SEO optimization.",
    siteName: "Badhon Vitality Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Badhon Vitality | Full Stack Developer & Digital Marketing Specialist",
    description:
      "Professional portfolio of Badhon Vitality, a Full Stack 3D Web Developer and Digital Marketing Strategist specializing in React, Three.js, Node.js, and SEO optimization.",
    creator: "@badhonvitality",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
