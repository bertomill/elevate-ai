"use client"

import { Lightbulb, Target, TrendingUp, Users } from "lucide-react"

const insights = [
  {
    icon: Lightbulb,
    title: "AI Transformation",
    description: "Organizations must balance innovation with ethical considerations when implementing AI solutions",
  },
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Successful scaling requires clear vision, strong culture, and disciplined execution",
  },
  {
    icon: TrendingUp,
    title: "Market Opportunities",
    description: "Canadian tech ecosystem is positioned for significant growth in fintech and AI sectors",
  },
  {
    icon: Users,
    title: "Diversity Imperative",
    description: "Gender diversity drives innovation and better business outcomes in technology companies",
  },
]

export function KeyInsights() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">Key Insights</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">Main takeaways from the festival</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {insights.map((insight) => {
            const Icon = insight.icon
            return (
              <div
                key={insight.title}
                className="flex gap-6 rounded-3xl bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="rounded-2xl bg-primary/10 p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{insight.title}</h3>
                  <p className="text-pretty text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
