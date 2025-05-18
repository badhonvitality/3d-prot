"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Only run the media query on the client
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }

      const listener = () => setMatches(media.matches)
      media.addEventListener("change", listener)

      return () => media.removeEventListener("change", listener)
    }
  }, [matches, query])

  // Return false during SSR to avoid hydration mismatch
  return mounted ? matches : false
}
