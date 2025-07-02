"use client"

import { useState } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    longDescription:
      "Built with Next.js, TypeScript, and Stripe. Features include user authentication, product catalog, shopping cart, order management, and real-time inventory tracking.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    longDescription:
      "React-based application with drag-and-drop functionality, real-time collaboration using WebSockets, and comprehensive project tracking.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    longDescription:
      "Vue.js application integrating multiple weather APIs, featuring interactive maps, detailed forecasts, and location-based weather alerts.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "Weather API", "Mapbox", "Chart.js"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking and insights.",
    longDescription:
      "Python-based analytics platform with data visualization, automated reporting, and social media API integrations.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "Django", "D3.js", "PostgreSQL", "Redis"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "AI Chat Assistant",
    description: "Intelligent chatbot with natural language processing and context awareness.",
    longDescription:
      "AI-powered chat application using OpenAI API, featuring context-aware conversations, file uploads, and integration capabilities.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "OpenAI", "Prisma", "WebSockets"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "Mobile-responsive fitness tracking app with workout plans and progress monitoring.",
    longDescription:
      "React Native application with workout tracking, progress visualization, social features, and integration with fitness devices.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Firebase", "Chart.js", "Redux"],
    github: "#",
    demo: "#",
    featured: false,
  },
]

function ProjectCard({
  project,
  isHovered,
  onHover,
  onLeave,
}: {
  project: (typeof projects)[0]
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <Card
      className="group relative overflow-hidden bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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
            Featured
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
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            <Github className="w-4 h-4 mr-1" />
            Code
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
          >
            <Eye className="w-4 h-4 mr-1" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [filter, setFilter] = useState<"all" | "featured">("all")

  const filteredProjects = filter === "featured" ? projects.filter((p) => p.featured) : projects

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
              Featured
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
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Want to see more of my work?</p>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-3 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-slate-800 bg-transparent"
          >
            <Github className="w-5 h-5 mr-2" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
