"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20">
        <div
          className="absolute inset-0 bg-gradient-radial from-blue-500/20 to-transparent"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow" />
            <div className="absolute inset-2 bg-white dark:bg-slate-900 rounded-full" />
            <div className="absolute inset-3 rounded-full">
            <Image
              src="/images/myself.jpg"
              alt="Developer Profile"
              width={0}
              height={0}
              className=" w-full h-full object-cotain rounded-full"
            />
            </div>

          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Creating digital wonders with pixels and code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToProjects()}
            >
              View My Work
            </Button>
            <a href="/files/Thaung_ThanHan_Resume.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent"
            >
              Download Resume
            </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: "https://github.com/ThaungThanHan", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/thaung-than-h-658b57118/", label: "LinkedIn" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=ericlimmm115@gmail.com&su=&body=", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                target="_blank"
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToProjects}
            className="p-2 rounded-full bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700 hover:bg-white/20 dark:hover:bg-slate-700/50 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
