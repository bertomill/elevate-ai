"use client"

import { useState } from "react"
import {
  Brain,
  Rocket,
  TrendingUp,
  Users,
  Zap,
  Globe,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Presentation,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SlidesMode } from "./slides-mode"
import { SparklesCore } from "./ui/sparkles"
import { AnimatePresence, motion } from "framer-motion"
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect"
import { CardContainer, CardBody, CardItem } from "./ui/3d-card"
import Image from "next/image"

const topics = [
  {
    id: "ai-ethics",
    title: "AI & Ethical Tech",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    content:
      "Exploring responsible AI development and ethical considerations in technology transformation. Key discussions included AI governance frameworks, bias mitigation strategies, and the importance of human-centered AI design.",
    keyPoints: [
      "Ethical AI frameworks are essential for responsible development",
      "Transparency and explainability in AI systems",
      "Balancing innovation with societal impact",
    ],
  },
  {
    id: "applied-ai",
    title: "Applied AI",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    content:
      "Real-world AI applications and practical implementations across industries. From healthcare to finance, AI is transforming how businesses operate and deliver value.",
    keyPoints: [
      "AI-powered automation driving efficiency gains",
      "Machine learning in predictive analytics",
      "Natural language processing revolutionizing customer service",
    ],
  },
  {
    id: "fintech",
    title: "FinTech Innovation",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    content:
      "The future of financial technology and digital transformation in banking. Discussions covered blockchain, digital currencies, and the evolution of payment systems.",
    keyPoints: [
      "Decentralized finance (DeFi) reshaping traditional banking",
      "Digital wallets and contactless payments",
      "Regulatory challenges in fintech innovation",
    ],
  },
  {
    id: "scaling",
    title: "Scaling Up",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
    content:
      "Strategies for growing startups and scaling technology businesses. Learn from founders who successfully navigated hypergrowth and built sustainable companies.",
    keyPoints: [
      "Building scalable infrastructure from day one",
      "Hiring and culture in high-growth environments",
      "Fundraising strategies for different stages",
    ],
  },
  {
    id: "moonshots",
    title: "Moonshots",
    icon: Globe,
    color: "from-indigo-500 to-blue-500",
    content:
      "Ambitious projects and breakthrough innovations shaping the future. From space tech to quantum computing, explore the frontiers of human innovation.",
    keyPoints: [
      "Quantum computing breakthroughs",
      "Space technology and commercial space travel",
      "Climate tech solutions at scale",
    ],
  },
  {
    id: "diversity",
    title: "Women+ in Tech",
    icon: Users,
    color: "from-pink-500 to-rose-500",
    content:
      "Advancing gender diversity and inclusion in the technology sector. Creating pathways for underrepresented groups and building inclusive tech cultures.",
    keyPoints: [
      "Mentorship programs driving representation",
      "Addressing systemic barriers in tech",
      "Building inclusive product teams",
    ],
  },
]

const speakers = [
  { name: "Simu Liu", role: "Actor & Entrepreneur", topic: "Innovation in Entertainment" },
  { name: "Harley Finkelstein", role: "President, Shopify", topic: "E-commerce Evolution" },
  { name: "Kara Swisher", role: "Tech Journalist", topic: "Future of Tech Media" },
  { name: "Chris Urmson", role: "CEO, Aurora", topic: "Autonomous Vehicles" },
]

export function CompactDashboard() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)
  const [expandedSection, setExpandedSection] = useState<"topics" | "speakers" | "insights" | null>("topics")
  const [isSlidesMode, setIsSlidesMode] = useState(false)
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(expandedTopic === topicId ? null : topicId)
  }

  const toggleSection = (section: "topics" | "speakers" | "insights") => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  if (isSlidesMode) {
    return <SlidesMode onExit={() => setIsSlidesMode(false)} />
  }

  return (
    <div className="relative flex h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 opacity-30">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-primary to-accent blur-3xl" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 opacity-20">
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-pink to-primary blur-3xl" />
      </div>

      <header className="relative border-b bg-black px-6 py-6">
        <div className="absolute inset-x-0 top-0 h-1 gradient-elevate" />
        <div className="flex items-center justify-between">
          <div className="relative">
            <div className="mb-1 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
              Ignition at Elevate
            </div>
            <h1 className="relative z-20 text-3xl font-bold tracking-tight text-white">
              Elevate Festival{" "}
              <span className="bg-gradient-to-r from-primary via-pink to-accent bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            <p className="relative z-20 text-sm text-gray-400">Canada's premier tech and innovation conference</p>

            <div className="relative mt-2 h-20 w-full">
              {/* Gradient lines */}
              <div className="absolute inset-x-0 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
              <div className="absolute inset-x-0 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="absolute inset-x-20 top-0 h-[3px] w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent blur-sm" />
              <div className="absolute inset-x-20 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent" />

              {/* Sparkles Core */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={800}
                className="h-full w-full"
                particleColor="#FFFFFF"
              />

              {/* Radial gradient mask */}
              <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(300px_150px_at_top,transparent_20%,white)]" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSlidesMode(true)}
              className="flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-accent transition-colors hover:bg-accent/30"
            >
              <Presentation className="h-4 w-4" />
              <span className="text-sm font-medium">Slides Mode</span>
            </button>
            <div className="flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Q&A Available</span>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left Column - Featured Event Image */}
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl border-2 border-primary/20">
                <Image
                  src="/images/banner.png"
                  alt="Elevate Festival 2025 Banner"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Condensed Cards */}
            <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
              {/* Topics Section - Compact */}
              <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
                <button
                  onClick={() => toggleSection("topics")}
                  className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-accent/5"
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Brain className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold">Key Topics</h2>
                      <p className="text-xs text-muted-foreground">6 main themes</p>
                    </div>
                  </div>
                  {expandedSection === "topics" ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>

                {expandedSection === "topics" && (
                  <div className="border-t p-3">
                    <div className="grid gap-2 sm:grid-cols-2">
                      {topics.map((topic) => {
                        const Icon = topic.icon
                        const isExpanded = expandedTopic === topic.id
                        const isHovered = hoveredTopic === topic.id
                        return (
                          <CardContainer key={topic.id} containerClassName="p-0">
                            <CardBody className="h-auto w-full p-0">
                              <CardItem
                                translateZ={isHovered ? 50 : 0}
                                className="relative w-full overflow-hidden rounded-lg border bg-background"
                                onMouseEnter={() => setHoveredTopic(topic.id)}
                                onMouseLeave={() => setHoveredTopic(null)}
                              >
                                <AnimatePresence>
                                  {isHovered && (
                                    <motion.div
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      className="absolute inset-0 z-0"
                                    >
                                      <CanvasRevealEffect
                                        animationSpeed={3}
                                        containerClassName={cn(
                                          "bg-black",
                                          topic.id === "ai-ethics" && "bg-blue-900",
                                          topic.id === "applied-ai" && "bg-purple-900",
                                          topic.id === "fintech" && "bg-emerald-900",
                                          topic.id === "scaling" && "bg-orange-900",
                                          topic.id === "moonshots" && "bg-indigo-900",
                                          topic.id === "diversity" && "bg-pink-900",
                                        )}
                                        colors={
                                          topic.id === "ai-ethics"
                                            ? [
                                                [59, 130, 246],
                                                [6, 182, 212],
                                              ]
                                            : topic.id === "applied-ai"
                                              ? [
                                                  [168, 85, 247],
                                                  [236, 72, 153],
                                                ]
                                              : topic.id === "fintech"
                                                ? [
                                                    [34, 197, 94],
                                                    [16, 185, 129],
                                                  ]
                                                : topic.id === "scaling"
                                                  ? [
                                                      [249, 115, 22],
                                                      [239, 68, 68],
                                                    ]
                                                  : topic.id === "moonshots"
                                                    ? [
                                                        [99, 102, 241],
                                                        [59, 130, 246],
                                                      ]
                                                    : [
                                                        [236, 72, 153],
                                                        [244, 63, 94],
                                                      ]
                                        }
                                        dotSize={2}
                                      />
                                    </motion.div>
                                  )}
                                </AnimatePresence>

                                <button
                                  onClick={() => toggleTopic(topic.id)}
                                  className="relative z-10 flex w-full items-center gap-2 p-3 text-left transition-colors hover:bg-accent/5"
                                >
                                  <CardItem
                                    translateZ={isHovered ? 75 : 0}
                                    className={cn(
                                      "rounded-lg bg-gradient-to-br p-1.5 transition-all duration-200",
                                      isHovered ? "scale-110 text-white" : "text-white",
                                      topic.color,
                                    )}
                                  >
                                    <Icon className="h-3 w-3" />
                                  </CardItem>
                                  <div className="flex-1 min-w-0">
                                    <CardItem
                                      translateZ={isHovered ? 60 : 0}
                                      className={cn(
                                        "font-semibold text-sm transition-colors duration-200 truncate",
                                        isHovered ? "text-white" : "text-foreground",
                                      )}
                                    >
                                      {topic.title}
                                    </CardItem>
                                  </div>
                                </button>

                                {isExpanded && (
                                  <div className="relative z-10 border-t bg-accent/5 p-2">
                                    <CardItem
                                      translateZ={isHovered ? 40 : 0}
                                      as="p"
                                      className={cn(
                                        "mb-2 text-xs transition-colors duration-200",
                                        isHovered ? "text-gray-200" : "text-muted-foreground",
                                      )}
                                    >
                                      {topic.content}
                                    </CardItem>
                                  </div>
                                )}
                              </CardItem>
                            </CardBody>
                          </CardContainer>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Speakers Section - Compact */}
              <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
                <button
                  onClick={() => toggleSection("speakers")}
                  className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-accent/5"
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-accent/10 p-2">
                      <Users className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold">Featured Speakers</h2>
                      <p className="text-xs text-muted-foreground">Industry leaders</p>
                    </div>
                  </div>
                  {expandedSection === "speakers" ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>

                {expandedSection === "speakers" && (
                  <div className="border-t p-3">
                    <div className="grid gap-2 sm:grid-cols-2">
                      {speakers.map((speaker, idx) => (
                        <div key={idx} className="rounded-lg border bg-background p-2.5 text-sm">
                          <div className="mb-1.5 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
                              {speaker.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <h3 className="font-semibold text-xs">{speaker.name}</h3>
                              <p className="text-xs text-muted-foreground">{speaker.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Key Insights Section - Compact */}
              <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
                <button
                  onClick={() => toggleSection("insights")}
                  className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-accent/5"
                >
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500/10 p-2">
                      <Sparkles className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold">Key Takeaways</h2>
                      <p className="text-xs text-muted-foreground">Main insights</p>
                    </div>
                  </div>
                  {expandedSection === "insights" ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>

                {expandedSection === "insights" && (
                  <div className="border-t p-3">
                    <div className="space-y-2">
                      {[
                        {
                          title: "AI Transformation",
                          description: "Move quickly to adopt AI or risk falling behind",
                        },
                        {
                          title: "Ethics Critical",
                          description: "Build ethical frameworks into AI development",
                        },
                        {
                          title: "Talent Competition",
                          description: "Companies competing fiercely for AI talent",
                        },
                        {
                          title: "Collaboration",
                          description: "Success comes from cross-industry partnerships",
                        },
                      ].map((insight, idx) => (
                        <div key={idx} className="rounded-lg border bg-background p-2.5 text-sm">
                          <h3 className="mb-0.5 font-semibold text-xs">{insight.title}</h3>
                          <p className="text-xs text-muted-foreground">{insight.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
