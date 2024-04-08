import { discordApp, geminiApp } from "../main.mjs";
import { displayLog } from "./logController.mjs";

export const messageController = async (message) => {
  const DISCORD_CHANNELS = process.env.DISCORD_CHANNEL_ID

  if (message.author.bot) return;
  if (DISCORD_CHANNELS !== message.channel.id) return;
  if (!message.mentions.users.has(discordApp.client.user.id)) return;

  const writtenMessage = message.content.split(" ").slice(1).join(" ")
  
  const sendTypingInterval = setInterval(() => { message.channel.sendTyping() }, 2000);

  displayLog(`${message.author.username}#${message.author.discriminator} asked: ${writtenMessage}`);

  const geminiResponse = await geminiApp.generateContent("In one sentence, answer:" + writtenMessage);

  clearInterval(sendTypingInterval);

  message.reply(geminiResponse);
}