const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "tip",
  description: "Tip other users currency",
  aliases: ["send"],
  execute(message, args){
    /*function getUser(mention) {
    if (!mention) return;
    if (mention.startsWith("<@") && mention.endsWith(">")) {
      var mention = mention.slice(2, -1);
      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }
      return message.guild.member(message.guild.members.get(mention));
    }
} */
     const user = message.mentions.users.first();
     /*getUser(args[0]) || message.member;*/
   /* function getUser(mention) {
    if (!mention) return;
    if (mention.startsWith("<@") && mention.endsWith(">")) {
      var mention = mention.slice(2, -1);
      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }
      return message.guild.member(message.guild.members(mention));
    }
}
    
    let user = getUser(args[0]) || message.member; */
   /* var emoji = [":money_mouth:" , ":money_with_wings:"]; */
    let c_doge = db.fetch(`doge.${message.author.id}`);
    let c_sto = db.fetch(`sto.${message.author.id}`);
    let c_kanda = db.fetch(`kanda.${message.author.id}`);
    let amount = args[1];
    let currency = args[2]
    let emoji_doge = process.env.doge;
    let emoji_sto = process.env.sto;
    let emoji_kanda = process.env.kanda;
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [":money_mouth:" , ":money_with_wings:" , ":moneybag:"];

    /*const random = [Math.floor(emoji.length*Math.random())];*/
    
    if (!user)
      return message.reply("**You need to mention a user for this command!**");
    if (user.bot)
      return message.channel.send("**You cant tip other bots!**");
    if (user.id === message.author.id)
      return message.reply("**You cannot tip yourself!**");
    
    if (isNaN(amount))
      return message.reply("**Please provide a valid number!**");
    if (!amount) return message.reply("**Please provide a number!**");
    if(!currency) return message.reply("**Please provide a currency!**");
    if(currency == "doge"){
    if (c_doge < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_doge >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${emoji_doge}${amount} DOGE`
    );
    db.subtract(`doge.${message.author.id}`, amount);
    db.add(`doge.${user.id}`, amount);
       }
      }
if(currency == "DOGE"){
    if (c_doge < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_doge >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${emoji_doge}${amount} DOGE`
    );
    db.subtract(`doge.${message.author.id}`, amount);
    db.add(`doge.${user.id}`, amount);
       }
      }
if(currency == "sto"){
    if (c_sto < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_sto >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${emoji_sto}${amount} STO`
    );
    db.subtract(`sto.${message.author.id}`, amount);
    db.add(`sto.${user.id}`, amount);
       }
      }
if(currency == "STO"){
    if (c_sto < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_sto >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${emoji_sto}${amount} STO`
    );
    db.subtract(`sto.${message.author.id}`, amount);
    db.add(`sto.${user.id}`, amount);
       }
      }
if(currency == "KANDA"){
    if (c_kanda < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_kanda >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${emoji_kanda}${amount} KANDA`
    );
    db.subtract(`kanda.${message.author.id}`, amount);
    db.add(`kanda.${user.id}`, amount);
       }
      }
if(currency == "kanda"){
    if (c_kanda < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_kanda >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${emoji_kanda}${amount} KANDA`
    );
    db.subtract(`kanda.${message.author.id}`, amount);
    db.add(`kanda.${user.id}`, amount);
       }
}
    
    }
  }