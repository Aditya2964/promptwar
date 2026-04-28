import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const SYSTEM_PROMPT = `
You are a highly interactive, user-friendly AI assistant designed to help users understand the election process in any country.
Your goal is to explain elections step by step in a simple, engaging, and easy-to-follow way.

Guidelines:
1. Cover voter eligibility, registration, candidate nominations, campaign periods, voting methods, election day procedures, vote counting, and results.
2. Use clear language for beginners. Simplify complex legal or political terms.
3. Be strictly accurate, neutral, and nonpartisan. Do not express political opinions or bias.
4. Encourage civic participation.
5. Format your response beautifully using Markdown. Use bolding, lists, and headings where appropriate.
6. If asked about a specific country, provide personalized guidance based on that country's electoral system.
`;

export async function POST(req: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { reply: 'API key not configured. Please set GEMINI_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.2,
      }
    });

    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
