const Discord = require("discord.js");

module.exports = {
  name: "trade",
  description: "Create a buy and sell order",
  guildOnly: true,
  execute(message, args){
   const option = args[0]
   const arg = args.slice(1).join(" ");
   if(!option){
     message.reply("Specify you want to `buy` or `sell`")
   }
    if(option.toLowerCase() == "buy"){
   const embedW = new Discord.MessageEmbed()
    .setTitle(`💰Buy Order!💰`)
    .setColor("GREEN")
.setDescription(`<@${message.author.id}> create a Buy Order`)
    .addField(`Ordering:`, `${arg}`)
    .addField(`View order:`, `[Contact Now](${message.url})`)
    .setTimestamp()
    .setFooter(`We didnt responsible for any loss funds`);
    message.channel.send("Your buy order has been sent, please check at <#816320342867312640>")
    message.guild.channels.cache.get('816320342867312640').send(embedW);
    }
    if(option.toLowerCase() == "sell"){
   const embedW = new Discord.MessageEmbed()
    .setTitle(`💰Sell Order!💰`)
    .setColor("RED")
.setDescription(`<@${message.author.id}> create a Sell Order`)
    .addField(`Ordering:`, `${arg}`)
    .addField(`View order:`, `[Contact Now](${message.url})`)
    .setTimestamp()
    .setFooter(`We didnt responsible for any loss funds`);
    message.channel.send("Your sell order has been sent, please check at <#816320380951330876>")
    message.guild.channels.cache.get('816320380951330876').send(embedW);
    }
  }
}