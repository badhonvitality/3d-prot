"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

// Dynamically import Three.js components to avoid SSR issues
const ThreeJSCanvas = dynamic(() => import("@/components/three-js-canvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-primary">Loading 3D...</div>
    </div>
  ),
})

gsap.registerPlugin(TextPlugin)

export default function Hero() {
  const subtitleRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [canvasLoaded, setCanvasLoaded] = useState(false)

  // Handle mounting state to prevent hydration issues
  useEffect(() => {
    setMounted(true)

    const timer = setTimeout(() => {
      setCanvasLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (subtitleRef.current && mounted && canvasLoaded) {
      const text = "Full Stack Developer & Digital Marketing Specialist"

      gsap.to(subtitleRef.current, {
        duration: 3,
        text: {
          value: text,
          delimiter: "",
        },
        ease: "none",
        delay: 0.5,
      })
    }
  }, [mounted, canvasLoaded])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Return a simple loading state if not mounted yet (prevents hydration issues)
  if (!mounted) {
    return (
      <section className="relative h-screen flex flex-col items-center justify-center">
        <div className="z-10 text-center px-4 mt-32">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-primary">Badhon</span> Vitality
          </h1>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">{canvasLoaded && <ThreeJSCanvas />}</div>

      <div className="z-10 text-center px-4 mt-32">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="text-primary">Badhon</span> Vitality
        </h1>
        <div ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 h-8 min-h-8"></div>

        <div className="mt-12 flex flex-col items-center space-y-8">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-black"
            onClick={() => {
              const projectsSection = document.getElementById("projects")
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            View My Work
          </Button>

          <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
            <ChevronDown className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  )
}
