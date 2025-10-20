"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface SlidesModeProps {
  onExit: () => void
}

const slides = [
  {
    id: 1,
    title: "Canada's Innovation Moment",
    subtitle: "The Ecosystem is Ready to Lead",
    content: [
      "10,000+ attendees, 250+ speakers, 51% women/non-binary representation",
      "Canadian founders thriving amid global shifts (Arlene Dickinson)",
      "Shopify, Aurora, Cohere leading global innovation from Canada",
      "SR&ED reform needed, but ecosystem maturing beyond early-stage",
      '"Canada\'s time is now" - from Amber Mac to Lisa Zarzeczny to Simu Liu',
    ],
    image: "/images/elevate-welcome.png",
    imageAlt: "KPMG team at Elevate Festival welcome sign",
  },
  {
    id: 2,
    title: "Agentic AI is Here - Now What?",
    subtitle: "From Hype to Practical Implementation",
    content: [
      "Agentic commerce: Single checkout across multiple stores in chat apps",
      "LLM plateau reached - stop waiting, start implementing with current tech",
      "Start small: One specific outcome, trusted partners, incremental wins",
      "Career evolution: Swiss Army Knife → Hybrid → Spiky specialization",
      "AI agents are the next evolution (after graphics, 3D, internet, mobile)",
    ],
    image: "/images/elevate-ai-panel.png",
    imageAlt: "AI panel discussion at Elevate Festival featuring Google and KPMG",
  },
  {
    id: 3,
    title: "Trust is the Foundation",
    subtitle: "AI as Enabler, Not the Answer",
    content: [
      "Trust is the deciding factor in purchasing - but we don't fully trust AI yet",
      "Build trust: Clear AI communication, never compromise on data security, unified experiences",
      "\"Tech doesn't matter more than solving your client's problems\" - Focus on outcomes",
      "Long-term partnerships built on solving material goals, not technology features",
      "KPMG opportunity: Help clients build trust frameworks for AI adoption",
    ],
    image: "/images/elevate-speaker-stage.png",
    imageAlt: "Speaker engaging with audience at Elevate Festival main stage",
  },
]

export function SlidesMode({ onExit }: SlidesModeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const slide = slides[currentSlide]

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-black">
      {/* Decorative gradient shapes */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] opacity-20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary to-accent blur-3xl" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] opacity-20">
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-pink to-primary blur-3xl" />
      </div>

      {/* Top gradient bar */}
      <div className="absolute inset-x-0 top-0 z-20 h-1 gradient-elevate" />

      {/* Header with Exit Button */}
      <div className="absolute right-6 top-6 z-10">
        <button
          onClick={onExit}
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          <X className="h-4 w-4" />
          <span className="text-sm font-medium">Exit Slides</span>
        </button>
      </div>

      {/* Main Slide Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center p-12">
        <div className="w-full max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Side - Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-2 inline-block w-fit rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                  Slide {currentSlide + 1} of {slides.length}
                </div>
                <h1 className="mb-2 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-4xl font-bold tracking-tight text-transparent lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="mb-8 text-xl text-gray-300">{slide.subtitle}</p>

                <div className="space-y-4">
                  {slide.content.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <p className="text-lg leading-relaxed text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex items-center justify-center">
                {slide.image ? (
                  <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border-2 border-primary/20">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.imageAlt || "Slide image"}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-square w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5 p-8 text-center backdrop-blur-sm">
                    <ImageIcon className="mb-4 h-16 w-16 text-white/40" />
                    <p className="mb-2 font-medium text-white/80">Image Placeholder</p>
                    <p className="text-sm text-white/60">{slide.imagePrompt}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-10 flex items-center justify-between px-12 pb-8">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={cn(
            "flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all",
            currentSlide === 0
              ? "cursor-not-allowed bg-white/5 text-white/30"
              : "bg-gradient-to-r from-primary to-accent text-white hover:opacity-90",
          )}
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Previous</span>
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "h-2 rounded-full transition-all",
                idx === currentSlide
                  ? "w-8 bg-gradient-to-r from-primary to-accent"
                  : "w-2 bg-white/30 hover:bg-white/50",
              )}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={cn(
            "flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all",
            currentSlide === slides.length - 1
              ? "cursor-not-allowed bg-white/5 text-white/30"
              : "bg-gradient-to-r from-primary to-accent text-white hover:opacity-90",
          )}
        >
          <span>Next</span>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
