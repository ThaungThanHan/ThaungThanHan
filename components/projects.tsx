"use client"

import { useState } from "react"
import { Github, Eye, LockIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type ProjectFilter = "all" | "personal" | "contribution"

type Project = {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  demo: string
  featured: boolean
  isContribution: boolean
  isPrivate: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "WDTM: Explain Texts and Images",
    description: "Chrome extension that explains selected text, images and whole page directly in the browser.",
    longDescription:
      "Built an AI-powered Chrome extension that explains selected text and images directly within the current webpage, helping users understand unfamiliar content without interrupting their browsing flow.",
    image: "/images/WDTM.png",
    tags: ["Chrome Extension", "AI", "TypeScript", "React", "Browser APIs"],
    demo: "https://chromewebstore.google.com/detail/wdtm-explain-texts-and-im/mjppafenopgehbhkfojcflhphoblhaok",
    featured: true,
    isContribution: false,
    isPrivate: false
  },
  {
    id: 2,
    title: "Hermes OmniVoice",
    description: "Open-source Hermes Agent plugin for local multilingual text-to-speech with OmniVoice.",
    longDescription:
      "Built and launched a Python plugin that registers an k2-fsa/OmniVoice TTS provider for Hermes, supporting voice cloning, voice design, and config-driven speech generation.",
    image: "/images/omnivoice.jpeg",
    tags: ["Python", "Hermes", "OmniVoice", "TTS", "Open Source"],
    demo: "https://github.com/ThaungThanHan/hermes-omnivoice",
    featured: true,
    isContribution: false,
    isPrivate: false
  },
  {
    id: 3,
    title: "JP-MIRAI Platform",
    description: "Fullstack development for a multilingual support platform serving foreign workers in Japan.",
    longDescription:
      "Contributed across the admin dashboard and user portal, building multilingual UI, integrating backend APIs, resolving bugs, and improving platform stability and accessibility.",
    image: "/images/jpmirai.png",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Figma", "i18n", "REST API"],
    demo: "https://portal.jp-mirai.org/en",
    featured: false,
    isContribution: true,
    isPrivate: false
  },
  {
    id: 4,
    title: "One Japanese - One Terrace",
    description: "Full-featured learning management system with video lessons, quizzes, and multi-role dashboards.",
    longDescription:
      "Helped build an internal LMS with video lessons, quizzes, progress tracking, course management, and tailored dashboards for students, organizations, and managers.",
    image: "/images/oneterrace.webp",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind", "LMS", "REST API"],
    demo: "Private/Internal",
    featured: false,
    isContribution: true,
    isPrivate: true,
  },
  {
    id: 5,
    title: "Taiheiyo Cement Recruitment Site",
    description: "Corporate recruitment site with responsive, pixel-perfect UI built for a major Japanese company.",
    longDescription:
      "Implemented responsive recruitment pages from detailed design specs, focusing on visual fidelity, smooth interactions, accessibility, and cross-browser consistency.",
    image: "/images/taiheiyo.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Pixel Perfect", "Accessibility"],
    demo: "https://recruit.taiheiyo-c.co.jp/",
    featured: false,
    isContribution: true,
    isPrivate: false
  },
  {
    id: 6,
    title: "Toshin School",
    description: "Educational platform UI enhancements for a language school in Tokyo.",
    longDescription:
      "Delivered responsive UI improvements across student, curriculum, and dashboard modules with a focus on pixel-perfect implementation and accessible user flows.",
    image: "/images/toshin.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Wordpress", "Pixel Perfect"],
    demo: "https://tsschool.co.jp/",
    featured: false,
    isContribution: true,
    isPrivate: false
  },
  {
    id: 7,
    title: "HR Solution – Oneterrace",
    description: "Corporate HR platform with clean, accessible UI for enterprise users.",
    longDescription:
      "Built responsive HR platform interfaces from design specs, improving layout consistency, cross-device behavior, and the overall polish of enterprise workflows.",
    image: "/images/hroneterrace.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Pixel Perfect", "Accessibility"],
    demo: "https://hrsolution.oneterrace.jp/",
    featured: false,
    isContribution: true,
    isPrivate: false
  }
]

function ProjectCard({
  project,
  filter,
}: {
  project: Project
  filter: ProjectFilter
}) {
  const accentGradient = project.isContribution ? "from-green-500 to-teal-600" : "from-blue-500 to-purple-600"
  const accentHover = project.isContribution ? "hover:from-green-600 hover:to-teal-700" : "hover:from-blue-600 hover:to-purple-700"

  return (
    <Card
      className="group relative flex h-full flex-col overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-white/75">
              {project.featured ? "Personal Project" : "Client Contribution"}
            </p>
            <h3 className="truncate text-lg font-bold text-white drop-shadow-sm">{project.title}</h3>
          </div>
          {project.isPrivate ? (
            <span className="inline-flex shrink-0 items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
              <LockIcon className="mr-1 h-3.5 w-3.5" />
              Private
            </span>
          ) : (
           <></>
          )}
        </div>

        {project.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            Personal
          </div>
        )}
        {project.isContribution && (
          <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-green-500 to-teal-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            Contribution
          </div>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-6">
        <div className="mb-5 space-y-3">
          {/* <h3 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">{project.title}</h3> */}
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
          <p className="line-clamp-4 text-sm leading-6 text-gray-500 dark:text-gray-400">{project.longDescription}</p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          {project.isPrivate ? (
            <Button disabled size="sm" className="flex-1 bg-gradient-to-r from-emerald-300 to-teal-300 text-white">
              <LockIcon className="h-4 w-4" />
              Private
            </Button>
          ) : (
            <Button
              asChild
              size="sm"
              className={`flex-1 bg-gradient-to-r ${filter === "contribution" ? "from-green-500 to-teal-600" : accentGradient} ${filter === "contribution" ? "hover:from-green-600 hover:to-teal-700" : accentHover}`}
            >
              <a href={project.demo} target="_blank" rel="noreferrer">
                <Eye className="h-4 w-4" />
                Visit
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all")

  const filteredProjects = projects.filter((project) => {
    if (filter === "personal") return project.featured
    if (filter === "contribution") return project.isContribution
    return true
  })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and personal projects
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              type="button"
              variant={filter === "all" ? "default" : "outline"}
              aria-pressed={filter === "all"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-gradient-to-r from-blue-500 to-purple-600" : ""}
            >
              All Projects
            </Button>
            <Button
              type="button"
              variant={filter === "personal" ? "default" : "outline"}
              aria-pressed={filter === "personal"}
              onClick={() => setFilter("personal")}
              className={filter === "personal" ? "bg-gradient-to-r from-blue-500 to-purple-600" : ""}
            >
              Personal
            </Button>
            <Button
              type="button"
              variant={filter === "contribution" ? "default" : "outline"}
              aria-pressed={filter === "contribution"}
              onClick={() => setFilter("contribution")}
              className={filter === "contribution" ? "bg-gradient-to-r from-green-500 to-teal-600" : ""}
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
              filter={filter}
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
