"use client"

import { useState } from "react"
import { CompactDashboard } from "@/components/compact-dashboard"
import { AIAssistant } from "@/components/ai-assistant"
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

export default function ElevateFestivalPage() {
  const [showAI, setShowAI] = useState(false)

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

        <Button
          onClick={() => setShowAI(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>

        {/* AI Assistant Sheet */}
        <AIAssistant open={showAI} onClose={() => setShowAI(false)} />
      </main>
    </BackgroundGradientAnimation>
  )
}
