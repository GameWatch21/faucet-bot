const Discord = require('discord.js');

module.exports = {
  name: 'report',
  description: 'Report if there is any Bug',
  aliases: ['rep'],
  execute(message, args){
     const report = args.slice(0).join(" ");
     if(!report){
       message.reply("Please specify what you want to report")
     }
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} Report Log`)
    .setDescription(`${report}`)
    .setColor(`RED`)
    .setTimestamp();
    message.reply('Thank you for Reporting, we will solve the problem shortly\n\nAlso, please dont spam <:lolhd:786587782264913971>')
     message.guild.channels.cache.get('789463897878429696').send(embed);
     message.guild.channels.cache.get('789463897878429696').send(`<@390755692459589633>`);
  }
}