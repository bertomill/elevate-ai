"use client"

import { useState } from "react"
import { CompactDashboard } from "@/components/compact-dashboard"
import { AIAssistant } from "@/components/ai-assistant"
import { TimelineMode } from "@/components/timeline-mode"
import { MessageCircle, Clock } from 'lucide-react'
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export default function ElevateFestivalPage() {
  const [showAI, setShowAI] = useState(false)
  const [showTimeline, setShowTimeline] = useState(false)

  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(10, 10, 20)"
      gradientBackgroundEnd="rgb(0, 0, 0)"
      firstColor="99, 102, 241"
      secondColor="6, 182, 212"
      thirdColor="244, 114, 182"
      fourthColor="139, 92, 246"
      fifthColor="34, 211, 238"
      pointerColor="168, 85, 247"
      size="90%"
      blendingValue="hard-light"
      containerClassName="fixed inset-0"
      interactive={true}
    >
      <main className="relative h-screen overflow-hidden">
        <CompactDashboard />

        {/* Timeline Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="rounded-full bg-black px-0 py-0"
            onClick={() => setShowTimeline(true)}
            duration={1}
          >
            <div className="flex items-center justify-center h-14 w-14">
              <Clock className="h-6 w-6 text-white" />
            </div>
          </HoverBorderGradient>
        </div>

        {/* Animated Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <HoverBorderGradient
            containerClassName="rounded-full"
            className="rounded-full bg-black px-0 py-0"
            onClick={() => setShowAI(true)}
            duration={1}
          >
            <div className="flex items-center justify-center h-14 w-14">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
          </HoverBorderGradient>
        </div>

        {/* Timeline Mode Modal */}
        {showTimeline && <TimelineMode onClose={() => setShowTimeline(false)} />}

        {/* AI Assistant Sheet */}
        <AIAssistant open={showAI} onClose={() => setShowAI(false)} />
      </main>
    </BackgroundGradientAnimation>
  )
}
