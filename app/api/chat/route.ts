// Import the OpenAI provider directly
import { openai } from "@ai-sdk/openai"
import { convertToModelMessages, streamText, type UIMessage } from "ai"
import { festivalNotes } from "@/lib/festival-notes"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  // Format festival notes as context string
  const festivalContext = festivalNotes
    .map((note) => {
      return `
## ${note.title}
**Category:** ${note.category}
**Tags:** ${note.tags.join(", ")}

${note.content}
---`
    })
    .join("\n")

  // Use the OpenAI provider directly with the OPENAI_API_KEY environment variable
  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages: convertToModelMessages(messages),
    abortSignal: req.signal,
    maxOutputTokens: 500,
    system: `You are a helpful AI assistant providing information about the Elevate Festival 2025 - Canada's premier tech and innovation festival held October 7-9, 2025 in Toronto.

You have access to comprehensive festival notes including speaker information, topics, insights, and key takeaways. Use this information to answer questions accurately and provide context.

Guidelines:
- Answer questions based on the festival information provided
- Be specific and cite speakers, topics, or insights when relevant
- If asked about something not in the notes, say so clearly
- Provide actionable insights relevant to tech innovation and entrepreneurship
- Maintain a professional but friendly tone

FESTIVAL NOTES CONTEXT:
${festivalContext}`,
  })

  return result.toUIMessageStreamResponse()
}
