"use client"

import Link from "next/link"
import { ArrowLeft, Download, Facebook, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResumeClient() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <Button
            onClick={() => window.print()}
            className="bg-primary text-black hover:bg-primary/80 flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-lg border border-primary/20 rounded-lg p-8 shadow-lg print:shadow-none print:border-none print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-primary/30 pb-6 mb-6">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-primary">Badhon</span> Vitality
            </h1>
            <h2 className="text-xl text-gray-300 mb-4">Full Stack 3D Web Developer & Digital Marketing Strategist</h2>
            <p className="text-gray-400">Rangpur City, Bangladesh | info.nvidiacore@gmail.com | +8801708103286</p>
            <div className="flex mt-4 space-x-4">
              <Link
                href="https://www.facebook.com/Badhon.Vitality"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://discord.com/users/1121859070488498196"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mst-laila-akther/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/badhonvitality"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Professional Summary</h3>
            <p className="text-gray-300">
              Innovative Full Stack Developer and Digital Marketing Strategist with expertise in creating immersive 3D
              web experiences and implementing effective digital marketing campaigns. Combines technical prowess in
              modern web technologies with strategic marketing insights to deliver comprehensive digital solutions that
              drive engagement and conversions.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Core Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Technical Skills</h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  <li>Frontend: React.js, Vue.js, Three.js, HTML5, CSS3, JavaScript</li>
                  <li>Backend: Node.js, Express.js, Laravel, Golang</li>
                  <li>Databases: MongoDB, MySQL</li>
                  <li>3D Development: Three.js, WebGL, GSAP</li>
                  <li>Version Control: Git, GitHub</li>
                  <li>Deployment: Vercel, Netlify, AWS</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Marketing Skills</h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  <li>SEO: On-page, Off-page, Technical SEO</li>
                  <li>Social Media: Facebook Ads, Instagram Marketing</li>
                  <li>Content Creation: YouTube Automation, Blog Writing</li>
                  <li>Analytics: Google Analytics, Facebook Pixel</li>
                  <li>Email Marketing: Campaign Strategy, Automation</li>
                  <li>Digital Strategy: Conversion Optimization, Funnel Design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Project Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-200">3D Portfolio Websites</h4>
                <p className="text-gray-300 mt-1">
                  Designed and developed immersive 3D portfolio websites using Three.js and React, featuring interactive
                  elements, custom animations, and responsive design. Implemented performance optimizations for smooth
                  user experience across devices.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200">Discord Music Bots</h4>
                <p className="text-gray-300 mt-1">
                  Created custom Discord music bots using Node.js with features including playlist management, audio
                  quality controls, and user permission systems. Implemented efficient audio streaming and caching
                  mechanisms.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200">File Manager Systems</h4>
                <p className="text-gray-300 mt-1">
                  Developed secure file management systems with user authentication, file encryption, and permission
                  controls using Node.js, Express, and MongoDB. Implemented drag-and-drop interfaces and real-time
                  updates.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200">Minecraft RP Servers</h4>
                <p className="text-gray-300 mt-1">
                  Built and maintained custom Minecraft roleplay servers with custom plugins, user management systems,
                  and economy features. Created web interfaces for server administration and player statistics.
                </p>
              </div>
            </div>
          </div>

          {/* Marketing Experience */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Marketing Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-200">SEO Optimization</h4>
                <p className="text-gray-300 mt-1">
                  Implemented comprehensive SEO strategies resulting in significant organic traffic growth. Conducted
                  keyword research, technical SEO audits, and content optimization to improve search rankings.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200">Facebook Advertising</h4>
                <p className="text-gray-300 mt-1">
                  Managed Facebook ad campaigns with strategic targeting, A/B testing, and conversion tracking. Created
                  engaging ad creatives and optimized campaigns for maximum ROI.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200">YouTube Automation</h4>
                <p className="text-gray-300 mt-1">
                  Developed YouTube content strategies and automation systems for consistent content delivery.
                  Implemented SEO best practices for video content and created growth strategies.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200">Digital Campaigns</h4>
                <p className="text-gray-300 mt-1">
                  Designed and executed multi-channel digital marketing campaigns integrating social media, email
                  marketing, and content strategies to drive engagement and conversions.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
            <div>
              <h4 className="text-lg font-semibold text-gray-200">Secondary School Certificate (SSC)</h4>
              <p className="text-gray-300">Bir Uttam Shaheed Smriti School & College | 2026 Batch</p>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Additional Information</h3>
            <p className="text-gray-300">
              Self-taught developer with a passion for creating innovative digital experiences. Continuously learning
              new technologies and marketing strategies to stay at the forefront of the digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
            color: black;
          }
          .container {
            max-width: 100%;
            padding: 0;
          }
          a {
            text-decoration: none;
            color: #00AAFF;
          }
          button, .print\\:hidden {
            display: none !important;
          }
          .text-primary {
            color: #00AAFF !important;
          }
          .text-gray-300, .text-gray-400, .text-gray-200 {
            color: #333 !important;
          }
          .border-primary\\/30 {
            border-color: #00AAFF !important;
          }
        }
      `}</style>
    </div>
  )
}
