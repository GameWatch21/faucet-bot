const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "roll",
  description: "Roll a dice",
  execute(message, args){
   var array = [0, 1, 2, 3, 4, 5, 6];
    var random = [Math.floor(array.length * Math.random())];
    message.channel.send(`🎲You rolled **${random}**🎲`)
  }
}