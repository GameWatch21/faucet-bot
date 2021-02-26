const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "delete",
  description: "delete someone currency",
  aliases: ["del"],
  execute(message, args){
if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
    }
    
    let amount = args[1];
    let currency = args[2];
    let taggedUser = message.mentions.users.first();
    const whitelisted=['390755692459589633' , '743409861131239484'];
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)")
    
    if (isNaN(amount))
      return message.reply("**Please provide a proper number!**");
    
    if(whitelisted.includes(message.author.id)){
      message.channel.send(`${amount} USD has been taken from ${taggedUser.username}'s Account`);
      db.subtract(`usd.${taggedUser.id}` , amount);
    }
}
  
}