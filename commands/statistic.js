const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "statistic",
  description: "See your user statistic",
  aliases: ["stats" , "stat"],
  execute(message, args){
    const claim_count = db.fetch(`claims.${message.author.id}`) || 0;
    const w_usd = db.fetch(`w_usd.${message.author.id}`) || 0
    /*
    const w_doge = db.fetch(`w_doge.${message.author.id}`) || 0;
    const w_sto = db.fetch(`w_sto.${message.author.id}`) || 0;
    const w_kanda = db.fetch(`w_kanda.${message.author.id}`) || 0
    const w_eth = db.fetch(`w_eth.${message.author.id}`) || 0;
    const w_goat = db.fetch(`w_goat.${message.author.id}`) || 0;
    const w_safe = db.fetch(`w_safe.${message.author.id}`) || 0;
    const w_bynd = db.fetch(`w_bynd.${message.author.id}`) || 0;
    const w_btt = db.fetch(`w_btt.${message.author.id}`) || 0;
    const w_btc = db.fetch(`w_btc.${message.author.id}`) || 0;
    
    const doge = process.env.doge
    const sto = process.env.sto
    const kanda = process.env.kanda
    */
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s statistic`)
    .addFields(
      {name: "Total Claims:", value:`${claim_count}`},
      {name: "Earned USD:" , value: `${process.env.usd}${w_usd}`}
       /*
       {name: "Withdrawed DOGE:", value: `${doge}${w_doge}`},
       {name: "Withdrawed STO:", value: `${sto}${w_sto}`},
       {name: "Withdrawed KANDA", value: `${kanda}${w_kanda}`},
       {name: "Withdrawed ETH", value: `${process.env.eth}${w_eth}`},
       {name: "Withdrawed ASAFE", value: `${process.env.safe}${w_safe}`},
       {name: "Withdrawed BYND", value: `${process.env.bynd}${w_bynd}`},
       {name: "Withdrawed GOAT", value: `${process.env.goat}${w_goat}`},
       {name: "Withdrawed BTT", value: `${process.env.btt}${w_btt}`},
       {name: "Withdrawed BTC", value: `${process.env.btc}${w_btc}`}
       */
      )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(process.env.F_CREDIT)
    message.channel.send(embed)
  }
}