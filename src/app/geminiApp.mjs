import { GoogleGenerativeAI } from "@google/generative-ai";

export default class GeminiApp {
  constructor() {
    this.genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAi.getGenerativeModel({ model: "gemini-1.0-pro"});
  }

  async generateContent(prompts) {
    const result = await this.model.generateContent(prompts);
    const response = await result.response;
    const text = response.text();
    return text; 
  }
}