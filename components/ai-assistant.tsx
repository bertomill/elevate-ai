"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { X, Send, Sparkles, GripVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import Draggable from "react-draggable"
import ReactMarkdown from "react-markdown"

interface AIAssistantProps {
  open: boolean
  onClose: () => void
}

function LoadingAnimation() {
  const [textIndex, setTextIndex] = useState(0)
  const loadingTexts = ["Ignighting", "Elevating"]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <span className="animate-pulse text-foreground text-sm font-medium">
        {loadingTexts[textIndex]}...
      </span>
      <div className="flex gap-1">
        <div
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  )
}

// Follow-up questions suggestions
const followUpQuestions: { [key: number]: string[] } = {
  0: [
    "Who were the keynote speakers?",
    "What topics were covered?",
    "Tell me about the women in tech track",
  ],
  1: [
    "Tell me more about that",
    "What are the key takeaways?",
    "Who else spoke about this?",
  ],
}

function getFollowUpQuestions(messageIndex: number): string[] {
  return followUpQuestions[messageIndex % Object.keys(followUpQuestions).length]
}

export function AIAssistant({ open, onClose }: AIAssistantProps) {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "Hi! I'm your AI assistant for the Elevate Festival. Ask me anything about the topics, speakers, or key insights from the event.",
          },
        ],
      },
    ],
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const nodeRef = useRef(null)
  const [width, setWidth] = useState(450)
  const [height, setHeight] = useState("85vh")
  const [isResizing, setIsResizing] = useState(false)
  const resizeRef = useRef({ startX: 0, startY: 0, startWidth: 450, startHeight: 0 })

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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const input = inputRef.current?.value.trim()
    if (!input || status === "in_progress") return

    sendMessage({ text: input })
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  const handleFollowUpClick = (question: string) => {
    if (inputRef.current) {
      inputRef.current.value = question
      inputRef.current.focus()
      // Trigger submit
      const form = inputRef.current.closest("form")
      if (form) {
        form.dispatchEvent(new Event("submit", { bubbles: true }))
      }
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsResizing(true)
    resizeRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startWidth: width,
      startHeight: typeof height === "string" ? window.innerHeight * 0.85 : parseInt(height),
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return

      const deltaX = e.clientX - resizeRef.current.startX
      const deltaY = e.clientY - resizeRef.current.startY

      const newWidth = Math.max(300, resizeRef.current.startWidth + deltaX)
      const newHeight = Math.max(300, resizeRef.current.startHeight + deltaY)

      setWidth(newWidth)
      setHeight(`${newHeight}px`)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing])

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-custom animate-in fade-in" onClick={onClose} />

      {/* Draggable Chat Sheet */}
      <Draggable nodeRef={nodeRef} handle=".drag-handle" bounds="parent">
        <div
          ref={nodeRef}
          style={{ width: `${width}px`, height: height, maxHeight: "calc(100dvh - 1rem)" }}
          className="fixed inset-x-0 bottom-0 z-50 flex flex-col overflow-hidden rounded-t-3xl bg-card shadow-2xl animate-in slide-in-from-bottom duration-300 md:inset-x-auto md:right-6 md:w-auto md:rounded-3xl md:bottom-6 md:max-h-[calc(100vh-3rem)]"
        >
          {/* Header - Draggable Handle */}
          <div className="drag-handle flex items-center justify-between border-b bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 border-border/50 px-6 py-4 cursor-move">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 p-2 border border-indigo-500/20">
                <Sparkles className="h-5 w-5 text-indigo-400" />
              </div>
              <div>
                <h2 className="font-bold text-foreground">AI Assistant</h2>
                <p className="text-xs text-muted-foreground">Ask me anything</p>
              </div>
            </div>
            <button onClick={onClose} className="rounded-full p-2 text-foreground/60 transition-colors hover:bg-foreground/10 hover:text-foreground">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={message.id}>
                  <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-3xl px-4 py-3 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                      }`}
                    >
                      {message.parts.map((part, partIndex) => {
                        if (part.type === "text") {
                          return (
                            <div key={partIndex} className="text-pretty text-sm leading-relaxed prose prose-sm max-w-none">
                              <ReactMarkdown
                                components={{
                                  p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                  strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                                  em: ({ node, ...props }) => <em className="italic" {...props} />,
                                  ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-2" {...props} />,
                                  ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-2" {...props} />,
                                  li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                  h1: ({ node, ...props }) => <h1 className="font-bold text-base mb-2" {...props} />,
                                  h2: ({ node, ...props }) => <h2 className="font-bold text-base mb-2" {...props} />,
                                  h3: ({ node, ...props }) => <h3 className="font-bold mb-1" {...props} />,
                                  code: ({ node, ...props }) => (
                                    <code className="bg-black/20 px-1 py-0.5 rounded text-xs" {...props} />
                                  ),
                                }}
                              >
                                {part.text}
                              </ReactMarkdown>
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>
                  </div>

                  {/* Follow-up Questions - Only show for assistant messages */}
                  {message.role === "assistant" && status !== "in_progress" && (
                    <div className="mt-3 ml-4 flex flex-wrap gap-2">
                      {getFollowUpQuestions(index).map((question, qIndex) => (
                        <button
                          key={qIndex}
                          onClick={() => handleFollowUpClick(question)}
                          className="text-xs px-3 py-1.5 rounded-full bg-indigo-500/15 text-indigo-300 hover:bg-indigo-500/25 transition-colors border border-indigo-500/30 hover:border-indigo-500/50"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {status === "in_progress" && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-3xl bg-muted px-4 py-3">
                    <LoadingAnimation />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t p-4 space-y-3">
            {/* Quick Questions - Show when no messages or empty chat */}
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quick Questions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "What was the 2024 theme?",
                    "Key 2025 insights",
                    "Who were the speakers?",
                    "Investment opportunities",
                    "Tell me about women founders",
                    "What's the 2026 vision?",
                  ].map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => {
                        // Set the input value and submit
                        if (inputRef.current) {
                          inputRef.current.value = question
                          handleSubmit({ preventDefault: () => {} } as any)
                        }
                      }}
                      className="text-xs px-3 py-2 rounded-lg bg-indigo-500/15 text-indigo-300 hover:bg-indigo-500/25 transition-all border border-indigo-500/30 hover:border-indigo-500/50 font-medium text-left"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Field */}
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about the festival..."
                className="flex-1 rounded-full border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                disabled={status === "in_progress"}
              />
              <Button
                type="submit"
                size="icon"
                className="h-12 w-12 flex-shrink-0 rounded-full"
                disabled={status === "in_progress"}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </form>

          {/* Resize Handle */}
          <div
            onMouseDown={handleMouseDown}
            className="absolute bottom-0 right-0 w-6 h-6 cursor-nwse-resize flex items-center justify-center hover:bg-primary/20 rounded-tl"
          >
            <GripVertical className="h-4 w-4 text-primary/60" />
          </div>
        </div>
      </Draggable>
    </>
  )
}
