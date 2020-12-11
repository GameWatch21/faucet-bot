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
  /*  function getUser(mention) {
    if (!mention) return;
    if (mention.startsWith("<@") && mention.endsWith(">")) {
      var mention = mention.slice(2, -1);
      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }
      return message.guild.member(message.guild.members.get(mention));
    }
} */
    
    let amount = args[1];
    let currency = args[2];
    let taggedUser = message.mentions.users.first();
  /*  let user = getUser(args[0]) || message.member; */
/*if (a.bot)
      return message.channel.send("Economy commands don't work on bots."); */
    
    if (isNaN(amount))
      return message.reply("**Please provide a proper number!**");
     if(!currency) return message.reply("**You forgot to add the currency**")
  /*  if (!amount)
      return message.reply(
        "**You need to specify a number for this command!**"
      ); */
      if(currency == "doge"){
message.channel.send(
      `Added ${process.env.doge}${amount} DOGE to ${taggedUser.username}'s account.`
    );
        db.add(`doge.${taggedUser.id}`, amount)
      }
if(currency == "DOGE"){
message.channel.send(
      `Added ${process.env.doge}${amount} DOGE to ${taggedUser.username}'s account.`
    );
        db.add(`doge.${taggedUser.id}`, amount)
      }
if(currency == "sto"){
message.channel.send(
      `Added ${process.env.sto}${amount} STO to ${taggedUser.username}'s account.`
    );
        db.add(`sto.${taggedUser.id}`, amount)
      }
if(currency == "STO"){
message.channel.send(
      `Added ${process.env.sto}${amount} STO to ${taggedUser.username}'s account.`
    );
        db.add(`sto.${taggedUser.id}`, amount)
      }
if(currency == "kanda"){
message.channel.send(
      `Added ${process.env.kanda}${amount} KANDA to ${taggedUser.username}'s account.`
    );
        db.add(`kanda.${taggedUser.id}`, amount)
      }
if(currency == "KANDA"){
message.channel.send(
      `Added ${process.env.kanda}${amount} KANDA to ${taggedUser.username}'s account.`
    );
        db.add(`kanda.${taggedUser.id}`, amount)
      }
/*message.channel.send(
      `Added $${money} to ${user.user.username}'s account.`
    );
    db.add(`money.${user.id}`, money);
    */
  }
  
}