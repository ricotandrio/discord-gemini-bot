import DiscordApp from "./apps/discordApp.mjs";
import GeminiApp from "./apps/geminiApp.mjs";
import { initConfig } from "./apps/initApp.mjs";
import { interactionController } from "./controllers/interactionController.mjs";
import { messageController } from "./controllers/messageController.mjs";
import { readyController } from "./controllers/readyController.mjs";

initConfig();

export const discordApp = new DiscordApp();
export const geminiApp = new GeminiApp("gemini-1.0-pro");

discordApp.client.on("ready", readyController);
discordApp.client.on("messageCreate", messageController);
discordApp.client.on("interactionCreate", interactionController);
