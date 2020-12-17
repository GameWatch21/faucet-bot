const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  name: "admin",
  description: "checking the bot balances",
  aliases: ["a" , "ad"],
  execute(message, args){
  if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
       const user = message.mentions.users.first();
      const option = args[0];
      const option2 = args[1];
      const currency = args[2];
      const input = args[3];
    if(option == "balance"){
    message.channel.send("$bals");
    }
if(option == "bal"){
    message.channel.send("$bals");
    }
if(option == "bals"){
    message.channel.send("$bals");
    }
if(option == "balances"){
    message.channel.send("$bals");
    }
    if(option == "withdraw"){
    message.channel.send(`$tip <@${message.author.id}> ${option2} ${currency}`)
}
if(option == "with"){
    message.channel.send(`$tip <@${message.author.id}> ${option2} ${currency}`)
}
      }
} 
  