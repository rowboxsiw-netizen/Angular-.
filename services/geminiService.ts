
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Apple Concierge," a refined, minimalist, and highly intelligent AI assistant inspired by Apple's brand voice. 
Your goal is to help users find the right product or answer questions about Apple ecosystem features.

Guidelines:
1. Tone: Premium, concise, helpful, and sophisticated.
2. Knowledge: You know about iPhones, Macs, iPads, Watches, and Apple Intelligence.
3. Be direct: Apple users value their time. Don't use flowery language.
4. Formatting: Use clear headings or bullet points if explaining multiple features.
5. If you don't know something, suggest they visit an Apple Store or Support page.
6. Keep responses brief but high-impact.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      return response.text || "I'm sorry, I couldn't process that request right now.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "An error occurred while connecting to the concierge. Please try again later.";
    }
  }
}
