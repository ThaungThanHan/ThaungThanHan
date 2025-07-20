"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Remote Software Engineer",
    company: "One Terrace",
    location: "Tokyo, Japan",
    period: "2023 - Present",
    description:
      "Contributing across the full development stack—frontend, backend, and system architecture—for diverse projects spanning multiple industries and clients. Play an active role in designing scalable systems, delivering new features, and ensuring long-term maintainability. Frequently entrusted with technically challenging tasks requiring creative problem-solving and deep cross-functional collaboration.",
    achievements: [
      "Delivered end-to-end features in high-impact, production-grade applications",
      "Participated in architecture discussions and system design for scalable solutions",
      "Resolved complex technical challenges under tight deadlines",
      "Maintained and enhanced legacy systems while integrating new capabilities"
    ],
    technologies: ["React", "Nest.js", "PostgreSQL", "MySQL", "Docker", "Redis", "AWS"],
  },
  {
    title: "Remote Frontend Developer",
    company: "Pedagogy",
    location: "Singapore",
    period: "2021 - 2022",
    description:
      "Led frontend development for a comprehensive school management system, delivering robust and user-friendly interfaces using cutting-edge web technologies. The platform supported features such as student and teacher user management, attendance tracking, scheduling/calendar, integrated chat, and video conferencing tools. Worked closely with designers to craft pixel-perfect UI, ensuring seamless user experiences across web and mobile platforms.",
    achievements: [
      "Rapid development of multiple high-impact features from concept to deployment",
      "Collaborated effectively in an agile, cross-functional team",
      "Successfully delivered a functional prototype",
    ],
    technologies: ["React", "React Native", "Figma", "Adobe XD"],
  }
]

function ExperienceCard({
  experience,
  index,
  isVisible,
}: {
  experience: (typeof experiences)[0]
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`flex items-start space-x-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Content */}
      <Card className="flex-1 mb-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{experience.company}</p>
            </div>
            <div className="flex flex-col md:items-end mt-2 md:mt-0">
              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {experience.period}
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                {experience.location}
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
              <Award className="w-4 h-4 mr-2 text-yellow-500" />
              Key Achievements
            </h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200 dark:border-blue-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function Experience() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll("[data-experience-card]")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <div key={index} data-experience-card data-index={index}>
              <ExperienceCard experience={experience} index={index} isVisible={visibleCards.has(index)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
