"use client"

import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  liveDemo?: string
  comingSoon: boolean
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "3D Portfolio Website",
      description:
        "An immersive 3D portfolio website built with Three.js and React, featuring interactive elements and smooth animations.",
      image: "/placeholder.svg?height=600&width=800&text=3D+Portfolio",
      technologies: ["Three.js", "React", "GSAP", "Tailwind CSS"],
      github: "https://github.com/badhonvitality",
      liveDemo: undefined,
      comingSoon: true,
    },
    {
      id: 2,
      title: "Discord Music Bot",
      description:
        "A feature-rich Discord music bot with playlist management, audio controls, and user permissions system.",
      image: "/placeholder.svg?height=600&width=800&text=Music+Bot",
      technologies: ["Node.js", "Discord.js", "FFmpeg", "MongoDB"],
      github: "https://github.com/badhonvitality",
      liveDemo: undefined,
      comingSoon: true,
    },
    {
      id: 3,
      title: "File Manager System",
      description: "Secure file management system with user authentication, file encryption, and permission controls.",
      image: "/placeholder.svg?height=600&width=800&text=File+Manager",
      technologies: ["Vue.js", "Express", "MySQL", "AWS S3"],
      github: "https://github.com/badhonvitality",
      liveDemo: undefined,
      comingSoon: true,
    },
    {
      id: 4,
      title: "Minecraft RP Server",
      description: "Custom Minecraft roleplay server with plugins, user management systems, and economy features.",
      image: "/placeholder.svg?height=600&width=800&text=Minecraft+Server",
      technologies: ["Java", "MySQL", "PHP", "JavaScript"],
      github: "https://github.com/badhonvitality",
      liveDemo: undefined,
      comingSoon: true,
    },
  ]

  useEffect(() => {
    if (sectionRef.current && titleRef.current && carouselRef.current) {
      gsap.fromTo(
        titleRef.current,
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
        carouselRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        },
      )
    }
  }, [])

  const nextProject = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of web development and digital marketing projects that showcase my skills and
            expertise.
          </p>
        </div>

        <div ref={carouselRef} className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 backdrop-blur-sm border-primary/50 text-primary hover:bg-primary/20"
              onClick={prevProject}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 backdrop-blur-sm border-primary/50 text-primary hover:bg-primary/20"
              onClick={nextProject}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-black/40 backdrop-blur-lg border border-primary/20 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2 relative">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="h-64 md:h-full w-full object-cover"
                        />
                        {project.comingSoon && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                            <div className="bg-primary text-black px-6 py-3 text-lg font-bold rounded-md transform -rotate-12">
                              Coming Soon
                            </div>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6 md:w-1/2 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                          <p className="text-gray-300 mb-6">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4">
                          {project.github && (
                            <Button
                              variant="outline"
                              className="flex items-center gap-2 border-primary/50 text-primary hover:bg-primary/20"
                              onClick={() => window.open(project.github, "_blank")}
                            >
                              <Github className="h-4 w-4" />
                              GitHub
                            </Button>
                          )}
                          {project.liveDemo && !project.comingSoon && (
                            <Button
                              className="flex items-center gap-2 bg-primary text-black hover:bg-primary/80"
                              onClick={() => window.open(project.liveDemo, "_blank")}
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
