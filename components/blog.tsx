"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
}

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const postsRef = useRef<HTMLDivElement>(null)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Journey of Badhon Vitality: From Developer to Digital Marketing Expert",
      excerpt:
        "Learn about my journey in the tech world, combining full-stack development skills with digital marketing expertise to create comprehensive solutions.",
      date: "May 15, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600&text=My+Journey",
      category: "Personal",
    },
    {
      id: 2,
      title: "Creating Immersive 3D Web Experiences with Three.js",
      excerpt:
        "Discover how I use Three.js to build engaging 3D websites that captivate users and provide unique interactive experiences.",
      date: "May 5, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=3D+Web",
      category: "Development",
    },
    {
      id: 3,
      title: "Building Effective Email Marketing Funnels for SaaS Products",
      excerpt:
        "A comprehensive guide to creating email marketing funnels that convert prospects into paying customers for SaaS businesses.",
      date: "April 12, 2024",
      readTime: "10 min read",
      image: "/placeholder.svg?height=400&width=600&text=Email+Marketing",
      category: "Marketing",
    },
    {
      id: 4,
      title: "My Approach to SEO for Single Page Applications",
      excerpt:
        "Learn my strategies for optimizing React and Vue.js applications for search engines to improve visibility and rankings.",
      date: "March 30, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=400&width=600&text=SEO+for+SPAs",
      category: "Marketing",
    },
    {
      id: 5,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "An analysis of emerging technologies and methodologies that are shaping the future of web development.",
      date: "March 15, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=400&width=600&text=Web+Trends",
      category: "Development",
    },
    {
      id: 6,
      title: "How I Built My First Discord Music Bot",
      excerpt:
        "A detailed walkthrough of my process for creating a feature-rich Discord music bot using Node.js and modern JavaScript.",
      date: "March 5, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=400&width=600&text=Discord+Bot",
      category: "Development",
    },
  ]

  useEffect(() => {
    if (sectionRef.current && titleRef.current && postsRef.current) {
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
        postsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: postsRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        },
      )
    }
  }, [])

  return (
    <section ref={sectionRef} id="blog" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-primary">Blog</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights and articles about web development, digital marketing, and technology trends.
          </p>
        </div>

        <div ref={postsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-black/40 backdrop-blur-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-primary text-black px-3 py-1 text-xs font-medium rounded-full">
                  {post.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2 flex-grow">
                <p className="text-gray-300 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-xs text-gray-400 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-primary p-0 h-auto flex items-center">
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
