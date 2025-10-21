// Festival Banner Slideshow Component
// Displays a rotating carousel of festival images with smooth animations
// Used as a visual hero section on the main dashboard

"use client"

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export function FestivalBannerSlideshow() {
  // Placeholder images for the festival slideshow
  // These should be replaced with actual festival photos
  const festivalImages = [
    {
      src: "/images/elevate-welcome.png",
      name: "Festival Welcome",
      designation: "Opening Day - Elevate 2025",
    },
    {
      src: "/images/elevate-speaker-stage.png",
      name: "Main Stage",
      designation: "World-Class Speakers",
    },
    {
      src: "/images/elevate-ai-panel.png",
      name: "AI Innovation Panel",
      designation: "Thought Leadership Discussion",
    },
    {
      src: "/placeholder.jpg",
      name: "Networking Lounge",
      designation: "Community Connection",
    },
    {
      src: "/placeholder.jpg",
      name: "Festival Energy",
      designation: "10,000+ Attendees",
    },
  ]

  return (
    <div className="w-full">
      <AnimatedTestimonials testimonials={festivalImages} autoplay={true} />
    </div>
  )
}
