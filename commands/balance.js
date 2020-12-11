const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "balance",
  description: "Check your balance",
  aliases: ["bal" , "bals" , "balances"],
  execute(message, args){
    const c_doge = db.fetch(`doge.${message.author.id}`) || 0;
    const c_kanda = db.fetch(`kanda.${message.author.id}`) || 0;
    const c_sto = db.fetch(`sto.${message.author.id}`) || 0;
    const embed_Bal = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      },
      {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      },
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      }
      )
    .setTimestamp()
    .setColor('BLUE');
    
    message.channel.send(embed_Bal)
    }
  }