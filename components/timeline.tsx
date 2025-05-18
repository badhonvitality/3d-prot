"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { Terminal } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
}

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [terminalText, setTerminalText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)

  const timelineItems: TimelineItem[] = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "TechInnovate Solutions",
      description:
        "Leading development of enterprise-level web applications with React, Node.js, and Three.js. Managing a team of 5 developers and implementing CI/CD pipelines.",
    },
    {
      year: "2021 - 2023",
      title: "Digital Marketing Lead",
      company: "Global Marketing Agency",
      description:
        "Developed and executed comprehensive digital marketing strategies for Fortune 500 clients. Increased conversion rates by 45% through data-driven optimization.",
    },
    {
      year: "2019 - 2021",
      title: "Full Stack Developer",
      company: "WebTech Innovations",
      description:
        "Built scalable web applications using Vue.js, Laravel, and MySQL. Implemented responsive designs and optimized performance for high-traffic websites.",
    },
    {
      year: "2017 - 2019",
      title: "Frontend Developer & SEO Specialist",
      company: "Digital Solutions Inc.",
      description:
        "Created responsive web interfaces and implemented SEO strategies that increased organic traffic by 200% within 6 months.",
    },
  ]

  useEffect(() => {
    if (sectionRef.current && titleRef.current && terminalRef.current) {
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
        terminalRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: terminalRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        },
      )
    }
  }, [])

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    let fullText = ""
    timelineItems.forEach((item) => {
      fullText += `> career.getPosition("${item.year}")
{
  title: "${item.title}",
  company: "${item.company}",
  description: "${item.description}"
}

`
    })

    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTerminalText((prev) => prev + fullText[currentIndex])
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 20)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section ref={sectionRef} id="timeline" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A chronological journey through my professional experience and career milestones.
          </p>
        </div>

        <Card ref={terminalRef} className="bg-black border border-primary/30 max-w-4xl mx-auto">
          <div className="bg-gray-900 px-4 py-2 border-b border-primary/30 flex items-center">
            <Terminal className="h-5 w-5 text-primary mr-2" />
            <div className="text-sm font-mono">career.sh</div>
          </div>
          <CardContent className="p-0">
            <div className="font-mono text-sm p-4 h-[500px] overflow-auto">
              <pre className="whitespace-pre-wrap text-gray-300">
                {terminalText}
                {cursorVisible && <span className="text-primary">▋</span>}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
