const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  name: "admin",
  description: "checking the bot balances",
  aliases: ["a" , "ad"],
  execute(message, args){
  if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
       const user = message.mentions.users.first();
      const option = args[0];
      const option2 = args[1];
      const currency = args[2];
      const input = args[3];
      const stats_doge = db.fetch(`w_doge.stats`) || 0;
      const stats_sto = db.fetch(`w_sto.stats`) || 0;
      const stats_kanda = db.fetch(`w_kanda.stats`) || 0;
      const claim_stats = db.fetch(`claims.global`) || 0;
      const stats_bynd = db.fetch(`w_bynd.stats`)
    if(option == "balance"){
      if(!option2){
        message.channel.send("$bal");
      }
    
  else  message.channel.send(`$bal ${option2}`);
    }
if(option == "bal"){
   if(!option2){
     message.channel.send("$bal");
   }
    else message.channel.send(`$bal ${option2}`);
    }
if(option == "bals"){
    message.channel.send("$bals");
    }
if(option == "balances"){
    message.channel.send("$bals");
    }
    if(option == "withdraw"){
    message.channel.send(`$tip <@${message.author.id}> ${option2} ${currency}`)
}
if(option == "with"){
    message.channel.send(`$tip <@${message.author.id}> ${option2} ${currency}`)
}
  if(option == "status"){
    const embed = new Discord.MessageEmbed()
    .setTitle(`Faucet Statistic`)
   .addFields(
    /* {name: `Withdrawal`}, */
     {name: `Claimed Doge:` , value: `${process.env.doge}${stats_doge}` , inline: true},
     {name: `Claimed Stoink:` , value: `${process.env.sto}${stats_sto}` , inline: true},
     {name: `Claimed Kanda:` , value: `${process.env.kanda}${stats_kanda}` , inline: true},
      {name: `Claimed BYND:` , value: `${process.env.bynd}${stats_bynd}` , inline: true},
  /*  {name: `Faucet Claims`},*/
     {name: `Claims:` , value: `${claim_stats}` , inline: true}
     )
     .setTimestamp()
     .setColor("GREEN");
     
    message.channel.send(embed)
  }
  if(option == "stats"){
        const embed = new Discord.MessageEmbed()
    .setTitle(`Faucet Statistic`)
   .addFields(
    /* {name: `Withdrawal`}, */
     {name: `Claimed Doge:` , value: `${process.env.doge}${stats_doge}` , inline: true},
     {name: `Claimed Stoink:` , value: `${process.env.sto}${stats_sto}` , inline: true},
     {name: `Claimed Kanda:` , value: `${process.env.kanda}${stats_kanda}` , inline: true},
     {name: `Claimed BYND:` , value: `${process.env.bynd}${stats_bynd}` , inline: true},
  /*  {name: `Faucet Claims`},*/
     {name: `Claims:` , value: `${claim_stats}` , inline: true}
     )
     .setTimestamp()
     .setColor("GREEN");
     
    message.channel.send(embed)
  }
  if(option == "statistic"){
      const embed = new Discord.MessageEmbed()
    .setTitle(`Faucet Statistic`)
   .addFields(
    /* {name: `Withdrawal`}, */
     {name: `Claimed Doge:` , value: `${process.env.doge}${stats_doge}` , inline: true},
     {name: `Claimed Stoink:` , value: `${process.env.sto}${stats_sto}` , inline: true},
     {name: `Claimed Kanda:` , value: `${process.env.kanda}${stats_kanda}` , inline: true},
     {name: `Claimed BYND:` , value: `${process.env.bynd}${stats_bynd}` , inline: true},
  /*  {name: `Faucet Claims`},*/
     {name: `Claims:` , value: `${claim_stats}` , inline: true}
     )
     .setTimestamp()
     .setColor("GREEN");
     
    message.channel.send(embed)
  }
  if(option == 'ann'){
    const arg = args.slice(1).join(" ");/*args.slice(0).join(" ");*/
    /*const channel = message.mention.channels.first().id;
    const place = */
    message.guild.channels.cache.get('786285618899451904').send(`${arg}`);
  }
  if(option == 'announce'){
    const arg = args.slice(1).join(" ");/*args.slice(0).join(" ");*/
    /*const channel = message.mention.channels.first().id;*/
    message.guild.channels.cache.get('786285618899451904').send(`${arg}`);
  }
  if(option == 'announcement'){
    const arg = args.slice(1).join(" ");/*args.slice(0).join(" ");*/
    /*const channel = message.mention.channels.first().id;*/
    message.guild.channels.cache.get('786285618899451904').send(`${arg}`);
  }
  if(option == 'reset'){
    const currency = args[1];
    const user = message.mentions.users.first();
    db.delete(`${currency}.${user.id}`);
    message.channel.send(`${user.tag}'s ${currency} balance is reseted`);
  }
  if(option == 'check'){
    
    const user = message.mentions.users.first();
    const c_doge = db.fetch(`doge.${user.id}`) || 0;
    const c_bynd = db.fetch(`bynd.${user.id}`) || 0;
    const c_kanda = db.fetch(`kanda.${user.id}`) || 0;
    const c_sto = db.fetch(`sto.${user.id}`) || 0;
    const embed_Bal = new Discord.MessageEmbed()
    .setTitle(`${user.tag}'s Balance`)
    .addFields(
      {name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      },
      {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      },
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      },
      {name: "Beyondcoin", value: `${process.env.bynd}${c_bynd}`
        
      }
      )
    .setTimestamp()
    .setColor('BLUE');
if(!user){
      message.reply("Tag the user you want to check his/her balance");
    }
   else message.channel.send(embed_Bal);
    
  }
  if(option == "set"){
    if(!option2){
      message.reply("Please provide what currency you want to set")
    }
     if(!currency){
      message.reply("Please provide the number to set the faucet reward")
    }
   else db.set(`faucet_${option2}` , `${currency}`);
    message.reply(`${option2} Currency reward has been set to ${currency}`);
  }
  if(option == "ads"){
    const arg = args.slice(1).join(" ");
    db.set(`ads_text` , `${arg}`);
    message.reply(`Advertisement Text has been set to: ${arg}`)
  }
      }
} 
  