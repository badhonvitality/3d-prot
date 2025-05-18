"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyClient() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">Last Updated: May 18, 2024</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Badhon Vitality's Privacy Policy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website. Please read this privacy policy carefully. If you do
            not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>
            <strong>Personal Data:</strong> We may collect personal identification information, including but not
            limited to your name, email address, and phone number when you fill out a contact form or subscribe to our
            newsletter.
          </p>
          <p>
            <strong>Usage Data:</strong> We may also collect information on how the website is accessed and used. This
            may include your computer's Internet Protocol address, browser type, browser version, the pages of our
            website that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic
            data.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Your Information</h2>
          <p>We may use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
            <li>To provide and maintain our website</li>
            <li>To notify you about changes to our website</li>
            <li>To allow you to participate in interactive features when you choose to do so</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our website</li>
            <li>To monitor the usage of our website</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To fulfill any other purpose for which you provide it</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain
            information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Third-Party Services</h2>
          <p>
            We may use third-party service providers to monitor and analyze the use of our website or to contact you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Security of Your Personal Information</h2>
          <p>
            The security of your personal information is important to us, but remember that no method of transmission
            over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially
            acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Data Protection Rights</h2>
          <p>
            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled
            to the following:
          </p>
          <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>
              The right to rectification – You have the right to request that we correct any information you believe is
              inaccurate. You also have the right to request that we complete information you believe is incomplete.
            </li>
            <li>
              The right to erasure – You have the right to request that we erase your personal data, under certain
              conditions.
            </li>
            <li>
              The right to restrict processing – You have the right to request that we restrict the processing of your
              personal data, under certain conditions.
            </li>
            <li>
              The right to object to processing – You have the right to object to our processing of your personal data,
              under certain conditions.
            </li>
            <li>
              The right to data portability – You have the right to request that we transfer the data that we have
              collected to another organization, or directly to you, under certain conditions.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
            <li>By email: info.nvidiacore@gmail.com</li>
            <li>By phone: +8801708103286</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
