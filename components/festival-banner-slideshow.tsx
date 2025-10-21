// Festival Banner Slideshow Component
// Displays a rotating carousel of festival images with smooth animations
// Used as a visual hero section on the main dashboard

"use client"

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export function FestivalBannerSlideshow() {
  // Festival images from the Elevate Festival 2025
  // Showcasing key moments from the event
  const festivalImages = [
    {
      src: "/images/elevate-1.png",
      name: "Main Hall",
      designation: "10,000+ attendees gathering",
    },
    {
      src: "/images/elevate-2.png",
      name: "Speaker Interview",
      designation: "Thought Leadership in Action",
    },
    {
      src: "/images/elevate-3.png",
      name: "Press Conference",
      designation: "Elevate Festival 2025 Launch",
    },
    {
      src: "/images/elevate-4.png",
      name: "Startup Stage",
      designation: "Emerging Founder Pitches",
    },
  ]

  return (
    <div className="w-full">
      <AnimatedTestimonials testimonials={festivalImages} autoplay={true} />
    </div>
  )
}
