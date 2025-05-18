"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Timeline" },
    { id: "marketing", label: "Marketing" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-black/70 backdrop-blur-lg border-b border-primary/20" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center">
            <span className="text-primary">Badhon</span>
            <span className="ml-2">Vitality</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  activeSection === item.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50",
                )}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              className="ml-4 border-primary text-primary hover:bg-primary hover:text-black"
              onClick={() => window.open("/resume", "_blank")}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-b border-primary/20">
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  activeSection === item.id
                    ? "text-primary bg-gray-900/50"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50",
                )}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              className="my-2 w-full border-primary text-primary hover:bg-primary hover:text-black"
              onClick={() => {
                setIsOpen(false)
                window.open("/resume", "_blank")
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
