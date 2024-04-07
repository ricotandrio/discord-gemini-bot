import { discordApp, geminiApp } from "../main.mjs";

const DISCORD_CHANNELS = ["1226465127285391360"]

export const messageController = async (message) => {

  if (message.author.bot) return;
  if (!DISCORD_CHANNELS.includes(message.channel.id)) return;
  if (!message.mentions.users.has(discordApp.client.user.id)) return;

  const writtenMessage = message.content.split(' ').slice(1).join(' ')

  const sendTypingInterval = setInterval(() => {
    message.channel.sendTyping();
  }, 2000);

  const geminiResponse = await geminiApp.generateContent('In one sentence answer:' + writtenMessage);

  clearInterval(sendTypingInterval);

  message.reply(geminiResponse);
}