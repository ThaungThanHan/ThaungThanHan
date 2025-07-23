"use client"

import { useState } from "react"
import { ExternalLink, Github, Eye, LockIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
const projects = [
  {
    id: 1,
    title: "Voting App",
    description: "Real-time voting platform where users can host or join rooms and cast votes securely.",
    longDescription:
      "A fullstack voting application built in my free time to sharpen skills in modern web development. Users can create voting rooms, join via unique room codes, and vote once per session. Built using Next.js, TypeScript, and PostgreSQL, with real-time updates and responsive design. Includes user authentication and session control to ensure fair voting.",
    image: "/images/voting_app.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Socket.io"],
    github: "#",
    demo: "https://hanvotingapp.vercel.app/",
    featured: true,
    isPrivate: false,
    hasCode: true
  },
  {
    id: 2,
    title: "JP-MIRAI Platform",
    description: "Fullstack development for a multilingual support platform serving foreign workers in Japan.",
    longDescription:
      "Worked on both frontend and backend development for JP-MIRAI, a government-supported web platform that provides guidance and resources to foreign workers in Japan. Contributed to building and maintaining the Admin Dashboard and User Portal. Responsibilities included implementing multilingual UI components, integrating backend APIs, resolving bugs, and enhancing overall platform performance and accessibility. Actively participated in ongoing feature development, maintenance, and cross-team collaboration to ensure a stable and inclusive digital experience.",
    image: "/images/jpmirai.png",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Figma", "i18n", "REST API"],
    github: "#",
    demo: "https://portal.jp-mirai.org/en",
    featured: false,
    isContribution: true,
    isPrivate: false,
    hasCode: false
  },
  {
    id: 3,
    title: "One Japanese - One Terrace",
    description: "Full-featured learning management system with video lessons, quizzes, and multi-role dashboards.",
    longDescription:
      "Contributed to the development of 'One Japanese', an internal Learning Management System (LMS) designed to facilitate language learning through video lessons and interactive quizzes. The platform includes dedicated dashboards for students, organizations, and managers, each with tailored functionality. Worked across both frontend and backend to implement user interfaces, manage course content, and build features for tracking progress, managing users, and maintaining system stability.",
    image: "/images/oneterrace.webp",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind", "LMS", "REST API"],
    github: "#",
    demo: "Private/Internal",
    featured: false,
    isContribution: true,
    isPrivate: true,
    hasCode: false,
  },
  {
    id: 4,
    title: "Taiheiyo Cement Recruitment Site",
    description: "Corporate recruitment site with responsive, pixel-perfect UI built for a major Japanese company.",
    longDescription:
      "Contributed to the frontend development of Taiheiyo Cement’s recruitment website. Focused on implementing a responsive, pixel-perfect user interface based on detailed design specifications. Worked closely with designers to ensure high visual fidelity, smooth interactions, and cross-browser compatibility. Maintained clean, scalable code and ensured the site met modern web accessibility and performance standards.",
    image: "/images/taiheiyo.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Pixel Perfect", "Accessibility"],
    github: "#",
    demo: "https://recruit.taiheiyo-c.co.jp/",
    featured: false,
    isContribution: true,
    isPrivate: false,
    hasCode: false
  },
  {
    id: 5,
    title: "Toshin School",
    description: "Educational platform UI enhancements for a language school in Tokyo.",
    longDescription:
      "Contributed to frontend UI development for TSSchool, a Japanese language school’s online platform. Collaborated with designers to implement responsive, user-friendly interfaces across student, curriculum, and dashboard modules. Focused on pixel-perfect design, accessibility, and cross-browser consistency to elevate the user experience for both students and administrators.",
    image: "/images/toshin.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Wordpress", "Pixel Perfect"],
    github: "#",
    demo: "https://tsschool.co.jp/",
    featured: false,
    isContribution: true,
    isPrivate: false,
    hasCode: false
  },
  {
    id: 6,
    title: "HR Solution – Oneterrace",
    description: "Corporate HR platform with clean, accessible UI for enterprise users.",
    longDescription:
      "Worked on frontend UI development for Oneterrace’s HR Solution platform, a corporate system designed to streamline HR operations. Contributed to building responsive, user-friendly interfaces based on design specifications, focusing on clean layouts, consistent styling, and cross-device compatibility. Collaborated closely with the design team to ensure pixel-perfect implementation and a polished user experience across different modules.",
    image: "/images/hroneterrace.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Pixel Perfect", "Accessibility"],
    github: "#",
    demo: "https://hrsolution.oneterrace.jp/",
    featured: false,
    isContribution: true,
    isPrivate: false,
    hasCode: false
  }
]

function ProjectCard({
  project,
  isHovered,
  onHover,
  onLeave,
  filter,
}: {
  project: (typeof projects)[0]
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  filter: "all" | "featured" | "isContribution"
}) {
  return (
    <Card
      className="group relative overflow-hidden bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 overflow-hidden"
        />

        {/* Glassmorphism Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm leading-relaxed">{project.longDescription}</p>
            <div className="flex space-x-2 mt-3">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Personal
          </div>
        )}
        {project.isContribution && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Contribution
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          {project.hasCode &&
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <Github className="w-4 h-4 mr-1" />
            Code
          </Button>
          }
          <Button
            disabled={project.isPrivate}
            size="sm"
            className={`flex-1 bg-gradient-to-r ${filter === "isContribution" ? "from-green-500 to-teal-600" : "from-blue-500 to-purple-600"} 
            ${filter === "isContribution" ? "hover:from-green-600 hover:to-teal-700" : "hover:from-blue-600 hover:to-purple-700"}`}
          >
          <a href={!project.isPrivate ? project.demo : "#"} target="_blank" className="flex flex-row items-center w-full
          h-full justify-center">
            {project.isPrivate ? <LockIcon className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
            {project.isPrivate ? "Private" : "Demo"}
          </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [filter, setFilter] = useState<"all" | "featured" | "isContribution">("all")

  const filteredProjects = filter === "featured" ? projects.filter((p) => p.featured) : 
  filter === "isContribution" ? projects.filter((p) => p.isContribution) : projects

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-gradient-to-r from-blue-500 to-purple-600" : ""}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
              className={filter === "featured" ? "bg-gradient-to-r from-blue-500 to-purple-600" : ""}
            >
              Personal
            </Button>
            <Button
              variant={filter === "isContribution" ? "default" : "outline"}
              onClick={() => setFilter("isContribution")}
              className={filter === "isContribution" ? "bg-gradient-to-r from-green-500 to-teal-600" : ""}
            >
              Contributions
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
              filter={project.isContribution ? "isContribution" : "all"}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Want to see more of my work?</p>
          <a href="https://github.com/ThaungThanHan?tab=overview&from=2025-07-01&to=2025-07-17" target="_blank">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-slate-800 bg-transparent"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
