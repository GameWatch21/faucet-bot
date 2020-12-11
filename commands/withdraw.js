const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "withdraw",
  description: "Withdraw your doge",
  aliases: ["w", "with"],
  execute(message, args){
    const c_doge = db.fetch(`doge.${message.author.id}`) || 0;
    const c_sto = db.fetch(`sto.${message.author.id}`) || 0;
    const c_kanda = db.fetch(`kanda.${message.author.id}`) || 0;
    const amount = args[0];
    const currency = args[1];
   /* const response_doge = currency.toLowerCase() == "DOGE";*/
  
   /* if(isNaN(amount)){
      message.reply("Invalid Number");
      } */
   
    if(!amount){ 
      message.channel.send("Use `g!withdraw [AMOUNT] [CURRENCY]`\nAvailable Currencies:\n•DOGE\n•STO\n•KANDA"/*"You need to give amount you want to withdraw"*/);
      } 
  /* if(isNaN(amount)){
        message.reply("Invalid Number");
        } */
      
 else if(!currency){
      message.reply("Give what currency you want to withdraw");
     };
    
 if(currency == "doge"){
   if(c_doge >= amount){
db.subtract(`doge.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} doge`)
      }
  else if(c_doge < amount){
      message.reply("You cant withdraw");
      }
 /* else if(c_doge == amount){
    message.reply("You cant withdraw\nTry not to withdraw the exact amount")
    } */
      }
  if(currency == "sto"){
      if(c_sto >= amount){
db.subtract(`sto.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} sto`)
        }
      if(c_sto < amount){
        message.reply("You cant withdraw");
        }
      }
   if(currency == "kanda"){
     if(c_kanda >= amount){       db.subtract(`kanda.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} kanda`)
       }
     if(c_kanda < amount ){
       message.reply("you cant withdraw");
       }
    
      }
    
    
    }
  }