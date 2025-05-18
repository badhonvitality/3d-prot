"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layout, Database, Server, Search, Mail, Share2, Zap, FileText } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface Skill {
  name: string
  icon: React.ReactNode
  category: string
  proficiency: number
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    {
      name: "Three.js",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      category: "Frontend",
      proficiency: 90,
    },
    {
      name: "React",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      category: "Frontend",
      proficiency: 95,
    },
    {
      name: "Vue.js",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      category: "Frontend",
      proficiency: 85,
    },
    {
      name: "Node.js",
      icon: <Server className="h-6 w-6 text-primary" />,
      category: "Backend",
      proficiency: 90,
    },
    {
      name: "Express.js",
      icon: <Server className="h-6 w-6 text-primary" />,
      category: "Backend",
      proficiency: 85,
    },
    {
      name: "Go",
      icon: <Server className="h-6 w-6 text-primary" />,
      category: "Backend",
      proficiency: 75,
    },
    {
      name: "MySQL",
      icon: <Database className="h-6 w-6 text-primary" />,
      category: "Database",
      proficiency: 90,
    },
    {
      name: "MongoDB",
      icon: <Database className="h-6 w-6 text-primary" />,
      category: "Database",
      proficiency: 85,
    },
    {
      name: "Laravel",
      icon: <Server className="h-6 w-6 text-primary" />,
      category: "Backend",
      proficiency: 80,
    },
    {
      name: "SEO",
      icon: <Search className="h-6 w-6 text-primary" />,
      category: "Marketing",
      proficiency: 95,
    },
    {
      name: "Email Marketing",
      icon: <Mail className="h-6 w-6 text-primary" />,
      category: "Marketing",
      proficiency: 90,
    },
    {
      name: "Social Media Ads",
      icon: <Share2 className="h-6 w-6 text-primary" />,
      category: "Marketing",
      proficiency: 85,
    },
    {
      name: "Automation",
      icon: <Zap className="h-6 w-6 text-primary" />,
      category: "Marketing",
      proficiency: 80,
    },
    {
      name: "Content Strategy",
      icon: <FileText className="h-6 w-6 text-primary" />,
      category: "Marketing",
      proficiency: 90,
    },
    {
      name: "UI/UX Design",
      icon: <Layout className="h-6 w-6 text-primary" />,
      category: "Design",
      proficiency: 85,
    },
  ]

  useEffect(() => {
    if (sectionRef.current && titleRef.current && skillsRef.current) {
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
        skillsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.8,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        },
      )
    }
  }, [])

  // Group skills by category
  const categories = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
    <section ref={sectionRef} id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical and marketing skills that I've developed throughout my career.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 border-b border-primary/30 pb-2">{category}</h3>
              <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-black/40 backdrop-blur-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {skill.icon}
                        <h4 className="text-xl font-medium ml-3">{skill.name}</h4>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                      </div>
                      <div className="text-right text-sm text-gray-400 mt-1">{skill.proficiency}%</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
