const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "balance",
  description: "Check your balance",
  aliases: ["bal" , "bals" , "balances"],
  execute(message, args){
    const currency = args[0];
    
    const c_usd = db.fetch(`usd.${message.author.id}`) || 0
    const emoji_usd = "<:usd:807233939474350080>"

    const embed_Bal = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {
      name: "USD:", 
      value: `**${emoji_usd} ${c_usd}**`, 
      inline: false
      }
     )
    .setTimestamp()
    .setFooter(`Withdraw your balance with "f!withdraw"`)
    .setColor('BLUE');
    
    
    message.channel.send(embed_Bal);
   
    }
    
   }