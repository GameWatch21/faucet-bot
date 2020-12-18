const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

module.exports = {
  name: "withdraw",
  description: "Withdraw your doge",
  guildOnly: true,
  aliases: ["w", "with"],
  execute(message, args){
  if(message.channel.type == "dm"){
    message.reply("You cant withdraw currency on DM")
  }
    const c_doge = db.fetch(`doge.${message.author.id}`) || 0;
    const c_sto = db.fetch(`sto.${message.author.id}`) || 0;
    const c_kanda = db.fetch(`kanda.${message.author.id}`) || 0;
    const c_bynd = db.fetch(`bynd.${message.author.id}`) || 0;
    const amount = args[0];
    const currency = args[1];
    /*const channel = client.channels.cache.find(x => x.id == "788612288293634069")
*/
   /* const response_doge = currency.toLowerCase() == "DOGE";*/
  
   /* if(isNaN(amount)){
      message.reply("Invalid Number");
      } */
      
      
   if(message.channel.type == "text"){
    if(!amount){ 
      message.channel.send("Use `g!withdraw [AMOUNT] [CURRENCY]`\nAvailable Currencies:\n•DOGE\n•STO\n•KANDA"/*"You need to give amount you want to withdraw"*/);
      } 
  /* if(isNaN(amount)){
        message.reply("Invalid Number");
        } */
      else if(isNaN(amount)) {
        message.reply("**Invalid Number**");
      }
 else if(!currency){
      message.reply("Give what currency you want to withdraw");
     }
     if(currency == "bynd"){
       if(c_bynd >= amount){
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s Payment Request`)
     .addFields(
       {name: `Currency:` , value: `BYND` },
       {name: `Amount:`, value: `${process.env.bynd} ${amount}` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("RANDOM");
         db.subtract(`bynd.${message.author.id}`, amount);
         db.add(`w_bynd.${message.author.id}` , amount)
message.channel.send("Your Withdrawal Request has been sent, please wait for 24h till your BYND at your wallet\n\nCheck <#789311073878278155> if your Request is deleted that's mean your BYND is already on your account")

message.guild.channels.cache.get("789311073878278155").send(log);
     
     
         
       }
     }
    
 if(currency == "doge"){
   if(c_doge >= amount){
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `DOGE` },
       {name: `Amount:`, value: `${process.env.doge} ${amount}` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("RANDOM");
db.add(`w_doge.stats` , amount);
db.subtract(`doge.${message.author.id}`, amount);
db.add(`w_doge.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} doge`);
      message.guild.channels.cache.get("788612288293634069").send(log);
      }
  else if(c_doge < amount){
      message.reply(process.env.ERROR);
      }
 /* else if(c_doge == amount){
    message.reply("You cant withdraw\nTry not to withdraw the exact amount")
    } */
      }
if(currency == "DOGE"){
   if(c_doge >= amount){
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `DOGE` },
       {name: `Amount:`, value: `${process.env.doge} ${amount}` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("RANDOM");
       db.add(`w_doge.stats` , amount);
db.subtract(`doge.${message.author.id}`, amount);
db.add(`w_doge.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} doge`);
      message.guild.channels.cache.get("788612288293634069").send(log);
      }
  else if(c_doge < amount){
      message.reply(process.env.ERROR);
      }
 /* else if(c_doge == amount){
    message.reply("You cant withdraw\nTry not to withdraw the exact amount")
    } */
      }
 
  if(currency == "sto"){
      if(c_sto >= amount){
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `STO` },
       {name: `Amount:`, value: `${process.env.sto} ${amount}` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("RANDOM");
       db.add(`w_sto.stats` , amount);
db.subtract(`sto.${message.author.id}`, amount);
db.add(`w_sto.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} sto`);
      message.guild.channels.cache.get("788612288293634069").send(log);
        }
      if(c_sto < amount){
        message.reply(process.env.ERROR);
        }
      }
if(currency == "STO"){
   if(c_sto >= amount){
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `STO` },
       {name: `Amount:`, value: `${process.env.sto} ${amount}` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("RANDOM");
       db.add(`w_sto.stats` , amount);
db.subtract(`sto.${message.author.id}`, amount);
db.add(`w_sto.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} sto`)
      message.guild.channels.cache.get("788612288293634069").send(log);
      }
  else if(c_sto < amount){
      message.reply(process.env.ERROR);
      }
 /* else if(c_doge == amount){
    message.reply("You cant withdraw\nTry not to withdraw the exact amount")
    } */
      }
   if(currency == "kanda"){
     if(c_kanda >= amount){ 
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `KANDA` },
       {name: `Amount:`, value: `${process.env.kanda} ${amount}` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("RANDOM");
       db.add(`w_kanda.stats` , amount);
       db.subtract(`kanda.${message.author.id}`, amount);
     db.add(`w_kanda.${message.author.id}`, amount)
      message.channel.send(`$tip <@${message.author.id}> ${amount} kanda`)
      message.guild.channels.cache.get("788612288293634069").send(log);
       }
     if(c_kanda < amount ){
       message.reply(process.env.ERROR);
       }
    
      }
if(currency == "KANDA"){
   if(c_kanda >= amount){
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `KANDA` },
       {name: `Amount:`, value: `${process.env.kanda} ${amount}` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("RANDOM");
       db.add(`w_kanda.stats` , amount);
db.subtract(`kanda.${message.author.id}`, amount);
db.add(`w_kanda.${message.author.id}`, amount)
      message.channel.send(`$tip <@${message.author.id}> ${amount} kanda`)
      message.guild.channels.cache.get("788612288293634069").send(log);
      }
  else if(c_kanda < amount){
      message.reply(process.env.ERROR);
      }
 /* else if(c_doge == amount){
    message.reply("You cant withdraw\nTry not to withdraw the exact amount")
    } */
      }
   }
    }
  }