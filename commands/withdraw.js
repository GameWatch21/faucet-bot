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
    const c_usd = db.fetch(`usd.${message.author.id}`) || 0;
    const currencies = ["btc" , "satoshi" , "bitcoin" , "bitcoins" , "doge" , "dogecoin" , "beyondcoin" , "bynd" , "eth" , "gwei" , "ethereum" , "btt" , "bittorent" , "safe" , "allsafe" , "kanda" , "d" , "sats", "goat" , "goatcash" , "lbry" , "lbc" , "whale" ,"xdai"];
    
    const amount = args[0];
    const currency = args[1];
    const blockedUsers = [ '770361196448448512', '770362768783573002', '772139037569187870', '770359881688940544'];
     if (blockedUsers.includes(message.author.id)) return message.reply("Sorry you have been blocked by the bot because of Abusive/Alt/Cheat to our system, please contact the bot dev to unblock your id and give reason why you need to be unblocked");
      
      
   if(message.channel.type == "text"){
    if(!amount){ 
      message.channel.send("Use `f!withdraw [AMOUNT] [CURRENCY]`\nAvailable Currencies:\n•DOGE\n•XDAI\n•KANDA\n•BYND\n•BTC\n•SAFE\n•GOAT\n•WHALE\n•LBC");
      }

 else if(!currency){
      message.reply("Give what currency you want to withdraw");
     }

     if(!currencies.includes(currency.toLowerCase())){
      message.channel.send(`Invalid Currency!\n\nWe only support these currency:\n\`\`\`\nBTC\nDOGE\nKANDA\nXDAI\nETH\nSAFE\nGOAT\nBTT\nBYND\nGOAT\nLBC\nWHALE\n\`\`\``)
     }
     else if(currencies.includes(currency.toLowerCase())){
     const all = db.fetch(`usd.${message.author.id}`) || 0;
     
       if(amount.toLowerCase() == "all"){
         if(c_usd == "0"){
           message.reply("You dont have enough balance");
         }
   else if(c_usd >= all){
     
      const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `${currency.toUpperCase()}` },
       {name: `Amount:`, value: `$${all} ${currency.toUpperCase()}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       db.subtract(`usd.${message.author.id}`, all);
         db.add(`w_usd.${message.author.id}` , all);
         db.add(`w_usd.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> $${all} ${currency}`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       
    
    }
  }
    if(c_usd >= amount){
      
   const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `${currency.toUpperCase()}` },
       {name: `Amount:`, value: `$${amount} ${currency.toUpperCase()}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
         db.subtract(`usd.${message.author.id}`, amount);
         db.add(`w_usd.${message.author.id}` , amount)
         db.add(`w_usd.stats` , amount)
message.channel.send(`$tip <@${message.author.id}> $${amount} ${currency}`)

message.guild.channels.cache.get("788612288293634069").send(log);
 
       }
       else if(c_usd < amount){
      message.reply(process.env.ERROR);
      }
     }
    }
    }
  }