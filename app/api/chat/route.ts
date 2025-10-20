import { convertToModelMessages, streamText, tool, type UIMessage } from "ai"
import { z } from "zod"
import {
  searchNotesByCategory,
  searchNotesByTag,
  searchNotesByKeyword,
  getAvailableMetadata,
} from "@/lib/festival-notes"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const tools = {
    getAvailableTopics: tool({
      description:
        "Get a list of all available tags, topics, and speakers in the festival notes. Use this first to understand what information is available.",
      inputSchema: z.object({}),
      execute: async () => {
        return getAvailableMetadata()
      },
    }),

    searchByCategory: tool({
      description: "Search festival notes by category (topic, speaker, insight, or takeaway)",
      inputSchema: z.object({
        category: z.enum(["topic", "speaker", "insight", "takeaway"]).describe("The category to search in"),
      }),
      execute: async ({ category }) => {
        const results = searchNotesByCategory(category)
        return {
          results: results.map((note) => ({
            title: note.title,
            content: note.content,
            tags: note.tags,
          })),
        }
      },
    }),

    searchByTag: tool({
      description: "Search festival notes by tag (e.g., AI, fintech, leadership, etc.)",
      inputSchema: z.object({
        tag: z.string().describe("The tag to search for"),
      }),
      execute: async ({ tag }) => {
        const results = searchNotesByTag(tag)
        return {
          results: results.map((note) => ({
            title: note.title,
            content: note.content,
            tags: note.tags,
          })),
        }
      },
    }),

    searchByKeyword: tool({
      description: "Search festival notes by keyword in title or content",
      inputSchema: z.object({
        keyword: z.string().describe("The keyword to search for"),
      }),
      execute: async ({ keyword }) => {
        const results = searchNotesByKeyword(keyword)
        return {
          results: results.map((note) => ({
            title: note.title,
            content: note.content,
            tags: note.tags,
          })),
        }
      },
    }),
  }

  const result = streamText({
    model: "openai/gpt-4o-mini",
    messages: convertToModelMessages(messages),
    abortSignal: req.signal,
    maxOutputTokens: 500,
    system: `You are a helpful assistant providing information about the Elevate Festival based on specific notes taken by a KPMG senior consultant.

When answering questions:
1. Use the search tools to find relevant information from the festival notes
2. Always search before answering to ensure accuracy
3. Cite specific insights, speakers, or topics from the notes when possible
4. If information isn't in the notes, say so clearly
5. Provide actionable insights relevant to a consulting context

The festival covered: AI & ethical tech, applied AI, fintech, scaling up, moonshots, and women+ in tech.
Key speakers included: Simu Liu, Harley Finkelstein, Kara Swisher, Clay Bavor, Chris Urmson, and Arlene Dickinson.`,
    tools,
  })

  return result.toUIMessageStreamResponse()
}
