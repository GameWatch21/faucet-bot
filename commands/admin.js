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
    if(option == "balance"){
    message.channel.send("$bals");
    }
if(option == "bal"){
    message.channel.send("$bals");
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
    message.channel.send(`Global Statistic from Faucet\nWithdrawed Currency:\nDOGE: ${stats_doge}\nSTO: ${stats_sto}\nKANDA: ${stats_kanda}\n\nThe faucet has been used for ${claim_stats} times`)
  }
  if(option == "stats"){
    message.channel.send(`Global Statistic from Faucet\nWithdrawed Currency:\nDOGE: ${stats_doge}\nSTO: ${stats_sto}\nKANDA: ${stats_kanda}\n\nThe faucet has been used for ${claim_stats} times`)
  }
  if(option == "statistic"){
    message.channel.send(`Global Statistic from Faucet\nWithdrawed Currency:\nDOGE: ${stats_doge}\nSTO: ${stats_sto}\nKANDA: ${stats_kanda}\n\nThe faucet has been used for ${claim_stats} times`)
  }
      }
} 
  