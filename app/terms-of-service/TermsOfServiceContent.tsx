"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServiceContent() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">Last Updated: May 18, 2024</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Badhon Vitality. These Terms of Service govern your use of our website and the services we
            provide. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any
            part of the terms, you may not access the website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, Badhon Vitality owns the intellectual property rights for all material on this
            website. All intellectual property rights are reserved. You may view and/or print pages from the website for
            your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
            <li>Republish material from this website</li>
            <li>Sell, rent, or sub-license material from this website</li>
            <li>Reproduce, duplicate, or copy material from this website</li>
            <li>Redistribute content from Badhon Vitality (unless content is specifically made for redistribution)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Content</h2>
          <p>
            In these Terms of Service, "User Content" shall mean any audio, video, text, images, or other material you
            choose to display on this website. By displaying your User Content, you grant Badhon Vitality a
            non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt,
            publish, translate, and distribute it in any and all media.
          </p>
          <p>
            Your User Content must be your own and must not be infringing on any third party's rights. Badhon Vitality
            reserves the right to remove any of your content from this website at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. No Warranties</h2>
          <p>
            This website is provided "as is," with all faults, and Badhon Vitality makes no express or implied
            representations or warranties of any kind related to this website or the materials contained on this
            website. Additionally, nothing contained on this website shall be construed as providing advice to you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall Badhon Vitality, nor any of its officers, directors, and employees, be liable to you for
            anything arising out of or in any way connected with your use of this website, whether such liability is
            under contract, tort, or otherwise, and Badhon Vitality, including its officers, directors, and employees
            shall not be liable for any indirect, consequential, or special liability arising out of or in any way
            related to your use of this website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent Badhon Vitality from and against any and all liabilities, costs,
            demands, causes of action, damages, and expenses (including reasonable attorney's fees) arising out of or in
            any way related to your breach of any of the provisions of these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such
            unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such
            provisions shall be deleted without affecting the remaining provisions herein.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Variation of Terms</h2>
          <p>
            Badhon Vitality is permitted to revise these Terms at any time as it sees fit, and by using this website,
            you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions
            governing use of this website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and construed in accordance with the laws of Bangladesh, and you submit to
            the non-exclusive jurisdiction of the state and federal courts located in Bangladesh for the resolution of
            any disputes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
            <li>By email: info.nvidiacore@gmail.com</li>
            <li>By phone: +8801708103286</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
