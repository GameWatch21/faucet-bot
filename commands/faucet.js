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
      message.reply("You cant claim Faucet on DM")
    }

    const reward_usd = db.fetch(`faucet_usd`) || 0;
    const ads_space = db.fetch(`ads_text`) || "Open Space";
    /*
    const btc = ["btc" , "sats" , "satoshi"];
    const doge = ["doge" , "dogecoin" , "d"];
    const sto = ["sto" , "stoink"];
    const kanda = ["kanda"];
    const safe = ["safe" , "allsafe"];
    const goat = ["goat" , "goat cash"];
    const bynd = ["bynd" , "beyond" , "beyondcoin"];
    const eth = ["ethereum" , "eth" , "gwei"];
    const btt = ["btt" , "bittorent" , "bittorents"];
    */
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

     
   /* if(!args[0]){
      message.reply("These are the coin you can claim\n```\n•DOGE\n•Kanda\n•STO\n•BYND\n•BTC\n•SAFE\n•GOAT\n•BTT\n```\n\nUse `f!faucet [CURRENCY]`");
      }
      */
if(status == "off"){
     message.reply(`Faucet is closed for now, Please check again later\nADVERTISEMENT\n${ads_space}\nContact "**GameWatch21#9476**" for Renting`);
   }
     else if(status == "on"){
    const claims = db.fetch(`claims.${message.author.id}`);
    const total = Math.floor(claims + 1)
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming USD ${process.env.usd}`)
     .setDescription(`This user already claim ${total} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`usd.${message.author.id}`, reward_usd);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${process.env.usd}${reward_usd}** \n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "**GameWatch21#9476**" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       } 
   /*
   if(!args[0]){
      message.reply("These are the coin you can claim\n```\n•DOGE\n•Kanda\n•STO\n•BYND\n•BTC\n•SAFE\n•GOAT\n•BTT\n```\n\nUse `f!faucet [CURRENCY]`");
      }
     if(btt.includes(args[0].toLowerCase())){
     const claims = db.fetch(`claims.${message.author.id}`);
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming BTT ${process.env.btt}`)
     .setDescription(`This user already claim ${claims} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`btt.${message.author.id}`, reward_btt);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${process.env.btt}${reward_btt}** \n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "GameWatch21#2121" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       } 
   if(eth.includes(args[0].toLowerCase())){
     const claims = db.fetch(`claims.${message.author.id}`);
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming ETH ${process.env.eth}`)
     .setDescription(`This user already claim ${claims} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`eth.${message.author.id}`, reward_eth);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${process.env.eth}${reward_eth} gwei** \n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "GameWatch21#2121" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       } 
  if(goat.includes(args[0].toLowerCase())){
     const claims = db.fetch(`claims.${message.author.id}`);
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming GOAT ${process.env.goat}`)
     .setDescription(`This user already claim ${claims} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`goat.${message.author.id}`, reward_goat);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${process.env.goat}${reward_goat}** \n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "GameWatch21#2121" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       } 
    if(safe.includes(args[0].toLowerCase())){
     const claims = db.fetch(`claims.${message.author.id}`);
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming SAFE ${process.env.safe}`)
     .setDescription(`This user already claim ${claims} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`safe.${message.author.id}`, reward_safe);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${process.env.safe}${reward_safe}** \n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "GameWatch21#2121" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       }    
 if(btc.includes(args[0].toLowerCase())){
     const claims = db.fetch(`claims.${message.author.id}`);
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming satoshi ${process.env.btc}`)
     .setDescription(`This user already claim ${claims} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`btc.${message.author.id}`, reward_btc);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${process.env.btc}${reward_btc}** satoshi\n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "GameWatch21#2121" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       } 
    if(bynd.includes(args[0].toLowerCase())){
     const claims = db.fetch(`claims.${message.author.id}`);
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming BYND ${process.env.bynd}`)
     .setDescription(`This user already claim ${claims} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`bynd.${message.author.id}`, reward_bynd);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${process.env.bynd}${reward_bynd}** BYND\n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "GameWatch21#2121" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       }
       
      if(doge.includes(args[0].toLowerCase())){
     const claims = db.fetch(`claims.${message.author.id}`);
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming DOGE ${process.env.doge}`)
     .setDescription(`This user already claim ${claims} times`)
     .setTimestamp()
     .setColor("GREEN");
  db.add(`doge.${message.author.id}`, reward_doge);
  db.add(`claims.${message.author.id}` , 1);
  db.add(`claims.global` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${process.env.doge}${reward_doge}** DOGE\n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "GameWatch21#2121" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
       } 

   if(sto.includes(args[0].toLowerCase())){
const claims = db.fetch(`claims.${message.author.id}`);
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming STO ${process.env.sto}`)
     .setDescription(`This user already claim ${claims} times`)
     .setTimestamp()
     .setColor("GREEN");
      db.add(`sto.${message.author.id}`, reward_sto);
      db.add(`claims.${message.author.id}`, 1);
        db.add(`claims.global` , 1);
    db.set(`timer.${message.author.id}`, Date.now());                       
    message.reply(`earned **${process.env.sto}${reward_sto}** STO\n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "GameWatch21#2121" for Renting`);
 message.guild.channels.cache.get('789085255378272266').send(log);
      }
 
      
    if(kanda.includes(args[0].toLowerCase())){
const claims = db.fetch(`claims.${message.author.id}`);
     const log = new Discord.MessageEmbed()
     .setTitle(`${message.author.tag} claiming KANDA ${process.env.kanda}`)
     .setDescription(`This user already claim ${claims} times`)
     .setTimestamp()
     .setColor("GREEN");
 db.add(`kanda.${message.author.id}`, reward_kanda);
 db.add(`claims.${message.author.id}`, 1);
   db.add(`claims.global` , 1);
 db.set(`timer.${message.author.id}`, Date.now());
      message.reply(`earned **${process.env.kanda}${reward_kanda}** KANDA\n\n[ADVERTISEMENT SPACE]\n${ads_space}\nContact "GameWatch21#2121" for Renting`);
       message.guild.channels.cache.get('789085255378272266').send(log);
      }
 
    }*/
    }
    
    }
  };