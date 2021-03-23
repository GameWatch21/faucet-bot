const Discord = require("discord.js");
const db = require("quick.db");


module.exports = {
  name: "admin",
  description: "checking the bot balances",
  aliases: ["a" , "ad"],
  execute(message, args){
    if(message.channel.type == "dm"){
      message.reply("You cant claim Faucet on DM");
    }
  if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
      // [VARIABLES]
       const user = message.mentions.users.first();
      const option = args[0];
      const option2 = args[1];
      const currency = args[2];
      const input = args[3];
      const claim_stats = db.fetch(`claims.global`) || 0;
      const stats_usd = db.fetch(`w_usd.stats`) || 0;
      const stats = ["stats" , "statistic" , "stat" , "statistics"];
      const ann = ["ann" , "announcement" , "announce" , "announces" , "announcements"];
      const delet = ["delete" , "delet" , "del" , "take"];
      const bal = ["bal" , "balance"];
      const bals = ["bals" , "balances"];
      const withdraw = ["with" , "withdraw"];
      const database = ["usd"];
      const switching = ["on" , "off"];
      const whitelisted=['390755692459589633' , '743409861131239484' , '476674050559836160'];
    // [MAIN FUNCTION]
    
    // [HELP COMMAND]
    if(option.toLowerCase() == "help"){
      message.channel.send("Check out `f!help admin`")
    }
    // [CHECKING BOT BALANCE]
    if(bal.includes(option.toLowerCase())){
      if(!option2){
        message.channel.send("$bal");
      }
    else  message.channel.send(`$bal ${option2}`);
    }
    if(bals.includes(option.toLowerCase())){
    message.channel.send("$bals top");
    }
    // [WITHDRAWAL COMMAND]
    if(withdraw.includes(option.toLowerCase())){
    // [VARIABLES]
    const arg = args.slice(1).join(" ");
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)");
    if(whitelisted.includes(message.author.id)){
    message.channel.send(`$tip <@${message.author.id}> ${arg}`);
    }
}
  // [STATISTIC COMMANDS]
  if(stats.includes(option.toLowerCase())){
    // [DISCORD EMBED]
    const embed = new Discord.MessageEmbed()
    .setTitle(`Faucet Statistic`)
   .addFields(
    {name: `💵 USD Earned` , value: `${process.env.usd}${stats_usd}`},

     {name: `Faucet Claimed:` , value: `${claim_stats}` , inline: true}
     )
     .setTimestamp()
     .setColor("GREEN");
    // [SENDING FUNCTION]
    message.channel.send(embed);
  }
  // [ANNOUNCEMENT COMMAND]
  if(ann.includes(option.toLowerCase())){
    // [VARIABLES]
    const arg = args.slice(1).join(" ");
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)");
    if(whitelisted.includes(message.author.id)){
    message.guild.channels.cache.get('786285618899451904').send(`${arg}`);
    }
  }
  // [RESET COMMAND]
  if(option == 'reset'){
    // [VARIABLES]
    const currency = args[1];
    const user = message.mentions.users.first();
    
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)");
    if(whitelisted.includes(message.author.id)){
    if(!user){
      message.reply("Mention a user you want to reset");
    }
    
    db.delete(`usd.${user.id}`);
    message.channel.send(`${user.tag}'s USD balance is reseted`);
    }
  }
  // [CHECK COMMAND]
  if(option == 'check'){
    // [VARIABLES]
    const user = message.mentions.users.first();
    const c_usd = db.fetch(`usd.${user.id}`) || 0;
    // [DISCORD EMBED]
    const embed_Bal = new Discord.MessageEmbed()
    .setTitle(`${user.tag}'s Balance`)
    .addFields(
      {name: "USD:", value: `${process.env.usd} ${c_usd}`
      }
      )
    .setTimestamp()
    .setColor('BLUE');
    if(!user){
      message.reply("Tag the user you want to check his/her balance");
    }
   else message.channel.send(embed_Bal);
    
  }
  // [SET FAUCET REWARD]
  if(option == "set"){
    // [VARIABLES]
    const total = db.fetch(`faucet_usd`);
    const amount = args[1].toLowerCase();
    
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)");
    if(whitelisted.includes(message.author.id)){
    if(isNaN(amount)){
     message.reply("**Please provide a proper amount!**");
    }
    if(!amount){
      message.reply("Specify the amount for faucet reward");
    }
    
    db.set(`faucet_usd` , `${amount}`);
     message.reply(`**USD** reward has been set to **${amount}**`);
    }
  }
  if(option == "ads"){
    const arg = args.slice(1).join(" ");
    
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)");
    if (whitelisted.includes(message.author.id)){
    db.set(`ads_text` , `${arg}`);
    message.reply(`Advertisement Text has been set to: ${arg}`);
    }
  }
  if(option == "timer"){
    const user = message.mentions.users.first();
    
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)");
    if (whitelisted.includes(message.author.id)){
    db.delete(`timer.${user.id}`);
    message.reply(`${user.tag} timer has been reseted`);
    }
  }
  // [CHECK FAUCET STATUS COMMAND]
  if(option == "faucet"){
    // [VARIABLES]
    const usd = db.fetch("faucet_usd");
    const status = db.fetch(`status`);
    message.channel.send(`Faucet Status: **${status.toUpperCase()}**\nCurrent Claim Rewards:\`\`\`\n•USD: ${usd}\n\`\`\``);
  }
  // [SAY COMMAND]
  if(option.toLowerCase() == "say"){
    // [VARIABLES]
    const arg = args.slice(1).join(" ");
    
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)");
    if(!arg){
      message.reply("What you want me to say?")
    }
    if (whitelisted.includes(message.author.id)){
    message.channel.send(arg);
    }
  }
  if(option.toLowerCase() == "status"){
    const status = args[1];
    
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)");
    if (whitelisted.includes(message.author.id)){
    if(!switching.includes(option2.toLowerCase())){
      message.reply("You can switch the faucet to on/off");
    }
    if(switching.includes(option2.toLowerCase())){
      message.channel.send(`The faucet is now set to \`${option2}\``)
      db.set("status" , `${option2.toLowerCase()}`);
    }
    }
    
  }
  if(option.toLowerCase() == "add"){
    // [THE SIDE FUNCTION]
    // [VARIABLES]
    let amount = args[2];
    let taggedUser = message.mentions.users.first();
    
   // [IF AND CHECKING STATEMENT]
   if (!whitelisted.includes(message.author.id)) return message.reply("Only some admin who can use this Command :)")
    
    if (isNaN(amount))
      return message.reply("**Please provide a proper number!**");

  // [THE MAIN FUNCTION]
      if(whitelisted.includes(message.author.id)){
      message.channel.send(`Added ${amount} USD to ${taggedUser.username}'s account.`);
      db.add(`usd.${taggedUser.id}` , amount);
      
  }
  }
  if(delet.includes(option.toLowerCase())){
    let amount = args[2];
    let taggedUser = message.mentions.users.first();
    
     if (!whitelisted.includes(message.author.id)) return message.reply("Only GameWatch21 and Joel who can use this Command :)")
    
    if (isNaN(amount))
      return message.reply("**Please provide a proper number!**");
    
    if(whitelisted.includes(message.author.id)){
      message.channel.send(`${amount} USD has been taken from ${taggedUser.username}'s Account`);
      db.subtract(`usd.${taggedUser.id}` , amount);
    }
  }
      }
};