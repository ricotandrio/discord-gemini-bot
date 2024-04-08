import { GoogleGenerativeAI } from "@google/generative-ai";

export default class GeminiApp {
  constructor(model) {
    this.genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    this.model = this.genAi.getGenerativeModel({ model: model});
  }

  async generateContent(prompts) {
    const result = await this.model.generateContent(prompts);
    const response = await result.response;
    const text = response.text();
    return text; 
  }
}