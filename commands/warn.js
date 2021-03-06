const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
  name: "warn",
  description: "Warn bad users",
  guildOnly: true,
  execute(message, args){
    const user = message.mention.users.first();

  if(!user){
    message.channel.send("**Mention a user you want to warn**")
  }
    let reason = args.slice(1).join(" ") || "No Reason Attached";
    
    let warnval = db.fetch(`warnval.${user.id}`) || "0";
    if (!message.member.hasPermission(["ADMINISTRATOR" , "KICK_MEMBERS"]))
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
    const embedW = new Discord.MessageEmbed()
    .setTitle(`⛔Warning Message⛔`)
    .setColor("RED")
.setDescription(`${user} has been warned`)
    .addFields(
      {name:`Reason:`, value:`${reason}`},
      {name:`Warned by:`, value:`<@${message.author.id}>`},
      {name:`Warned for:`, value:`${warnval} time(s)`}
      )
    .setTimestamp()
    .setFooter(`Please dont break the rule again ${user.tag} 😃`);
    
    if (!message.mentions.users.size) {
      return message.channel.send(
        `**You need to mention a user for this command, ${message.author}!**`
      );
    }
    if (!reason) {
      return message.reply(
        "**You need to provide a reason for this command!**"
      );
    }
    if (message.author.id == user.id){
      return message.reply(
        "You can't warn yourself! Unless you have a weird fetish for that, in which case i won't stop you..."
      );
    }
    message.channel.send(embedW);
    db.add(`warnval.${user.id}`, 1);
    user.send(
      `${user}, you were warned in ${message.guild.name}.\nWarned for: ${warnval} time(s)\n Reason: ${reason}.`);
    }
  }