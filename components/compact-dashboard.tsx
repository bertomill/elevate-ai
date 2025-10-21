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
        <div className="mx-auto max-w-6xl space-y-4">
          {/* Featured Event Image */}
          <div className="overflow-hidden rounded-3xl border bg-gradient-to-br from-primary/5 to-accent/5 shadow-sm">
            <div className="grid gap-6 p-6 lg:grid-cols-2">
              {/* Image */}
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border-2 border-primary/20">
                  <Image
                    src="/images/elevate-welcome.png"
                    alt="Elevate Festival 2025 Welcome"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-3 inline-block w-fit rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  Featured Event
                </div>
                <h2 className="mb-3 text-2xl font-bold text-white">
                  Elevate Festival 2025
                </h2>
                <p className="mb-4 text-gray-300">
                  Canada's premier tech and innovation conference brought together 10,000+ leaders, 250+ speakers, 
                  and achieved 51% women and non-binary representation—setting new standards for inclusivity in tech.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                    October 7-9, 2025 • Toronto
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                    Meridian Hall & St. Lawrence Centre
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Topics Section */}
          <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
            <button
              onClick={() => toggleSection("topics")}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-accent/5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Key Topics</h2>
                  <p className="text-sm text-muted-foreground">6 main themes from the festival</p>
                </div>
              </div>
              {expandedSection === "topics" ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            {expandedSection === "topics" && (
              <div className="border-t p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {topics.map((topic) => {
                    const Icon = topic.icon
                    const isExpanded = expandedTopic === topic.id
                    const isHovered = hoveredTopic === topic.id
                    return (
                      <CardContainer key={topic.id} containerClassName="p-0">
                        <CardBody className="h-auto w-full p-0">
                          <CardItem
                            translateZ={isHovered ? 50 : 0}
                            className="relative w-full overflow-hidden rounded-2xl border bg-background"
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
                              className="relative z-10 flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-accent/5"
                            >
                              <CardItem
                                translateZ={isHovered ? 75 : 0}
                                className={cn(
                                  "rounded-xl bg-gradient-to-br p-2 transition-all duration-200",
                                  isHovered ? "scale-110 text-white" : "text-white",
                                  topic.color,
                                )}
                              >
                                <Icon className="h-4 w-4" />
                              </CardItem>
                              <div className="flex-1">
                                <CardItem
                                  translateZ={isHovered ? 60 : 0}
                                  className={cn(
                                    "font-semibold transition-colors duration-200",
                                    isHovered ? "text-white" : "text-foreground",
                                  )}
                                >
                                  {topic.title}
                                </CardItem>
                              </div>
                              {isExpanded ? (
                                <ChevronDown
                                  className={cn(
                                    "h-4 w-4 transition-colors duration-200",
                                    isHovered ? "text-white" : "text-muted-foreground",
                                  )}
                                />
                              ) : (
                                <ChevronRight
                                  className={cn(
                                    "h-4 w-4 transition-colors duration-200",
                                    isHovered ? "text-white" : "text-muted-foreground",
                                  )}
                                />
                              )}
                            </button>

                            {isExpanded && (
                              <div className="relative z-10 border-t bg-accent/5 p-4">
                                <CardItem
                                  translateZ={isHovered ? 40 : 0}
                                  as="p"
                                  className={cn(
                                    "mb-3 text-sm transition-colors duration-200",
                                    isHovered ? "text-gray-200" : "text-muted-foreground",
                                  )}
                                >
                                  {topic.content}
                                </CardItem>
                                <div className="space-y-2">
                                  <p
                                    className={cn(
                                      "text-xs font-semibold uppercase tracking-wide transition-colors duration-200",
                                      isHovered ? "text-gray-300" : "text-muted-foreground",
                                    )}
                                  >
                                    Key Points
                                  </p>
                                  <ul className="space-y-1">
                                    {topic.keyPoints.map((point, idx) => (
                                      <CardItem
                                        key={idx}
                                        translateZ={isHovered ? 30 : 0}
                                        as="li"
                                        className={cn(
                                          "flex items-start gap-2 text-sm transition-colors duration-200",
                                          isHovered && "text-gray-200",
                                        )}
                                      >
                                        <span
                                          className={cn(
                                            "mt-1.5 h-1 w-1 flex-shrink-0 rounded-full transition-colors duration-200",
                                            isHovered ? "bg-white" : "bg-primary",
                                          )}
                                        />
                                        <span>{point}</span>
                                      </CardItem>
                                    ))}
                                  </ul>
                                </div>
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

          {/* Speakers Section */}
          <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
            <button
              onClick={() => toggleSection("speakers")}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-accent/5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-accent/10 p-2">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Featured Speakers</h2>
                  <p className="text-sm text-muted-foreground">Industry leaders and innovators</p>
                </div>
              </div>
              {expandedSection === "speakers" ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            {expandedSection === "speakers" && (
              <div className="border-t p-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {speakers.map((speaker, idx) => (
                    <div key={idx} className="rounded-2xl border bg-background p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                          {speaker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h3 className="font-semibold">{speaker.name}</h3>
                          <p className="text-xs text-muted-foreground">{speaker.role}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{speaker.topic}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Key Insights Section */}
          <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
            <button
              onClick={() => toggleSection("insights")}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-accent/5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-500/10 p-2">
                  <Sparkles className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Key Takeaways</h2>
                  <p className="text-sm text-muted-foreground">Main insights for KPMG</p>
                </div>
              </div>
              {expandedSection === "insights" ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            {expandedSection === "insights" && (
              <div className="border-t p-4">
                <div className="space-y-3">
                  {[
                    {
                      title: "AI Transformation is Accelerating",
                      description: "Organizations must move quickly to adopt AI or risk falling behind competitors",
                    },
                    {
                      title: "Ethics Cannot Be an Afterthought",
                      description: "Building ethical frameworks into AI development from the start is critical",
                    },
                    {
                      title: "Talent is the Biggest Challenge",
                      description:
                        "Companies are competing fiercely for AI and tech talent, requiring new approaches to hiring and retention",
                    },
                    {
                      title: "Collaboration Over Competition",
                      description:
                        "The most successful innovations come from cross-industry partnerships and open collaboration",
                    },
                  ].map((insight, idx) => (
                    <div key={idx} className="rounded-2xl border bg-background p-4">
                      <h3 className="mb-1 font-semibold">{insight.title}</h3>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
