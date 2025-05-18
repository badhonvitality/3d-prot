import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Sitemap | Badhon Vitality",
  description:
    "Navigate through all sections of Badhon Vitality's portfolio website. Find links to all pages and content.",
  openGraph: {
    title: "Sitemap | Badhon Vitality",
    description:
      "Navigate through all sections of Badhon Vitality's portfolio website. Find links to all pages and content.",
    url: "https://badhonvitality.com/sitemap",
    siteName: "Badhon Vitality Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap | Badhon Vitality",
    description:
      "Navigate through all sections of Badhon Vitality's portfolio website. Find links to all pages and content.",
  },
}

export default function Sitemap() {
  const siteLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Projects", path: "/#projects" },
    { name: "Skills", path: "/#skills" },
    { name: "Timeline", path: "/#timeline" },
    { name: "Marketing", path: "/#marketing" },
    { name: "Blog", path: "/#blog" },
    { name: "Contact", path: "/#contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Sitemap", path: "/sitemap" },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="p-4 bg-black/40 backdrop-blur-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-lg"
            >
              <span className="text-lg font-medium">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
