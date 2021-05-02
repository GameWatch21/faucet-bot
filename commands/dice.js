const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "dice",
  description: "Gamble your money and earn 2x from your bet",
  aliases: ["d"],
  execute(message, args){

    var array = [0, 1, 2, 3, 4, 5, 6];

    var random = [Math.floor(array.length * Math.random())];
    var amount = args[0];
    
    var author = db.fetch(`usd.${message.author.id}`) || 0;
 if(!currency){
   return message.reply("**Choose your currency you want to bet with**")
   }

    if (author < amount) {
      return message.reply(
        "**The amount your betting on is more than your balance!**"
      );
    }
    if (!amount) {
      return message.reply("**You must type in a number!**");
    }
    
     if (author >= amount){
     if (random < 3) {
     db.add(`usd.${message.author.id}`, amount);
     var total = Math.floor(`${author}` + `${amount}`);
    const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} rolled a dice and get number ${random}, and won!`,
          message.author.avatarURL
        )
        .setDescription(`Win`)
        .addFields(
          {name:"Profit:" , value: `${amount}`},
        {name:"Current Balance:", value: `${total}`}
        )
        .setColor("GREEN")
        .setFooter("Created by GameWatch21");
      message.channel.send(embed); 
    }
    if (random > 4) {
      db.subtract(`usd.${message.author.id}`, amount);
      const total = Math.floor(author - amount);
      const embed = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} rolled a dice and get number ${random}, and lost!`,
          message.author.avatarURL
        )
        .setDescription(`Lost`)
        .addFields(
          {name:"Loss:" , value: `${amount}`},
        {name: "Current Balance", value: `${total}`}
    )
        .setColor("RED")
        .setFooter("Created by GameWatch21");
      message.channel.send(embed);
    
    }
    }
  }
  
}