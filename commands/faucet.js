const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
  name: "faucet",
  description: "Claim Doge every hour",
  guildOnly: true,
  aliases: ["claim"],
  execute(message, args){
   if(message.channel.type == "dm"){
      message.reply("You cant claim Faucet on DM")
    }
    const reward_doge = 0.1
    const reward_kanda = 5
    const reward_sto = 5
    const emoji_doge = process.env.doge
    const emoji_kanda = process.env.kanda
    const emoji_sto = process.env.sto
    
    let timeout = 3500000;
    let daily =  db.get(`timer.${message.author.id}`);
    if(message.channel.type == "text"){
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
      return message.channel.send(
        `**You already claimed your reward. Come back in ${time.hours}h ${time.minutes}m ${time.seconds}s**\n\n[OPENING ADS SPACE HERE]\nContact "GameWatch21#2121" for Renting Ads`
      );
    }
    
    if(!args[0]){
      message.reply("These are the coin you can claim `doge` , `kanda` and `sto`\nUse `f!faucet [CURRENCY]`")
      }
   if(args[0] == "doge"){
  db.add(`doge.${message.author.id}`, reward_doge);
  db.add(`claims.${message.author.id}` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${emoji_doge}${reward_doge}** DOGE\n\n[OPENING ADS SPACE HERE]\nContact "GameWatch21#2121" for Renting`);
     }
if(args[0] == "DOGE"){
  db.add(`doge.${message.author.id}`, reward_doge);
  db.add(`claims.${message.author.id}` , 1);
db.set(`timer.${message.author.id}`, Date.now());
     message.reply(`earned **${emoji_doge}${reward_doge}** DOGE\n\n[OPENING ADS SPACE HERE]\nContact "GameWatch21#2121" for Renting`);
     }
    if(args[0] == "sto"){    
      db.add(`sto.${message.author.id}`, reward_sto);
      db.add(`claims.${message.author.id}`, 1);
    db.set(`timer.${message.author.id}`, Date.now());                       
    message.reply(`earned **${emoji_sto}${reward_sto}** STO\n\n[OPENING ADS SPACE]\nContact "GameWatch21#2121" for Renting`);
      }
 if(args[0] == "STO"){    
      db.add(`sto.${message.author.id}`, reward_sto);
      db.add(`claims.${message.author.id}`, 1);
    db.set(`timer.${message.author.id}`, Date.now());                       
    message.reply(`earned **${emoji_sto}${reward_sto}** STO\n\n[OPENING ADS SPACE]\nContact "GameWatch21#2121" for Renting`);
      }
    if(args[0] == "kanda"){
 db.add(`kanda.${message.author.id}`, reward_kanda);
 db.add(`claims.${message.author.id}`, 1);
 db.set(`timer.${message.author.id}`, Date.now());
      message.reply(`earned **${emoji_kanda}${reward_kanda}** KANDA\n\n[OPENING ADS SPACE]\nContact "GameWatch21#2121" for Renting`);
      }
 if(args[0] == "KANDA"){
 db.add(`kanda.${message.author.id}`, reward_kanda);
 db.add(`claims.${message.author.id}`, 1);
 db.set(`timer.${message.author.id}`, Date.now());
      message.reply(`earned **${emoji_kanda}${reward_kanda}** KANDA\n\n[OPENING ADS SPACE]\nContact "GameWatch21#2121" for Renting`);
}
    }
    }
  }