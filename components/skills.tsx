"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 90 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 75 },
      { name: "Prisma", level: 82 },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 78 },
      { name: "Kubernetes", level: 70 },
    ],
  },
]

function ProgressBar({ skill, isVisible }: { skill: { name: string; level: number }; isVisible: boolean }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.level])

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCategories((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll("[data-skill-category]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              data-skill-category
              data-index={categoryIndex}
              className="p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <ProgressBar key={skill.name} skill={skill} isVisible={visibleCategories.has(categoryIndex)} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Badges */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git",
              "GitHub Actions",
              "Vercel",
              "Netlify",
              "Figma",
              "Jest",
              "Cypress",
              "Webpack",
              "Vite",
              "Sass",
              "Material-UI",
              "Chakra UI",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-700 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:from-blue-500/20 hover:to-purple-500/20 dark:hover:from-blue-500/30 dark:hover:to-purple-500/30 transition-all duration-300 transform hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
