"use client"

import React, { useRef, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

function Globe() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#00FFAA"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
      <Environment preset="night" />
    </>
  )
}

// Error boundary for Three.js
class ThreeErrorBoundary extends React.Component<{
  children: React.ReactNode
  fallback: React.ReactNode
}> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error("Three.js error in About section:", error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (sectionRef.current && textRef.current && globeRef.current && cardsRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        },
      )

      gsap.fromTo(
        globeRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "top 40%",
            scrub: 1,
          },
        },
      )

      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        },
      )
    }
  }, [mounted])

  const skills = [
    "Web Development",
    "UI/UX Design",
    "3D Graphics",
    "SEO Optimization",
    "Digital Marketing",
    "Content Strategy",
    "Email Campaigns",
    "Social Media Ads",
    "Automation",
  ]

  const GlobeFallback = () => (
    <div className="flex items-center justify-center h-full bg-black/40 rounded-lg border border-primary/20">
      <div className="text-primary">3D Globe Unavailable</div>
    </div>
  )

  return (
    <section ref={sectionRef} className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div ref={textRef} className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate Full Stack Developer and Digital Marketing Specialist with a global presence. My
              expertise spans across cutting-edge web technologies and effective digital marketing strategies.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With a strong foundation in both development and marketing, I create comprehensive digital solutions that
              not only look great but also perform exceptionally well in terms of user experience and conversion rates.
            </p>
            <p className="text-lg text-gray-300">
              My approach combines technical excellence with strategic marketing insights, allowing me to build digital
              products that truly stand out in today's competitive landscape.
            </p>
          </div>

          <div ref={globeRef} className="lg:w-1/2 h-[300px] md:h-[400px] w-full">
            {mounted && (
              <ThreeErrorBoundary fallback={<GlobeFallback />}>
                <Canvas>
                  <Globe />
                </Canvas>
              </ThreeErrorBoundary>
            )}
          </div>
        </div>

        <div ref={cardsRef} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-black/40 backdrop-blur-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="text-lg font-medium text-white">{skill}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
