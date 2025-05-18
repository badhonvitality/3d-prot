"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Search, Mail, Youtube, BarChart2, TrendingUp, Share2 } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface MarketingMetric {
  name: string
  value: number
  icon: React.ReactNode
  description: string
}

interface CampaignData {
  name: string
  conversions: number
  engagement: number
  roi: number
}

export default function Marketing() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const chartRef = useRef<HTMLDivElement>(null)
  const expertiseRef = useRef<HTMLDivElement>(null)

  const marketingMetrics: MarketingMetric[] = [
    {
      name: "SEO Rankings",
      value: 92,
      icon: <Search className="h-6 w-6 text-primary" />,
      description: "Average position improvement for client keywords",
    },
    {
      name: "Email Campaigns",
      value: 45,
      icon: <Mail className="h-6 w-6 text-primary" />,
      description: "Average open rate percentage",
    },
    {
      name: "YouTube Growth",
      value: 210,
      icon: <Youtube className="h-6 w-6 text-primary" />,
      description: "Percentage subscriber increase in 6 months",
    },
    {
      name: "Conversion Rate",
      value: 18,
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      description: "Average conversion rate percentage",
    },
  ]

  const campaignData: CampaignData[] = [
    {
      name: "Q1 2023",
      conversions: 65,
      engagement: 80,
      roi: 120,
    },
    {
      name: "Q2 2023",
      conversions: 75,
      engagement: 90,
      roi: 150,
    },
    {
      name: "Q3 2023",
      conversions: 85,
      engagement: 95,
      roi: 180,
    },
    {
      name: "Q4 2023",
      conversions: 95,
      engagement: 100,
      roi: 220,
    },
    {
      name: "Q1 2024",
      conversions: 100,
      engagement: 110,
      roi: 250,
    },
  ]

  const marketingExpertise = [
    {
      title: "SEO Expertise",
      icon: <Search className="h-6 w-6 text-primary" />,
      items: ["On-page Optimization", "Technical SEO", "Link Building", "Local SEO", "Content Strategy"],
    },
    {
      title: "Email Marketing",
      icon: <Mail className="h-6 w-6 text-primary" />,
      items: ["Automated Sequences", "A/B Testing", "Segmentation", "Personalization", "Analytics"],
    },
    {
      title: "Social Media",
      icon: <Share2 className="h-6 w-6 text-primary" />,
      items: ["Campaign Strategy", "Ad Creation", "Audience Targeting", "Performance Analysis", "Retargeting"],
    },
    {
      title: "Analytics",
      icon: <BarChart2 className="h-6 w-6 text-primary" />,
      items: ["Conversion Tracking", "User Behavior", "Funnel Analysis", "ROI Calculation", "Reporting"],
    },
  ]

  useEffect(() => {
    if (sectionRef.current && titleRef.current && metricsRef.current && chartRef.current && expertiseRef.current) {
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
        metricsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: metricsRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        },
      )

      gsap.fromTo(
        chartRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        },
      )

      gsap.fromTo(
        expertiseRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: expertiseRef.current,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
        },
      )
    }
  }, [])

  return (
    <section ref={sectionRef} id="marketing" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Marketing <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcasing my digital marketing capabilities and successful campaign results.
          </p>
        </div>

        <div ref={metricsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketingMetrics.map((metric, index) => (
            <Card
              key={index}
              className="bg-black/40 backdrop-blur-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {metric.icon}
                  <h4 className="text-xl font-medium ml-3">{metric.name}</h4>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.value}
                  {metric.name === "SEO Rankings" ||
                  metric.name === "Conversion Rate" ||
                  metric.name === "Email Campaigns"
                    ? "%"
                    : "+"}
                </div>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={chartRef} className="mb-16">
          <Card className="bg-black/40 backdrop-blur-lg border border-primary/20">
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={campaignData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111",
                        border: "1px solid #00FFAA",
                        borderRadius: "4px",
                      }}
                    />
                    <Bar dataKey="conversions" name="Conversions" fill="#00FFAA" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="engagement" name="Engagement" fill="#9333EA" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="roi" name="ROI (%)" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div ref={expertiseRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {marketingExpertise.map((expertise, index) => (
            <Card
              key={index}
              className="bg-black/40 backdrop-blur-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  {expertise.icon}
                  <span className="ml-3">{expertise.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {expertise.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
