module.exports = {
  name: "admin_balance",
  description: "checking the bot balances",
  aliases: ["a_bal" , "admin" , "a_bals"],
  execute(message, args){
  if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply(
        "**You don't have enough permissions for this command!**"
      );
    message.channel.send("$bals")
    }
  }