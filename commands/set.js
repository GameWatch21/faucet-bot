const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();

module.exports = {
  name: "set",
  description: "Set the bot",
  execute(message, args){
    let submit = args.slice(1).join(" ");
    let option = args[0]
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
    }
    if(option == "username"){
client.user.setUsername(submit)
  .then(user => console.log(`My new username is ${user.username}`))
  .catch(console.error);
    }
    if(option == "icon"){
client.user.setAvatar(submit)
  .then(user => console.log(`New avatar set!`))
  .catch(console.error);
    }
  }
}