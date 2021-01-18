const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();
/*const blockedUsers = require("././configs.json");*/

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
    const c_btc = db.fetch(`btc.${message.author.id}`) || 0;
    const c_eth = db.fetch(`eth.${message.author.id}`) || 0;
    const c_goat = db.fetch(`goat.${message.author.id}`) || 0;
    const c_safe = db.fetch(`safe.${message.author.id}`) || 0;
    const c_btt = db.fetch(`btt.${message.author.id}`) || 0;
    const btc = ["btc" , "sats" , "satoshi"];
    const bynd = ["bynd" , "beyond" , "beyondcoin"];
    const sto = ["sto" , "stoink"];
    const kanda = ["kanda"];
    const safe = ["safe" , "allsafe"];
    const goat = ["goat" , "goat cash"];
    const doge = ["doge" , "dogecoin" , "d"];
    const eth = ["eth" , "ethereum" , "gwei"];
    const btt = ["btt" , "bittorent" , "bittorents"];
    
    const amount = args[0];
    const currency = args[1];
    const blockedUsers = [ '770361196448448512', '770362768783573002', '772139037569187870', '770359881688940544'];
    /* 451195250950799370
    770359427680305153
    770361876415643699
    770371044842012673
    770358526081630260
    */
     if (blockedUsers.includes(message.author.id)) return message.reply("Sorry you have been blocked by the bot because of Abusive/Alt/Cheat to our system, please contact the bot dev to unblock your id and give reason why you need to be unblocked");
      
      
   if(message.channel.type == "text"){
    if(!amount){ 
      message.channel.send("Use `f!withdraw [AMOUNT] [CURRENCY]`\nAvailable Currencies:\n•DOGE\n•STO\n•KANDA\n•BYND\n•BTC\n•SAFE\n•GOAT");
      }

 else if(!currency){
      message.reply("Give what currency you want to withdraw");
     }
  else if(btt.includes(currency.toLowerCase())){
       const all = db.fetch(`btt.${message.author.id}`) || 0;
       if(amount.toLowerCase() == "all"){
         if(c_btt == "0"){
           message.reply("You dont have enough balance");
         }
   else if(c_btt >= all){
      const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `BTT` },
       {name: `Amount:`, value: `${process.env.btt} ${all}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       db.subtract(`btt.${message.author.id}`, all);
         db.add(`w_btt.${message.author.id}` , all);
         db.add(`w_btt.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> ${all} btt`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       
       
    }
  }
    if(c_btt >= amount){
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `BTT` },
       {name: `Amount:`, value: `${process.env.btt} ${amount}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
         db.subtract(`btt.${message.author.id}`, amount);
         db.add(`w_btt.${message.author.id}` , amount)
         db.add(`w_btt.stats` , amount)
message.channel.send(`$tip <@${message.author.id}> ${amount} btt`)

message.guild.channels.cache.get("788612288293634069").send(log);
     
     
         
       }
       else if(c_btt < amount){
      message.reply(process.env.ERROR);
      }
     }
    
     else if(eth.includes(currency.toLowerCase())){
       const all = db.fetch(`eth.${message.author.id}`) || 0;
       if(amount.toLowerCase() == "all"){
         if(c_eth == "0"){
           message.reply("You dont have enough balance");
         }
   else if(c_eth >= all){
      const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `ETH` },
       {name: `Amount:`, value: `${process.env.eth} ${all} gwei` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       db.subtract(`eth.${message.author.id}`, all);
         db.add(`w_eth.${message.author.id}` , all);
         db.add(`w_eth.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> ${all} gwei`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       
       
    }
  }
    if(c_eth >= amount){
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `ETH` },
       {name: `Amount:`, value: `${process.env.eth} ${amount} gwei` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
         db.subtract(`eth.${message.author.id}`, amount);
         db.add(`w_eth.${message.author.id}` , amount)
         db.add(`w_eth.stats` , amount)
message.channel.send(`$tip <@${message.author.id}> ${amount} gwei`)

message.guild.channels.cache.get("788612288293634069").send(log);
     
     
         
       }
       else if(c_eth < amount){
      message.reply(process.env.ERROR);
      }
     }
    
     else if(btc.includes(currency.toLowerCase())){
 const all = db.fetch(`btc.${message.author.id}`) || 0;
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `BTC` },
       {name: `Amount:`, value: `${process.env.btc} ${amount} satoshi` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
 const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `BTC` },
       {name: `Amount:`, value: `${process.env.btc} ${all} satoshi` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       if(amount.toLowerCase() == "all"){
         if(c_btc == "0"){
           message.reply("You dont have enough balance");
         }
      else if(c_btc >= all){
          db.subtract(`btc.${message.author.id}`, all);
         db.add(`w_btc.${message.author.id}` , all);
         db.add(`w_btc.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> ${all} satoshi`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       }
       }
       if(c_btc >= amount){
         db.subtract(`btc.${message.author.id}`, amount);
         db.add(`w_btc.${message.author.id}` , amount);
         db.add(`w_btc.stats` , amount); 
message.channel.send(`$tip <@${message.author.id}> ${amount} satoshi`);

message.guild.channels.cache.get("788612288293634069").send(log);
     
     
         
       }
       else if(c_btc < amount){
      message.reply(process.env.ERROR);
      }
     }
    else if(bynd.includes(currency.toLowerCase())){
       const all = db.fetch(`bynd.${message.author.id}`) || 0;
       if(amount.toLowerCase() == "all"){
         if(c_bynd == "0"){
           message.reply("You dont have enough balance");
         }
   else if(c_bynd >= all){
      const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `BYND` },
       {name: `Amount:`, value: `${process.env.bynd} ${all}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       db.subtract(`bynd.${message.author.id}`, all);
         db.add(`w_bynd.${message.author.id}` , all);
         db.add(`w_bynd.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> ${all} bynd`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       
       
    }
  }
    if(c_bynd >= amount){
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `BYND` },
       {name: `Amount:`, value: `${process.env.bynd} ${amount}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
         db.subtract(`bynd.${message.author.id}`, amount);
         db.add(`w_bynd.${message.author.id}` , amount)
         db.add(`w_bynd.stats` , amount)
message.channel.send(`$tip <@${message.author.id}> ${amount} bynd`)

message.guild.channels.cache.get("788612288293634069").send(log);
     
     
         
       }
       else if(c_bynd < amount){
      message.reply(process.env.ERROR);
      }
     }
    
 else if(doge.includes(currency.toLowerCase())){
  const all = db.fetch(`doge.${message.author.id}`) || 0;
       if(amount.toLowerCase() == "all"){
         if(c_doge == "0"){
           message.reply("You dont have enough balance");
         }
   else if(c_doge >= all){
      const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `DOGE` },
       {name: `Amount:`, value: `${process.env.doge} ${all}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       db.subtract(`doge.${message.author.id}`, all);
         db.add(`w_doge.${message.author.id}` , all);
         db.add(`w_doge.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> ${all} doge`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       
       
    }
  }
   if(c_doge >= amount){
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `DOGE` },
       {name: `Amount:`, value: `${process.env.doge} ${amount}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})`, inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("ORANGE");
db.add(`w_doge.stats` , amount);
db.subtract(`doge.${message.author.id}`, amount);
db.add(`w_doge.${message.author.id}`, amount);
      message.channel.send(`$tip <@${message.author.id}> ${amount} doge`);
      message.guild.channels.cache.get("788612288293634069").send(log);
      }
  else if(c_doge < amount){
      message.reply(process.env.ERROR);
      }
      }

 
  else if(sto.includes(currency.toLowerCase())){
   const all = db.fetch(`sto.${message.author.id}`) || 0;
       if(amount.toLowerCase() == "all"){
         if(c_sto == "0"){
           message.reply("You dont have enough balance");
         }
    else if(c_sto >= all){
      const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `STO` },
       {name: `Amount:`, value: `${process.env.sto} ${all}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       db.subtract(`sto.${message.author.id}`, all);
         db.add(`w_sto.${message.author.id}` , all);
         db.add(`w_sto.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> ${all} sto`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       
       
    }
  }
      if(c_sto >= amount){
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `STO` },
       {name: `Amount:`, value: `${process.env.sto} ${amount}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})`, inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLACK");
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

   else if(kanda.includes(currency.toLowerCase())){
  const all = db.fetch(`kanda.${message.author.id}`) || 0;
       if(amount.toLowerCase() == "all"){
         if(c_kanda == "0"){
           message.reply("You dont have enough balance");
         }
   else if(c_kanda >= all){
      const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `KANDA` },
       {name: `Amount:`, value: `${process.env.kanda} ${all}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       db.subtract(`kanda.${message.author.id}`, all);
         db.add(`w_kanda.${message.author.id}` , all);
         db.add(`w_kanda.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> ${all} kanda`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       
       
    }
  }
     if(c_kanda >= amount){ 
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `KANDA` },
       {name: `Amount:`, value: `${process.env.kanda} ${amount}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})`, inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("ORANGE");
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

      
    else if(safe.includes(currency.toLowerCase())){
  const all = db.fetch(`safe.${message.author.id}`) || 0;
       if(amount.toLowerCase() == "all"){
         if(c_safe == "0"){
           message.reply("You dont have enough balance");
         }
   else if(c_safe >= all){
      const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `SAFE` },
       {name: `Amount:`, value: `${process.env.safe} ${all}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       db.subtract(`safe.${message.author.id}`, all);
         db.add(`w_safe.${message.author.id}` , all);
         db.add(`w_safe.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> ${all} safe`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       
       
    }
  }
     if(c_safe >= amount){ 
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `SAFE` },
       {name: `Amount:`, value: `${process.env.safe} ${amount}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})`, inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("ORANGE");
       db.add(`w_safe.stats` , amount);
       db.subtract(`safe.${message.author.id}`, amount);
     db.add(`w_safe.${message.author.id}`, amount)
      message.channel.send(`$tip <@${message.author.id}> ${amount} safe`)
      message.guild.channels.cache.get("788612288293634069").send(log);
       }
     if(c_safe < amount ){
       message.reply(process.env.ERROR);
       }
    
      }
  else if(goat.includes(currency.toLowerCase())){
  const all = db.fetch(`goat.${message.author.id}`) || 0;
       if(amount.toLowerCase() == "all"){
         if(c_goat == "0"){
           message.reply("You dont have enough balance");
         }
   else if(c_goat >= all){
      const log2 = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `GOAT` },
       {name: `Amount:`, value: `${process.env.kanda} ${all}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})` , inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("BLUE");
       db.subtract(`goat.${message.author.id}`, all);
         db.add(`w_goat.${message.author.id}` , all);
         db.add(`w_goat.stats` , all);
     message.channel.send(`$tip <@${message.author.id}> ${all} goat`);
     message.guild.channels.cache.get("788612288293634069").send(log2);
         
       
       
    }
  }
     if(c_goat >= amount){ 
const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag}'s withdrawal`)
     .addFields(
       {name: `Currency:` , value: `GOAT` },
       {name: `Amount:`, value: `${process.env.goat} ${amount}` , inline: true},
       {name: `Message Link` , value: `[Hover Link](${message.url})`, inline: true}
       )
       .setTimestamp()
       .setThumbnail(`${message.author.displayAvatarURL({ format: "png", dynamic: true })}`)
       .setColor("ORANGE");
       db.add(`w_goat.stats` , amount);
       db.subtract(`goat.${message.author.id}`, amount);
     db.add(`w_goat.${message.author.id}`, amount)
      message.channel.send(`$tip <@${message.author.id}> ${amount} goat`)
      message.guild.channels.cache.get("788612288293634069").send(log);
       }
     if(c_goat < amount ){
       message.reply(process.env.ERROR);
       }
    
      }
   }
    }
  }