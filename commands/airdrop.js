const cron = require('node-cron');
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "airdrop",
  description: "Airdrop your crypto",
  execute(message, args){
var task = cron.schedule('* * * * *', () =>  {
  console.log('');
}, {
  scheduled: false
});

task.start();
  }
}