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
    const c_eth = db.fetch(`eth.${message.author.id}`) || 0;
    const c_btt = db.fetch(`btt.${message.author.id}`) || 0;
    const doge = ["doge" , "d" , "dogecoin"];
    const btc = ["btc" , "bitcoin" , "sats" , "satoshi"];
    const sto = ["sto" , "stoink"];
    const eth = ["eth" , "ethereum" , "gwei"];
    const safe = ["safe" , "allsafe"];
    const goat = ["goat"];
    const kanda = ["kanda"];
    const bynd = ["bynd" , "beyond" , "beyondcoin"];
    const btt = ["btt" , "bittorent" , "bittorents"];
    
    if(!currency){
    const embed_Bal = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Doge:", value: `**<:doge:786536788768194560>  ${c_doge}**` , inline: false
      },
      {name: "Stoink:", value: `**<a:sto:786546176966918144> ${c_sto}**` , inline: false
      },
      {name: "Telokanda:", value: `**<a:kanda:786546116317282355> ${c_kanda}**` , inline: false
      },
      {name: "Beyondcoin", value: `**${process.env.bynd}${c_bynd}**` , inline: false},
      {name: "Bitcoin" , value: `**${process.env.btc}${c_btc} satoshi**` , inline: false},
      {name: "Allsafe" , value: `**${process.env.safe}${c_safe}**` , inline: false},
      {name: "Goat" , value: `**${process.env.goat}${c_goat}**` , inline: false},
      {name: "Ethereum" , value: `**${process.env.eth}${c_eth} gwei**` , inline: false},
      {name: "Bittorent" , value: `**${process.env.btt}${c_btt}**`, inline: false}
      )
    .setTimestamp()
    .setColor('BLUE');
    
    message.channel.send(embed_Bal);
    }
  else if(doge.includes(currency.toLowerCase())){
const embed_d = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Doge:", value: `<:doge:786536788768194560>  ${c_doge}`
      }
      )
    .setTimestamp()
    .setColor('YELLOW');
    
    message.channel.send(embed_d);
    }
    
   else if(sto.includes(currency.toLowerCase())){
      const embed_s = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Stoink:", value: `<a:sto:786546176966918144> ${c_sto}`
      }

      )
    .setTimestamp()
    .setColor('BLACK');
    
    message.channel.send(embed_s);
    }
    
    
else if(currency.toLowerCase()== "kanda"){
      const embed_k = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Telokanda:", value: `<a:kanda:786546116317282355> ${c_kanda}`
      } 
      )
    .setTimestamp()
    .setColor('ORANGE');
    
    message.channel.send(embed_k);
    }
    
else if(btc.includes(currency.toLowerCase())){
      const embed_b = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Bitcoin:", value: `**${process.env.btc}${c_btc} satoshi**`
      }

      )
    .setTimestamp()
    .setColor('ORANGE');
    
    message.channel.send(embed_b);
    }
 else if(goat.includes(currency.toLowerCase())){
      const embed_g = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Goat Cash:", value: `**${process.env.btc}${c_goat}**`
      }

      )
    .setTimestamp()
    .setColor('GRAY');
    
    message.channel.send(embed_g);
    }
    else if(safe.includes(currency.toLowerCase())){
      const embed_s = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Allsafe:", value: `**${process.env.safe}${c_safe}**`
      }

      )
    .setTimestamp()
    .setColor('WHITE');
    
    message.channel.send(embed_s);
    }
    else if(bynd.includes(currency.toLowerCase())){
      const embed_b = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Beyondcoin:", value: `**${process.env.bynd}${c_bynd}**`
      }

      )
    .setTimestamp()
    .setColor('BLUE');
    
    message.channel.send(embed_b);
    }
    else if(eth.includes(currency.toLowerCase())){
      const embed_e = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Ethereum:", value: `**${process.env.eth}${c_eth} gwei**`
      }

      )
    .setTimestamp()
    .setColor('BLACK');
    
    message.channel.send(embed_e);
    }
    else if(btt.includes(currency.toLowerCase())){
      const embed_b = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag}'s Balance`)
    .addFields(
      {name: "Bittorent:", value: `**${process.env.btt}${c_btt}**`
      }

      )
    .setTimestamp()
    .setColor('WHITE');
    
    message.channel.send(embed_b);
    }
    }
  }