"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { X, Send, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

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
      <span className="animate-pulse bg-gradient-to-r from-primary to-accent bg-clip-text text-sm font-medium text-transparent">
        {loadingTexts[textIndex]}...
      </span>
      <div className="flex gap-1">
        <div
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  )
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

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-custom animate-in fade-in" onClick={onClose} />

      {/* Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex h-[85vh] flex-col overflow-hidden rounded-t-3xl bg-card shadow-2xl animate-in slide-in-from-bottom duration-300 md:inset-x-auto md:right-6 md:w-[450px]">
        {/* Header */}
        <div className="flex items-center justify-between border-b bg-gradient-to-r from-primary to-accent px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/20 p-2">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-white">AI Assistant</h2>
              <p className="text-xs text-white/80">Ask me anything</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-white transition-colors hover:bg-white/20">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-3xl px-4 py-3 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return (
                        <p key={index} className="text-pretty text-sm leading-relaxed">
                          {part.text}
                        </p>
                      )
                    }
                    return null
                  })}
                </div>
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
        <form onSubmit={handleSubmit} className="border-t p-4">
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
      </div>
    </>
  )
}
