const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "balance",
  description: "Check your balance",
  aliases: ["bal" , "bals" , "balances"],
  execute(message, args){
    const currency = args[0];
    const c_doge = db.fetch(`doge.${message.author.id}`) || 0;
    const c_bynd = db.fetch(`bynd.${message.author.id}`) || 0;
    const c_kanda = db.fetch(`kanda.${message.author.id}`) || 0;
    const c_sto = db.fetch(`sto.${message.author.id}`) || 0;
    const c_btc = db.fetch(`btc.${message.author.id}`) || 0;
    const c_safe = db.fetch(`safe.${message.author.id}`) || 0;
    const c_goat = db.fetch(`goat.${message.author.id}`) || 0;
    
    if(!currency){
    const embed_Bal = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Doge:", value: `**<:doge:786536788768194560>  ${c_doge}**`
      },
      {name: "Stoink:", value: `**<a:sto:786546176966918144> ${c_sto}**`
      },
      {name: "Telokanda:", value: `**<a:kanda:786546116317282355> ${c_kanda}**`
      },
      {name: "Beyondcoin", value: `**${process.env.bynd}${c_bynd}**`},
      {name: "Bitcoin" , value: `**${process.env.btc}${c_btc} satoshi**`},
      {name: "Allsafe" , value: `**${process.env.safe}${c_safe}**`},
      {name: "Goat" , value: `**${process.env.goat}${c_goat}**`}
      )
    .setTimestamp()
    .setColor('BLUE');
    
    message.channel.send(embed_Bal);
    }
  else  if(currency.toLowerCase() == "doge"){
const embed_d = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      }
     /* {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      },
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      } */
      )
    .setTimestamp()
    .setColor('YELLOW');
    
    message.channel.send(embed_d);
    }/*
    if(currency == "DOGE"){
const embed_d = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      }
     /* {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      },
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      } 
      )
    .setTimestamp()
    .setColor('YELLOW');
    
    message.channel.send(embed_d);
    }*/
   else  if(currency.toLowerCase() == "sto"){
      const embed_s = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      /*{name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      }, */
      {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      }/*
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      } */
      )
    .setTimestamp()
    .setColor('BLACK');
    
    message.channel.send(embed_s);
    }/*
    if(currency == "STO"){
      const embed_s = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      /*{name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      }, 
      {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      }
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      } 
      )
    .setTimestamp()
    .setColor('BLACK');
    
    message.channel.send(embed_s);
    }
    */
else if(currency.toLowerCase()== "kanda"){
      const embed_k = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      /*{name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      }, 
      {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      }*/
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      } 
      )
    .setTimestamp()
    .setColor('ORANGE');
    
    message.channel.send(embed_k);
    }
    
else if(currency.toLowerCase() == "btc"){
      const embed_b = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Bitcoin:", value: `**${process.env.btc}${c_btc} satoshi**`
      }/* 
      {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      }
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      } */
      )
    .setTimestamp()
    .setColor('ORANGE');
    
    message.channel.send(embed_b);
    }
    /*
    if(currency == "KANDA"){
      const embed_k = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      /*{name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      }, 
      {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      }
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      } 
      )
    .setTimestamp()
    .setColor('ORANGE');
    
    message.channel.send(embed_k);
    }*/
    
    }
  }