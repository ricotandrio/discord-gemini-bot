import DiscordApp from "./app/discordApp.mjs";
import GeminiApp from "./app/geminiApp.mjs";
import { initConfig } from "./app/initApp.mjs";
import { messageController } from "./controller/messageController.mjs";
import { readyController } from "./controller/readyController.mjs";

initConfig();

export const discordApp = new DiscordApp();
export const geminiApp = new GeminiApp();

discordApp.client.on("ready", readyController);
discordApp.client.on("messageCreate", messageController);