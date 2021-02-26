/*const keep_alive = require('./keep_alive.js'); */

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
/*
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});
*/
/*const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});

const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
}); */

client.once("ready", () => {
  client.api.applications(client.user.id).guilds('786169610507780106').commands.post({data: {
    name: 'ping',
    description: 'ping pong!'
}});
  client.ws.on('INTERACTION_CREATE', async interaction => {
  client.api.interactions(interaction.id, interaction.token).callback.post({data: {
  type: 4,
  data: {
    content: 'hello world!'
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
   /*Tags.sync(); */
  }); 
const blockedUsers = [ '', 'id2' ];
client.on("message", message => {

 /*if (message.mentions(client.user)) {
    const embed = new Discord.MessageEmbed()
    .setTitle(`Hello ${message.author.username} 👋`)
    .setDescription("Hello, I'm a Faucet bot, a bot dedicated to serving you and giving you a rewards!\nMy prefix is `f!`. You can use `f!help` to get started with the bot. \nStart claiming crpyto with `f!faucet`\nAnd last, have Fun!")
    .setColor("RANDOM")
    .setFooter("A Welcome Message");
    message.channel.send(embed);
  } */
  
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

client.login(process.env.TOKEN);
