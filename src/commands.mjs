import { REST, Routes } from "discord.js";
import { displayLog } from "./controllers/logController.mjs";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "beep",
    description: "Replies with Boop!",
  },
  {
    name: "gemini_info",
    description: "Replies with information about gemini command.",
  },
  {
    name: "clear",
    description: "Clears the chat.",
    options: [
      {
        name: "amount",
        description: "The number of messages to delete.",
        type: 4,
        required: true,
      },
    ],
  }
];

export async function initCommands() {
  const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

  try {

    await rest.put(
      Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID),
      { body: commands },
    );

    displayLog("Successfully registered application (/) commands.");
  } catch (error) {

    displayLog("Failed to register application (/) commands.");
  }
}