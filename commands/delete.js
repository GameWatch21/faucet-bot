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
      `Deleted ${process.env.doge}${amount} DOGE to ${taggedUser.username}'s account.`
    );
        db.subtract(`doge.${taggedUser.id}`, amount)
      }
if(currency == "DOGE"){
message.channel.send(
      `Deleted ${process.env.doge}${amount} DOGE to ${taggedUser.username}'s account.`
    );
        db.subtract(`doge.${taggedUser.id}`, amount)
      }
if(currency == "sto"){
message.channel.send(
      `Deleted ${process.env.sto}${amount} STO to ${taggedUser.username}'s account.`
    );
        db.subtract(`sto.${taggedUser.id}`, amount)
      }
if(currency == "STO"){
message.channel.send(
      `Deleted ${process.env.sto}${amount} STO to ${taggedUser.username}'s account.`
    );
        db.subtract(`sto.${taggedUser.id}`, amount)
      }
if(currency == "kanda"){
message.channel.send(
      `Deleted ${process.env.kanda}${amount} KANDA to ${taggedUser.username}'s account.`
    );
        db.subtract(`kanda.${taggedUser.id}`, amount)
      }
if(currency == "KANDA"){
message.channel.send(
      `Deleted ${process.env.kanda}${amount} KANDA to ${taggedUser.username}'s account.`
    );
        db.subtract(`kanda.${taggedUser.id}`, amount)
      }
/*message.channel.send(
      `Added $${money} to ${user.user.username}'s account.`
    );
    db.add(`money.${user.id}`, money);
    */
  }
  
}