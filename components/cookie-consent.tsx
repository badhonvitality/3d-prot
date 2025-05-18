"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent")
    if (!hasAccepted) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-black/90 backdrop-blur-lg border border-primary/30 rounded-lg p-4 md:p-6 shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">Cookie Consent</h3>
          <button onClick={declineCookies} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <p className="text-gray-300 mb-4">
          This website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content.
          By clicking "Accept All", you consent to our use of cookies as described in our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
            onClick={declineCookies}
          >
            Decline
          </Button>
          <Button className="bg-primary text-black hover:bg-primary/80" onClick={acceptCookies}>
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}
