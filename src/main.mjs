import DiscordApp from "./app/discordApp.mjs";
import GeminiApp from "./app/geminiApp.mjs";
import { initConfig } from "./app/initApp.mjs";
import { messageController } from "./controller/messageController.mjs";

initConfig();

export const discordApp = new DiscordApp();
export const geminiApp = new GeminiApp();

discordApp.client.on("ready", () => {
  console.log("The bot is running!");
});

discordApp.client.on("messageCreate", messageController);