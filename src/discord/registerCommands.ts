import { Routes } from "discord.js";
import { rest, DISCORD_CLIENT_ID } from "../config/discordConfig";

interface Command {
  name: string;
  description: string;
};

const commands: Command[] = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const registerCommands = async (): Promise<void> => {
  try {
    await rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: commands });
    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  };
};

export default registerCommands;