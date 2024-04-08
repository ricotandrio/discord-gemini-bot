import { displayLog } from "./logController.mjs";

export const interactionController = async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  displayLog(`Interaction received: ${interaction.commandName}`);
  
  if(interaction.commandName === "ping") {
    await interaction.reply("Pong!");

  } else if(interaction.commandName === "beep") {
    await interaction.reply("Boop!");

  } else if(interaction.commandName === "gemini_info") {
    await interaction.reply("Gemini is a command that utilizes Google Gemini to generate a response to a question. The command is used by tagging the bot with the question format @bot <question>");
  
  } else if(interaction.commandName === "clear") {
    const nAmount = interaction.options.getInteger("amount");

    if (nAmount <= 0 || nAmount > 20) {
      return await interaction.reply({
        content: "You need to input a number between 1 and 20.",
        ephemeral: true
      });
    }

    try {
      await interaction.channel.bulkDelete(nAmount, true);
      await interaction.reply({
        content: `Successfully deleted ${nAmount} messages.`,
        ephemeral: true
      }); 
    } catch(e) {
      displayLog(e);
      await interaction.reply({
        content: "There was an error trying to delete messages in this channel.",
        ephemeral: true
      });
    }

  }

}