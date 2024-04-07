import { Client } from 'discord.js';

export default class DiscordApp {
  constructor() {

    this.client = new Client({
      intents: [
        'Guilds',
        'GuildMembers',
        'GuildMessages',
      ],
    });

    this.client.login(process.env.TOKEN);
  }
}
