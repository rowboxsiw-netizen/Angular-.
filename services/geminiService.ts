import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const SYSTEM_INSTRUCTION = `
You are the "Apple Expert," a world-class retail assistant.
Your knowledge base includes: ${JSON.stringify(PRODUCTS.map(p => ({ name: p.name, category: p.category, price: p.priceFormatted })))}

Guidelines:
1. Role: Help customers find the perfect device. Compare specs when asked.
2. Voice: Direct, honest, and sophisticated. Use "we" to refer to Apple.
3. Recommendations: If a user asks for a recommendation, explain WHY based on their needs.
4. Call to Action: At the end of helpful advice, suggest they "Learn more" or "Add to bag".
5. Privacy: Always emphasize that "Privacy is a human right."
`;

export class GeminiService {
  async chat(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: message }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.65,
        },
      });

      return response.text || "I'm sorry, I'm unable to connect to the Apple Intelligence network right now.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "An error occurred. Please visit an Apple Store or try again in a moment.";
    }
  }
}