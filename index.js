require('dotenv').config();
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const http = require("http");
/* const port = 8080; */
const url = require('url');
/* const fetch = require('node-fetch'); */
const fs = require("fs");
const Sequelize = require('sequelize');
const Discord = require("discord.js");
const { prefix , token } = require("./config.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}



client.once("ready", () => {
  const testing = new Discord.MessageEmbed()
  .setTitle(`Testing`)
  .setDescription(`Just a testing Purpose`);
  
  client.api.applications(client.user.id).guilds('786169610507780106').commands.post({data: {
    name: 'ping',
    description: 'Test out our slash command!'
}});
  client.ws.on('INTERACTION_CREATE', async interaction => {
  client.api.interactions(interaction.id, interaction.token).callback.post({data: {
  type: 4,
  data: {
    content: testing
    }
  }
})
})
  console.log(
    "Yup im online, and im ready to work"
    );
  client.user.setActivity(`f!help | Claim your faucet with f!faucet`), {
    type: "playing"
    };
});
client.on("message", message => {
  
  if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error when using this command, please use `f!report [MESSAGE]` to report this error");
  }
  // [BASIC COMMANDS]
  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  }
  if (command === "say") {
    message.channel.send(`${args}`);
  }
  if (command === "im") {
    client.commands.get("im").execute(message, args);
  }
  if (command === "reaction") {
    client.commands.get("reaction").execute(message, args);
  }
  if(command === "urban"){
  client.commands.get("wikipedia").execute(message, args);
    }
  // [INFO COMMAND]]
  if (command === "info-server") {
    client.commands.get("info-server").execute(message, args);
  }
  if (command === "avatar") {
    client.commands.get("avatar").execute(message, args);
  }
  // [BOT COMMAND]
  if (command === "uptime") {
    client.commands.get("uptime").execute(message, args);
  }
  if (command === "help") {
    client.commands.get("help").execute(message, args);
  }
  // [MODERATION COMMAND]
  if (command === "prune") {
    client.commands.get("prune").execute(message, args);
  }
  // [ECONOMY COMMAND]
  if (command === "register"){
  client.commands.get("register").execute(message, args);
    }
  if(command === "restart"){
    client.commands.get("restart").execute(message, args);
    }
  // [ADMIN COMMAND]
  if (command === "reload") {
    client.commands.get("reload").execute(message, args);
  }
});

client.login(process.env.TOKEN)