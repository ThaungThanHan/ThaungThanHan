import { Award, CalendarCheck, FileText, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    title: "JCSSE 2026 : The 23rd International Joint Conference on Computer Science and Software Engineering",
    paperTitle: "A Comparative Study of Image Segmentation Techniques for Mango Images under Pendulum and Vibration Conditions",
    type: "Research Publication",
    date: "2026",
    description:
      "Compared five image segmentation techniques under pendulum and vibration conditions to assess their reliability for real-world mango inspection and agricultural computer vision.",
    highlights: [
      "Compared five image segmentation techniques for mango images",
      "Evaluated performance under pendulum and vibration conditions",
      "Published and presented at JCSSE 2026"
    ]  
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 shadow-sm dark:border-amber-700/70 dark:bg-amber-500/10 dark:text-amber-200">
            <Sparkles className="h-4 w-4" />
            Recognition, research, and milestones
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Highlights that reflect technical curiosity, persistence, and work beyond day-to-day product delivery.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-amber-400 via-blue-400 to-transparent md:block" />

          <div className="space-y-6">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="relative md:pl-20">
                <div className="absolute left-0 top-8 hidden h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg md:flex">
                  <Award className="h-6 w-6" />
                </div>

                <Card className="group overflow-hidden border-0 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900">
                  <div className="h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-blue-500" />
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-3xl">
                        <div className="mb-4 flex flex-wrap gap-3">
                          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 dark:border-amber-700/70 dark:bg-amber-500/10 dark:text-amber-200">
                            <FileText className="mr-1.5 h-3.5 w-3.5" />
                            {achievement.type}
                          </span>
                          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 dark:border-blue-700/70 dark:bg-blue-500/10 dark:text-blue-200">
                            <CalendarCheck className="mr-1.5 h-3.5 w-3.5" />
                            {achievement.date}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                        <p className="mt-2 text-lg font-semibold leading-7 text-blue-600 dark:text-blue-300">
                          {achievement.paperTitle}
                        </p>
                        <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">{achievement.description}</p>
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70 lg:min-w-72">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          Highlights
                        </h4>
                        <div className="space-y-2">
                          {achievement.highlights.map((highlight) => (
                            <div key={highlight} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
