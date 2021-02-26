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
    // [VARIABLES]
    let amount = args[1];
    let currency = args[2];
    let taggedUser = message.mentions.users.first();
    const whitelisted=['390755692459589633' , '743409861131239484'];
    
   // [IF AND CHECKING STATEMENT]
   if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)")
    
    if (isNaN(amount))
      return message.reply("**Please provide a proper number!**");

  // [THE MAIN FUNCTION]
      if(whitelisted.include(message.author.id)){
      message.channel.send(`Added ${amount} USD to ${taggedUser.username}'s account.`);
      db.add(`usd.${taggedUser.id}` , amount);
      }
  }
  
}