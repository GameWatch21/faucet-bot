const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "statistic",
  description: "See your user statistic",
  aliases: ["stats" , "stat"],
  execute(message, args){
    const claim_count = db.fetch(`claims.${message.author.id}`) || 0;
    const w_usd = db.fetch(`w_usd.${message.author.id}`) || 0
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s statistic`)
    .addFields(
      {name: "Total Claims:", value:`${claim_count}`},
      {name: "Earned USD:" , value: `${process.env.usd}${w_usd}`}
      )
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(process.env.F_CREDIT)
    message.channel.send(embed)
  }
}