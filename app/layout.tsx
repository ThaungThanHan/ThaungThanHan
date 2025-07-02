import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alex Johnson - Full Stack Developer",
  description:
    "Passionate full stack developer specializing in React, Node.js, and modern web technologies. Creating innovative solutions and exceptional user experiences.",
  keywords: "full stack developer, react, node.js, typescript, web development, portfolio",
  authors: [{ name: "Alex Johnson" }],
  creator: "Alex Johnson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexjohnson.dev",
    title: "Alex Johnson - Full Stack Developer",
    description: "Passionate full stack developer creating innovative solutions",
    siteName: "Alex Johnson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson - Full Stack Developer",
    description: "Passionate full stack developer creating innovative solutions",
    creator: "@alexjohnsondev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
