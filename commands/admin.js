const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  name: "admin",
  description: "checking the bot balances",
  aliases: ["a" , "ad"],
  execute(message, args){
    if(message.channel.type == "dm"){
      message.reply("You cant claim Faucet on DM");
    }
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
      const stats_bynd = db.fetch(`w_bynd.stats`) || 0;
      const stats_btc = db.fetch(`w_btc.stats`) || 0;
      const stats_goat = db.fetch(`w_goat.stats`) || 0;
      const stats_eth = db.fetch(`w_eth.stats`) || 0;
      const stats_safe = db.fetch(`w_safe.stats`) || 0;
      const stats = ["stats" , "statistic" , "stat" , "statistics"];
      const ann = ["ann" , "announcement" , "announce" , "announces" , "announcements"];
      const bal = ["bal" , "balance"];
      const bals = ["bals" , "balances"];
      const withdraw = ["with" , "withdraw"];
    if(bal.includes(option.toLowerCase())){
      if(!option2){
        message.channel.send("$bal");
      }
    
  else  message.channel.send(`$bal ${option2}`);
    }
if(bals.includes(option.toLowerCase())){
    message.channel.send("$bals");
    }
if(withdraw.includes(option.toLowerCase())){
    message.channel.send(`$tip <@${message.author.id}> ${option2} ${currency}`)
}
  if(stats.includes(option.toLowerCase())){
    const embed = new Discord.MessageEmbed()
    .setTitle(`Faucet Statistic`)
   .addFields(
    /* {name: `Withdrawal`}, */
     {name: `Claimed Doge:` , value: `${process.env.doge}${stats_doge}` , inline: false},
     {name: `Claimed Stoink:` , value: `${process.env.sto}${stats_sto}` , inline: false},
     {name: `Claimed Kanda:` , value: `${process.env.kanda}${stats_kanda}` , inline: false},
      {name: `Claimed BYND:` , value: `${process.env.bynd}${stats_bynd}` , inline: false},
      {name: `Claimed BTC (satoshi):` , value: `${process.env.btc}${stats_btc}` , inline: false},
      {name: `Claimed ETH (Gwei):` , value: `${process.env.eth}${stats_eth} gwei`},
    {name: `Claimed Allsafe:` , value: `${process.env.safe}${stats_safe}`},
    {name: `Claimed Goat Cash:` , value: `${process.env.goat}${stats_goat}`},
  /*  {name: `Faucet Claims`},*/
     {name: `Claims:` , value: `${claim_stats}` , inline: true}
     )
     .setTimestamp()
     .setColor("GREEN");
     
    message.channel.send(embed)
  }
  
  if(ann.includes(option.toLowerCase())){
    const arg = args.slice(1).join(" ");
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
    const c_btc = db.fetch(`btc.${user.id}`) || 0;
    const c_eth = db.fetch(`eth.${user.id}`) || 0;
    const c_safe = db.fetch(`safe.${user.id}`) || 0;
    const c_goat = db.fetch(`goat.${user.id}`) || 0;
    const embed_Bal = new Discord.MessageEmbed()
    .setTitle(`${user.tag}'s Balance`)
    .addFields(
      {name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      },
      {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      },
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      },
      {name: "Beyondcoin", value: `${process.env.bynd}${c_bynd}`},
      {name: "Bitcoin" , value: `${process.env.btc}${c_btc} satoshi`},
      {name: "Ethereum" , value: `${process.env.eth}${c_eth} gwei`},
      {name: "Allsafe" , value: `${process.env.safe}${c_safe}`},
      {name: "Goat Casj" , value: `${process.env.goat}${c_goay}`}
      )
    .setTimestamp()
    .setColor('BLUE');
if(!user){
      message.reply("Tag the user you want to check his/her balance");
    }
   else message.channel.send(embed_Bal);
    
  }
  if(option == "set"){
    const total = db.fetch(`faucet_${option2}`);
    const currencies = args[1].toLowerCase();
    const amount = args[2];
    if(!option2){
      message.reply("Please provide what currency you want to set")
    }
     if(!currency){
      message.reply("Please provide the number to set the faucet reward")
    }
   else db.set(`faucet_${currencies}` , `${amount}`);
   if(total == "undefined"){
     message.reply("Is not a valid currency");
   }
   else message.reply(`${option2} Currency reward has been set to ${currency}`);
  }
  if(option == "ads"){
    const arg = args.slice(1).join(" ");
    db.set(`ads_text` , `${arg}`);
    message.reply(`Advertisement Text has been set to: ${arg}`)
  }
  if(option == "timer"){
    const user = message.mentions.users.first();
    db.delete(`timer.${user.id}`);
    message.reply(`${user.tag} timer has been reseted`)
  }
      }
} 
  