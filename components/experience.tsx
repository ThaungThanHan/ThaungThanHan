"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2023 - Present",
    description:
      "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices solutions.",
    achievements: [
      "Increased application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
    ],
    technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Austin, TX",
    period: "2021 - 2023",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to create pixel-perfect user interfaces.",
    achievements: [
      "Built 15+ client projects from scratch",
      "Reduced bug reports by 50% through comprehensive testing",
      "Implemented responsive design across all projects",
    ],
    technologies: ["Vue.js", "Python", "Django", "MongoDB", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "Remote",
    period: "2020 - 2021",
    description:
      "Specialized in creating responsive and interactive user interfaces. Worked closely with UX designers to implement modern design systems.",
    achievements: [
      "Improved website loading speed by 35%",
      "Created reusable component library",
      "Achieved 98% client satisfaction rate",
    ],
    technologies: ["React", "JavaScript", "Sass", "Webpack", "Figma"],
  },
  {
    title: "Junior Web Developer",
    company: "WebDev Studio",
    location: "New York, NY",
    period: "2019 - 2020",
    description:
      "Started my professional journey building websites and learning modern development practices. Gained experience in both frontend and backend technologies.",
    achievements: [
      "Completed 20+ website projects",
      "Learned 5 new programming languages",
      'Received "Rising Star" award',
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
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
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" />
        {index < experiences.length - 1 && (
          <div className="w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-600 mt-2" />
        )}
      </div>

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
