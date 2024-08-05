import { Colors } from "discord.js";
import discordClient from "../../config/discordConfig";

const pingInteraction = async (): Promise<void> => {
  discordClient.on("interactionCreate", async interaction => {
    if (!interaction?.isChatInputCommand()) return;

    if (interaction.commandName === "ping") {
      const time = interaction.createdTimestamp;
      await interaction.reply({
        embeds: [
          {
            title: "Pong!",
            description: `Latency is ${Date.now() - time}ms.`,
            color: Colors.Yellow,
          },
        ],
        ephemeral: false,
      });
    };
  });
};

export default pingInteraction;