// Timeline Mode Component - Displays the evolution and key themes of Elevate Festival across years
// Shows what happened in 2024, the current storyline in 2025, and the vision for 2026

"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TimelineEvent {
  year: number
  title: string
  theme: string
  keyHighlights: string[]
  storyline: string
  color: string
  impact: string
}

const timelineEvents: TimelineEvent[] = [
  {
    year: 2024,
    title: "Elevate Festival 2024",
    theme: "Diversity & Opportunity",
    keyHighlights: [
      "9,500+ attendees from diverse backgrounds",
      "47% visible minorities, 50%+ women speakers",
      "$750,000+ distributed in investments and grants",
      "First venture fund for Indigenous entrepreneurs (Raven Capital)",
      "Women+ Program winners: Nunafab ($200K), Infinite Harvest ($25K)",
    ],
    storyline:
      "2024 was about breaking barriers and proving that diversity drives innovation. With record-breaking attendance and representation, Elevate demonstrated that inclusive tech events attract world-class talent and spark real investment. The festival became a launchpad for underrepresented founders across Canada.",
    color: "from-blue-500/20 to-cyan-500/20",
    impact:
      "Established Elevate as Canada's most inclusive tech festival and proved the market for diverse-led innovation",
  },
  {
    year: 2025,
    title: "Elevate Festival 2025",
    theme: "AI Ethics & Human Impact",
    keyHighlights: [
      "10,000+ global tech leaders attended",
      "51% women and non-binary representation (surpassing 2024)",
      "Main focus: AI transformation with ethical frameworks",
      "Scale-up track scaled to Main Stage due to demand",
      "Hundreds of thousands in startup investments facilitated",
    ],
    storyline:
      "2025 is about mastering the AI transformation while keeping humanity at the center. With AI becoming as transformative as the industrial revolution, the narrative shifted from 'if we adopt AI' to 'how do we adopt AI responsibly?' The festival champions ethical AI development, human-centered innovation, and the idea that AI amplifies human potential rather than replacing it.",
    color: "from-purple-500/20 to-pink-500/20",
    impact:
      "Positioning Canadian tech leaders as thought leaders in responsible AI adoption and human-centered innovation",
  },
  {
    year: 2026,
    title: "Elevate Festival 2026",
    theme: "Global Canadian Innovation",
    keyHighlights: [
      "Building on 2025's ethical AI foundation",
      "Scale-up acceleration programs expanding internationally",
      "Mentorship connecting Canadian founders with global markets",
      "Cross-industry partnerships driving breakthrough innovations",
      "Focus on sustainable tech and climate innovation",
    ],
    storyline:
      "2026 will be about scaling Canadian innovation globally while maintaining the ethical and inclusive principles established in 2024-2025. The vision is for Elevate to be a launchpad not just for Canadian companies, but for Canadian-led solutions to global challenges. With AI frameworks in place and diverse talent activated, Canadian startups will be positioned to compete on the world stage.",
    color: "from-green-500/20 to-emerald-500/20",
    impact:
      "Transform Canada from a country of branch offices to a global innovation powerhouse with locally-grown unicorns",
  },
]

export function TimelineMode({ onClose }: { onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(1) // Start at 2025

  // Navigation handlers
  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  const handleNext = () => {
    if (currentIndex < timelineEvents.length - 1) setCurrentIndex(currentIndex + 1)
  }

  const currentEvent = timelineEvents[currentIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl rounded-3xl bg-gradient-to-br from-background via-background to-background/90 shadow-2xl border border-border/50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 rounded-full bg-destructive/10 p-2 hover:bg-destructive/20 transition-colors"
        >
          <X className="h-5 w-5 text-destructive" />
        </button>

        {/* Header */}
        <div className={`bg-gradient-to-r ${currentEvent.color} border-b border-border/50 p-8 pt-8`}>
          <div className="mb-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Festival Evolution
            </span>
            <h1 className="mt-2 text-4xl font-bold">{currentEvent.title}</h1>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <div className="inline-block rounded-full bg-background/80 px-4 py-2">
              <span className="font-semibold text-lg">{currentEvent.year}</span>
            </div>
            <div className="h-px w-8 bg-border hidden md:block" />
            <p className="text-lg font-semibold text-muted-foreground">{currentEvent.theme}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8 max-h-[calc(100vh-300px)] overflow-y-auto">
          {/* Storyline */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
              The Story
            </h2>
            <p className="text-lg leading-relaxed text-foreground">{currentEvent.storyline}</p>
          </div>

          {/* Key Highlights */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Key Highlights
            </h2>
            <ul className="space-y-2">
              {currentEvent.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="rounded-xl bg-primary/5 border border-primary/20 p-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Impact</h3>
            <p className="text-foreground">{currentEvent.impact}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-border/50 bg-background/50 px-8 py-6 flex items-center justify-between">
          {/* Year Indicators */}
          <div className="flex gap-2 flex-1">
            {timelineEvents.map((event, idx) => (
              <button
                key={event.year}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all ${
                  idx === currentIndex
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {event.year}
              </button>
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex gap-2 ml-4">
            <Button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex === timelineEvents.length - 1}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
