import { Card, CardContent } from "@/components/ui/card"
import { Code2, Layers3, Rocket, ShieldCheck, type LucideIcon } from "lucide-react"

type SkillCategory = {
  category: string
  summary: string
  icon: LucideIcon
  skills: string[]
  accent: string
  iconClassName: string
  chipClassName: string
}

const skillCategories: SkillCategory[] = [
  {
    category: "Core Engineering",
    summary: "Strong fundamentals for reliable systems, data handling, and maintainable code.",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "PostgreSQL"],
    accent: "from-sky-500 to-cyan-500",
    iconClassName: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
    chipClassName: "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-700/70 dark:bg-sky-500/10 dark:text-sky-200",
  },
  {
    category: "Product Development",
    summary: "End-to-end product work across interfaces, APIs, integrations, and browser-native tools.",
    icon: Layers3,
    skills: ["React", "Next.js", "Node.js", "React Native", "REST APIs", "Browser Extensions"],
    accent: "from-violet-500 to-fuchsia-500",
    iconClassName: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
    chipClassName:
      "border-violet-200 bg-violet-50 text-violet-800 dark:border-violet-700/70 dark:bg-violet-500/10 dark:text-violet-200",
  },
  {
    category: "Quality & Delivery",
    summary: "Testing, automation, containers, and deployment practices that keep releases dependable.",
    icon: ShieldCheck,
    skills: ["Maestro", "Playwright", "Robot Framework", "Docker", "Git", "CI/CD", "AWS", "Vercel"],
    accent: "from-emerald-500 to-teal-500",
    iconClassName: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
    chipClassName:
      "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-500/10 dark:text-emerald-200",
  },
]

const additionalTechnologies = ["Redis", "Figma", "Sass", "Microservices Architecture"]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My go-to tech stack for turning ideas to products
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card
              key={category.category}
              className="group relative overflow-hidden border-0 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900"
            >
              <div className={`h-1.5 bg-gradient-to-r ${category.accent}`} />
              <CardContent className="p-6">
                <div className="mb-6 flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${category.iconClassName}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{category.summary}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${category.chipClassName}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-white/80 p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900/80">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Additional Experience</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Adjacent tools and practices I have used across product and delivery work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              {additionalTechnologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                {tech}
              </span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
