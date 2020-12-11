const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "statistic",
  description: "See your user statistic",
  aliases: ["stats" , "stat"],
  execute(message, args){
    const claim_count = db.fetch(`claims.${message.author.id}`) || 0;
    const w_doge = db.fetch(`w_doge.${message.author.id}`) || 0;
    const w_sto = db.fetch(`w_sto.${message.author.id}`) || 0;
    const w_kanda = db.fetch(`w_kanda.${message.author.id}`) || 0
    const doge = process.env.doge
    const sto = process.env.sto
    const kanda = process.env.kanda
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s statistic`)
    .addFields(
      {name: "Total Claims:", value:`${claim_count}`},
       {name: "Withdrawed DOGE:", value: `${doge}${w_doge}`},
       {name: "Withdrawed STO:", value: `${sto}${w_sto}`},
       {name: "Withdrawed KANDA", value: `${kanda}${w_kanda}`}
      )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(process.env.F_CREDIT)
    message.channel.send(embed)
  }
}