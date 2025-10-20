"use client"

import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 px-6 text-center">
      <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] bg-cover bg-center opacity-5" />

      <div className="relative z-10 max-w-4xl space-y-6">
        <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          KPMG Innovation Report
        </div>

        <h1 className="text-balance text-6xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          Elevate Festival
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2025</span>
        </h1>

        <p className="text-pretty text-xl text-muted-foreground md:text-2xl">
          Key insights and learnings from Canada's premier tech and innovation conference
        </p>

        <div className="flex flex-col items-center gap-4 pt-8 sm:flex-row sm:justify-center">
          <button
            onClick={() => {
              document.getElementById("topics")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Explore Topics
            <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
