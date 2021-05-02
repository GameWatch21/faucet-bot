const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
  name: "faucet",
  description: "Claim USD every hour",
  guildOnly: true,
  aliases: ["claim"],
  execute(message, args){
   if(message.channel.type == "dm"){
      message.reply("You cant claim Faucet on DM");
    }
  
    const reward_usd = db.fetch(`faucet_usd`) || 0;
    const ads_space = db.fetch(`ads_text`) || "Open Space";
    const emoji_usd = "<:usd:807233939474350080>"
    const status = db.fetch("status") || "on";
    let timeout = 3500000;
    let daily =  db.get(`timer.${message.author.id}`);
    if(message.channel.type == "text"){
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      return message.channel.send(
        `**You already claimed your reward. Come back in ${time.hours}h ${time.minutes}m ${time.seconds}s**\n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "**GameWatch21#9476**" for Renting Ads`
      );
    }
 
 function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [":money_mouth:" , ":money_with_wings:" , ":moneybag:"];
 
 if (message.member.hasPermission("ADMINISTRATOR")){
 const claims = db.fetch(`claims.${message.author.id}`);
    const total = Math.floor(claims + 1)
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming USD ${emoji_usd}`)
     .setDescription(`This user already claim ${total} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`usd.${message.author.id}`, reward_usd);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.channel.send(`${random_item(items)} <@${message.author.id}> earned **${emoji_usd}${reward_usd}** \n\n\`\`\`[ADVERTISEMENT SPACE]\`\`\`\n${ads_space}\nContact "**GameWatch21#9476**" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       } 
   if (!message.member.hasPermission("ADMINISTRATOR")){
   if(status == "off"){
     message.reply(`Faucet is closed for now, Please check again later\nADVERTISEMENT\n${ads_space}\nContact "**GameWatch21#9476**" for Renting`);
   }
    else if(status == "on"){
    if(message.channel.id != "794524866727772192"){
      message.reply("Please claim at <#794524866727772192>")
    }
    if(message.channel.id == "794524866727772192"){
    const claims = db.fetch(`claims.${message.author.id}`);
    const total = Math.floor(claims + 1)
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming USD ${emoji_usd}`)
     .setDescription(`This user already claim ${total} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`usd.${message.author.id}`, reward_usd);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.channel.send(`${random_item(items)} <@${message.author.id}> earned **${emoji_usd}${reward_usd}** \n\n\`\`\`[ADVERTISEMENT SPACE]\`\`\`\n${ads_space}\nContact "**GameWatch21#9476**" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       } 
    }
    }
    }
    
    }
  };