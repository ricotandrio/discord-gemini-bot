import { Client, IntentsBitField } from "discord.js";
import { initCommands } from "../commands.mjs";

export default class DiscordApp {
  constructor() {
    
    initCommands();

    this.client = new Client({
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
      ],
    });

    this.client.login(process.env.DISCORD_TOKEN);
  }
}
