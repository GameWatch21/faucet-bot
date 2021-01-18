const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "add",
  description: "Add someone currency",
  execute(message, args){
if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
    }
    // [THE SIDE FUNCTION]
    let amount = args[1];
    let currency = args[2];
    let taggedUser = message.mentions.users.first();
    const able = ["btc" , "eth" , "bynd" , "sto" , "btt" , "kanda" , "safe", "goat" , "doge"]
    
    if (isNaN(amount))
      return message.reply("**Please provide a proper number!**");
     if(!currency) return message.reply("**You forgot to add the currency**")


  // [THE MAIN FUNCTION]
    if(able.includes(currency.toLowerCase())){
      message.channel.send(`Added ${amount} ${currency.toUpperCase()} to ${taggedUser.username}'s account.`);
      db.add(`${currency}.${taggedUser.id}` , amount);
    }
  }
  
}