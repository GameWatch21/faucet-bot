const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "moderator",
  description: "Moderators command",
  aliases: ["mod" , "mods"],
  execute(message, args){
        if (!message.member.hasPermission(["ADMINISTRATOR" , "KICK_MEMBERS" , "BAN_MEMBERS"]))
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
    const option = args[0];
    if(option == "warn"){
  /*  function getUser(mention) {
    if (!mention) return;
    if (mention.startsWith("<@") && mention.endsWith(">")) {
      var mention = mention.slice(2, -1);
      if (mention.startsWith("!")) {
        mention = mention.slice(1);
      }
      return message.guild.member(message.guild.members.get(mention));
    }
} */
    const user = message.mentions.users.first();
    /*getUser(args[0]) || message.member; */
    
  /*  const embedW = new Discord.RichEmbed()
    .setTitle(`⛔Warning Message⛔`)
    .setColor("RED")
.setDescription(`${user} has been warned`)
    .addField(`Reason:`, `${reason}`)
    .addField(`Warned by:`, `<@${message.author.id}>`)
    .addField(`Warned for:`, `${warnval} time(s)`)
    .setTimestamp()
    .setFooter(`Please dont break the rule again ${user} 😃`);
    
              
    
  var member = message.mentions.members.first(); */
  if(!user){
    message.channel.send("**Mention a user you want to warn**")
  }
    let reason = args.slice(2).join(" ") || "No Reason Attached";
    
    let warnval = db.fetch(`warnval.${user.id}`) || "0";
    if (!message.member.hasPermission(["ADMINISTRATOR" , "KICK_MEMBERS"]))
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
const log = new Discord.MessageEmbed()
    /*.setTitle(`⛔Warning Message⛔`)
 */  
 .setTitle(`Warning Log`)
 .setColor("RED")
.setDescription(`${user} has been warned`)
    .addFields(
      {name:`Reason:`, value:`${reason}`},
      {name:`Warned by:`, value:`<@${message.author.id}>`},
      {name:`Warned for:`, value:`${warnval} time(s)`}
      )
    .setTimestamp();
    /*.setFooter(`Please dont break the rule again ${user.tag} 😃`);*/
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
    message.guild.channels.cache.get('791464228706975744').send(log);
   /*791464228706975744*/
}
if(option == "mute"){
  const mutedRole = message.guild.roles.cache.get('786216082707841075');
  const user = message.mentions.users.first();
  const timer = args[2]
  user.roles.add(mutedRole);
  setTimeout(() => {
  user.roles.remove(mutedRole); // remove the role
}, timer * 1000) 
   message.channel.send(`${user} has been muted for ${timer}s`)
}
if(option == "kick"){
  
}
if(option == "ban"){
  
}
  }
}