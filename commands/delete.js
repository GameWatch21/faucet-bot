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
    const able = ["btc" , "doge" , "bynd" , "btt" , "sto" , "kanda" , "eth" , "safe" , "goat"];
    
    if (isNaN(amount))
      return message.reply("**Please provide a proper number!**");
     if(!currency) return message.reply("**You forgot to add the currency**")
  /*  if (!amount)
      return message.reply(
        "**You need to specify a number for this command!**"
      ); */
    if(!able.includes(currency.toLowerCase())){
      message.reply("Invalid Currency Database Code");
    }
    if(able.includes(currency.toLowerCase())){
      message.channel.send(`${amount} ${currency.toUpperCase()} has been taken from ${taggedUser.username}'s Account`);
      db.subtract(`${currency}.${taggedUser.id}` , amount);
    }
}
  
}