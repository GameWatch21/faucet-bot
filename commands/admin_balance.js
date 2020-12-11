module.exports = {
  name: "admin_balance",
  description: "checking the bot balances",
  execute(message, args){
    message.channel.send("$bals")
    }
  }