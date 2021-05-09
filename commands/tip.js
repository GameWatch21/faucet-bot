const Discord = require('discord.js');
const db = require('quick.db');
require('dotenv').config();

module.exports = {
  name: "tip",
  description: "Tip other users currency",
  aliases: ["send"],
  execute(message, args){
if(message.channel.type == "dm"){
      message.reply("You cant claim Faucet on DM")
    }
     const user = message.mentions.users.first();
    
    let c_usd = db.fetch(`usd.${message.author.id}`);
    let amount = args[1];
    let currency = args[2]
    
        const blockedUsers = [ '770361196448448512', '770362768783573002', '772139037569187870', '770359881688940544'];
    /* 451195250950799370
    770359427680305153
    770361876415643699
    770371044842012673
    770358526081630260

    */
     if (blockedUsers.includes(message.author.id)) return message.reply("Sorry you have been blocked by the bot because of Abusive/Alt/Cheat to our system, please contact the bot dev to unblock your id and give reason why you need to be unblocked");
      
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
    /*
    if (isNaN(amount))
      return message.reply("**Please provide a valid number!**");
      */
    if (!amount) return message.reply("**Please provide a number!**");
    
    if(amount == "all"){
      if(c_usd < 0){
     message.reply("**You don't have enough momey to tip**");
      }
     if(c_usd >= 0){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${process.env.usd}${c_usd} USD`);
    db.subtract(`usd.${message.author.id}`, c_usd);
    db.add(`usd.${user.id}`, c_usd);
     }
    }
    if(amount != "all"){
    if(c_usd < amount){
      message.reply("**You don't have enough momey to tip**")
    }
    if(c_usd >= amount){
      message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${process.env.usd}${amount} USD`);
    db.subtract(`usd.${message.author.id}`, amount);
    db.add(`usd.${user.id}`, amount);
    }
    }
    /*
    if(doge.includes(currency.toLowerCase())){
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
if(sto.includes(currency.toLowerCase())){
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
if(kanda.includes(currency.toLowerCase())){
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
    if(bynd.includes(currency.toLowerCase())){
    if (c_bynd < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_bynf >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${process.env.bynd}${amount} BYND`
    );
    db.subtract(`bynd.${message.author.id}`, amount);
    db.add(`bynd.${user.id}`, amount);
       }
      }
    if(btc.includes(currency.toLowerCase())){
    if (c_btc < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_btc >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${process.env.btc}${amount} satoshi`
    );
    db.subtract(`btc.${message.author.id}`, amount);
    db.add(`btc.${user.id}`, amount);
       }
      }
      if(eth.includes(currency.toLowerCase())){
    if (c_eth < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_eth >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${process.env.eth}${amount} gwei`
    );
    db.subtract(`eth.${message.author.id}`, amount);
    db.add(`eth.${user.id}`, amount);
       }
      }
      if(safe.includes(currency.toLowerCase())){
    if (c_safe < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_safe >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${process.env.safe}${amount} safe`
    );
    db.subtract(`safe.${message.author.id}`, amount);
    db.add(`safe.${user.id}`, amount);
       }
      }
      if(goat.includes(currency.toLowerCase())){
    if (c_goat < amount)
      return message.reply("**You don't have enough money for this command!**");
     if(c_goat >= amount){
       message.channel.send(
      `${random_item(items)} <@${message.author.id}> sent <@${user.id}> ${process.env.goat}${amount} goat`
    );
    db.subtract(`goat.${message.author.id}`, amount);
    db.add(`goat.${user.id}`, amount);
    
       }
       */
      
    }
  }