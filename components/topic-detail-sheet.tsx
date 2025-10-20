"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

const topicDetails: Record<string, { title: string; content: string[] }> = {
  "ai-ethics": {
    title: "AI & Ethical Tech Transformation",
    content: [
      "The festival emphasized the critical importance of building AI systems with ethical considerations at their core.",
      "Key discussions centered around transparency, accountability, and fairness in AI decision-making processes.",
      "Speakers highlighted the need for diverse teams in AI development to prevent bias and ensure inclusive outcomes.",
      "Regulatory frameworks and industry standards are evolving to address ethical concerns in AI deployment.",
    ],
  },
  "applied-ai": {
    title: "Applied AI in Practice",
    content: [
      "Real-world AI implementations are transforming industries from healthcare to finance.",
      "Success stories showcased practical applications that deliver measurable business value.",
      "The importance of data quality and infrastructure in successful AI deployments was emphasized.",
      "Organizations are moving from experimentation to production-scale AI systems.",
    ],
  },
  fintech: {
    title: "FinTech Innovation",
    content: [
      "Digital transformation in financial services is accelerating, driven by consumer expectations.",
      "Embedded finance and banking-as-a-service are creating new business models.",
      "Regulatory technology (RegTech) is helping firms navigate complex compliance requirements.",
      "Canadian fintech companies are gaining global recognition and investment.",
    ],
  },
  scaling: {
    title: "Scaling Up Strategies",
    content: [
      "Successful scaling requires balancing growth with operational excellence.",
      "Building strong company culture becomes more challenging but more critical at scale.",
      "Access to capital and talent are key constraints for Canadian tech companies.",
      "Strategic partnerships and market expansion strategies were key discussion topics.",
    ],
  },
  moonshots: {
    title: "Moonshot Projects",
    content: [
      "Ambitious projects in quantum computing, space technology, and biotechnology were showcased.",
      "The importance of long-term thinking and patient capital in breakthrough innovation.",
      "Canadian researchers and entrepreneurs are pursuing world-changing innovations.",
      "Collaboration between academia, industry, and government is essential for moonshot success.",
    ],
  },
  diversity: {
    title: "Women+ in Tech",
    content: [
      "Gender diversity in tech leadership correlates with better business performance.",
      "Systemic barriers still prevent many women from entering and advancing in tech careers.",
      "Mentorship, sponsorship, and inclusive workplace cultures are critical for retention.",
      "The festival featured unprecedented gender diversity in its speaker lineup and programming.",
    ],
  },
}

interface TopicDetailSheetProps {
  topic: string | null
  open: boolean
  onClose: () => void
}

export function TopicDetailSheet({ topic, open, onClose }: TopicDetailSheetProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  if (!open || !topic) return null

  const details = topicDetails[topic]
  if (!details) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-custom animate-in fade-in" onClick={onClose} />

      {/* Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-hidden rounded-t-3xl bg-card shadow-2xl animate-in slide-in-from-bottom duration-300">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-card/95 px-6 py-4 backdrop-blur-sm">
          <h2 className="text-2xl font-bold">{details.title}</h2>
          <button onClick={onClose} className="rounded-full p-2 transition-colors hover:bg-muted">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="overflow-y-auto p-6" style={{ maxHeight: "calc(85vh - 73px)" }}>
          <div className="space-y-6">
            {details.content.map((paragraph, index) => (
              <p key={index} className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
