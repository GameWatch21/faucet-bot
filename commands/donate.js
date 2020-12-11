module.exports = {
  name: "donate",
  description: "Donate to our bot",
  execute(message, args){
    message.channel.send("Thank you!\nIf you want to donate us, please tip your currency to the bot\nWe accept all currency, but the most priority is:\n•DOGE\n•STO\n•KANDA\n\nThank you for your contribution :)")
  }
}