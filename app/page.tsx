"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Footer from "@/components/footer"
import { useMediaQuery } from "@/hooks/use-media-query"
import AnimatedBackground from "@/components/animated-background"
import CookieConsent from "@/components/cookie-consent"

// Dynamically import components that might cause hydration issues
const CustomCursor = dynamic(() => import("@/components/custom-cursor"), { ssr: false })
const About = dynamic(() => import("@/components/about"), { ssr: false })
const Projects = dynamic(() => import("@/components/projects"), { ssr: false })
const Skills = dynamic(() => import("@/components/skills"), { ssr: false })
const Timeline = dynamic(() => import("@/components/timeline"), { ssr: false })
const Marketing = dynamic(() => import("@/components/marketing"), { ssr: false })
const Blog = dynamic(() => import("@/components/blog"), { ssr: false })
const Contact = dynamic(() => import("@/components/contact"), { ssr: false })

// Loading component
const SectionLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-primary text-xl">Loading...</div>
  </div>
)

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Handle mounting state to prevent hydration issues
  useEffect(() => {
    setMounted(true)

    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      Object.entries(sectionsRef.current).forEach(([key, section]) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(key)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  const registerSection = (id: string, element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current[id] = element
    }
  }

  // Show a simple loading state during initial load
  if (!mounted || loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <div className="text-4xl font-bold text-white">
          <span className="text-primary">Badhon</span> Vitality
        </div>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {!isMobile && mounted && <CustomCursor />}
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />

        <div ref={(el) => registerSection("hero", el)} id="hero">
          <Hero />
        </div>

        <Suspense fallback={<SectionLoading />}>
          <div ref={(el) => registerSection("about", el)} id="about">
            <About />
          </div>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <div ref={(el) => registerSection("projects", el)} id="projects">
            <Projects />
          </div>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <div ref={(el) => registerSection("skills", el)} id="skills">
            <Skills />
          </div>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <div ref={(el) => registerSection("timeline", el)} id="timeline">
            <Timeline />
          </div>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <div ref={(el) => registerSection("marketing", el)} id="marketing">
            <Marketing />
          </div>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <div ref={(el) => registerSection("blog", el)} id="blog">
            <Blog />
          </div>
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <div ref={(el) => registerSection("contact", el)} id="contact">
            <Contact />
          </div>
        </Suspense>

        <Footer />
      </div>
      <CookieConsent />
    </main>
  )
}
