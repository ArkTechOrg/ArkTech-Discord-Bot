import { Client, GatewayIntentBits, REST } from "discord.js";

export const DISCORD_TOKEN: string = process.env.DISCORD_TOKEN || "";
export const DISCORD_CLIENT_ID: string = process.env.DISCORD_CLIENT_ID || "";

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
  console.error("No Discord token or client ID provided.");
  process.exit(1);
};

const discordClient = new Client({ intents: [GatewayIntentBits.Guilds] });

discordClient.on("ready", () => {
  console.log(`Logged in as ${discordClient.user?.tag}!`);
});

discordClient.on("error", (error: Error) => {
  console.error("Discord Client Error:", error);
});

export const discordLogin = () => {
  discordClient.login(DISCORD_TOKEN);
};

export const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN);

export default discordClient;