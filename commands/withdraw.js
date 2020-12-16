const Discord = require('discord.js');
const db = require('quick.db');

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
    const amount = args[0];
    const currency = args[1];
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
      
 else if(!currency){
      message.reply("Give what currency you want to withdraw");
     }
    
 if(currency == "doge"){
   if(c_doge >= amount){
db.subtract(`doge.${message.author.id}`, amount);
db.add(`w_doge.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} doge`);
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
db.subtract(`doge.${message.author.id}`, amount);
db.add(`w_doge.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} doge`);
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
db.subtract(`sto.${message.author.id}`, amount);
db.add(`w_sto.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} sto`);
        }
      if(c_sto < amount){
        message.reply(process.env.ERROR);
        }
      }
if(currency == "STO"){
   if(c_sto >= amount){
db.subtract(`sto.${message.author.id}`, amount);
db.add(`w_sto.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} sto`)
      }
  else if(c_sto < amount){
      message.reply(process.env.ERROR);
      }
 /* else if(c_doge == amount){
    message.reply("You cant withdraw\nTry not to withdraw the exact amount")
    } */
      }
   if(currency == "kanda"){
     if(c_kanda >= amount){       db.subtract(`kanda.${message.author.id}`, amount);
     db.add(`w_kanda.${message.author.id}`, amount)
      message.channel.send(`$tip <@${message.author.id}> ${amount} kanda`)
       }
     if(c_kanda < amount ){
       message.reply(process.env.ERROR);
       }
    
      }
if(currency == "KANDA"){
   if(c_kanda >= amount){
db.subtract(`kanda.${message.author.id}`, amount);
db.add(`w_kanda.${message.author.id}`, amount)
      message.channel.send(`$tip <@${message.author.id}> ${amount} kanda`)
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