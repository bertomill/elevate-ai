"use client"

import { Brain, Rocket, TrendingUp, Users, Zap, Globe } from "lucide-react"

const topics = [
  {
    id: "ai-ethics",
    title: "AI & Ethical Tech",
    description: "Exploring responsible AI development and ethical considerations in technology transformation",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "applied-ai",
    title: "Applied AI",
    description: "Real-world AI applications and practical implementations across industries",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "fintech",
    title: "FinTech Innovation",
    description: "The future of financial technology and digital transformation in banking",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "scaling",
    title: "Scaling Up",
    description: "Strategies for growing startups and scaling technology businesses",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "moonshots",
    title: "Moonshots",
    description: "Ambitious projects and breakthrough innovations shaping the future",
    icon: Globe,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "diversity",
    title: "Women+ in Tech",
    description: "Advancing gender diversity and inclusion in the technology sector",
    icon: Users,
    color: "from-pink-500 to-rose-500",
  },
]

interface TopicsGridProps {
  onTopicClick: (topicId: string) => void
}

export function TopicsGrid({ onTopicClick }: TopicsGridProps) {
  return (
    <section id="topics" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">Key Topics</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Explore the main themes and discussions from the festival
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <button
                key={topic.id}
                onClick={() => onTopicClick(topic.id)}
                className="group relative overflow-hidden rounded-3xl bg-card p-8 text-left shadow-sm transition-all hover:scale-105 hover:shadow-xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${topic.color} opacity-0 transition-opacity group-hover:opacity-10`}
                />

                <div className="relative space-y-4">
                  <div className={`inline-flex rounded-2xl bg-gradient-to-br ${topic.color} p-3 text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-bold">{topic.title}</h3>
                  <p className="text-pretty text-muted-foreground">{topic.description}</p>

                  <div className="pt-2 text-sm font-medium text-primary">Learn more →</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
