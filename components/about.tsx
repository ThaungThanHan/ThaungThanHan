"use client"

import { Calendar, Code, Coffee, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const techStack = [
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "React", color: "bg-cyan-500" },
  { name: "Next.js", color: "bg-black dark:bg-white" },
  { name: "Node.js", color: "bg-green-600" },
  { name: "Python", color: "bg-blue-500" },
  { name: "PostgreSQL", color: "bg-blue-700" },
  { name: "MongoDB", color: "bg-green-500" },
  { name: "Firebase", color: "bg-orange-500" },
  { name: "Docker", color: "bg-blue-400" },
]

const stats = [
  { icon: Calendar, label: "Years Experience", value: "2+" },
  // { icon: Code, label: "Projects Completed", value: "50+" },
  // { icon: Coffee, label: "Cups of Coffee", value: "1000+" },
  // { icon: Users, label: "Happy Clients", value: "25+" },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full stack developer who finds joy in building complete, end-to-end applications that bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Hello, I'm Thaung Than Han</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full-stack developer with over 5 years of experience building scalable web
                  applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When
                  I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
                  enjoying a good cup of coffee.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  With expertise in modern JavaScript frameworks, cloud technologies, and database design, 
                  I go beyond writing clean, maintainable code—I focus on architecting scalable, user-centric systems. I take pride in planning solutions end-to-end, ensuring not only technical soundness but also a seamless user experience.
                </p>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }) => (
                <Card
                  key={label}
                  className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-0 text-center">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <div className={`w-4 h-4 rounded-full ${tech.color}`} />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="p-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Journey</h3>
                <div className="space-y-4">
                  {[
                    { year: "2021", event: "Started as Junior Developer, mainly working on frontend" },
                    { year: "2023", event: "Grew into Full Stack Developer" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {item.year}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300">{item.event}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
