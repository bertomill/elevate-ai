"use client"

const speakers = [
  { name: "Simu Liu", role: "Actor & Entrepreneur", image: "/professional-headshot.png" },
  { name: "Harley Finkelstein", role: "President, Shopify", image: "/business-executive.png" },
  { name: "Kara Swisher", role: "Tech Journalist", image: "/journalist-portrait.png" },
  { name: "Clay Bavor", role: "CEO, Luma AI", image: "/tech-ceo.png" },
  { name: "Chris Urmson", role: "CEO, Aurora", image: "/autonomous-vehicle-expert.jpg" },
  { name: "Arlene Dickinson", role: "CEO, Venture Communications", image: "/business-leader.jpg" },
]

export function SpeakersSection() {
  return (
    <section className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">Featured Speakers</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Industry leaders and innovators who shared their insights
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="group overflow-hidden rounded-3xl bg-card shadow-sm transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
