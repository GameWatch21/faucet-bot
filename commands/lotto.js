const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "lottery",
  description: "Play lotter, like a gamble game :lolhd:",
  aliases: ["lotto" , "raffle"],
  execute(message, args){
    
    const joinedPlayer = [];
    const option = args[0];
    const amount = args[1];
    const currency = args[2];
    const playerList = db.fetch(`list`);
    const prize = db.fetch(`prize`) || 0;  
    const lottoEvent = db.fetch('lotto') || "false";
    const userEvent = db.fetch(`status.${message.author.id}`) || "false";
    var user = db.fetch(`user.list`);
function random_winner(win)
{
  
return win[Math.floor(Math.random()*win.length)];
     
}
 if(option == "test"){
  db.set('user', {list: []})
 }
var win = [user];
   
   if(!args.length){
     message.channel.send('Welcome to our Lotto, we have different lotto with other bot, here are the list of the commands:\n```\nf!lotto enter | To enter the game\nf!lotto logout | To logout the previous lotto\n```\n\nLast but not least, Good luck!')
   }
    if(option == "start"){
if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply(
        "**You cant start a lotto**"
      );
    }
      if(lottoEvent == "true"){
        message.channel.send("There is another lotto running");
      }
      
      
      if(!amount) return message.reply("Enter the amount");
      
      if(!currency) return message.reply("Enter the currency");
      
      if(lottoEvent == "false"){
const prizePool = db.fetch(`prize`);
      const entryFee = db.fetch(`amount`)
      const currencies = db.fetch(`currency` , currency);
      db.set(`prize` , prize);
      db.set(`amount` , amount)
      db.set(`currency` , currency);     
      db.set('lotto' , "true");
      message.channel.send(`Hello <@&789022011225407538> , <@${message.author.id}> started an Lotto\nPrize: ${prizePool} ${currency}\nEnter Fee: ${amount} ${currency}\nTime Left: COMING SOON\n\nTo join the lotto, use "f!lotto enter"`);
      }
    }
    if(option == "check"){
      if(lottoEvent == "true"){
const prizePool = db.fetch(`prize`);
      const entryFee = db.fetch(`amount`)
      const currencies = db.fetch(`currency`)
      message.channel.send(`Current Lotto\nPrize: ${prizePool}\nEnter Fee: ${entryFee} ${currencies}\nTime Left: COMING SOON\n\nTo join the lotto, use "f!lotto enter"`);
      }
      if(lottoEvent == "false"){
        
      }
    }
    if(option == "enter"){
      if(lottoEvent == "false"){
        message.reply("Sorry, there is no started lotto now");
      }
      if(lottoEvent == "true"){
        if(userEvent == "false"){
      const currencies = db.fetch(`currency`);
      const entryFee = db.fetch(`amount`);
      const balance = db.fetch(`${currencies}.${message.author.id}`);
      if(balance < entryFee){
        message.reply("You dont have enough crypto to join this lotto");
      }
      if(balance >= entryFee){
        const userID = `${message.author.id}`;
        db.set(`user` , { listing: 'none' });
          db.set(`status.${message.author.id}` , "true");
         db.subtract(`${currencies}.${message.author.id}` , entryFee);
         db.add(`prize` , entryFee);
         db.push(`user.list` , `${message.author.id}`);
           message.reply("You successfuly enter the Lotto, Good luck!\n\nCheck the current lotto using `f!lotto check`");
          }
        }
        }
        if(userEvent == "true"){
          message.reply("Hey, you already join the lotto, check the status with `f!lotto check`");
        }
      
      
      
      
    }
   
    if(option == "end"){
if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply(
        "**You cant end this lotto**"
      );
    }
    if(lottoEvent == "false"){
      message.reply("Hey, there is no Lotto to be ended")
    }
    if(lottoEvent == "true"){
    const user = db.fetch(`user.list`)
    /*const win = Math.floor(user.length * Math.random());   */const currencies = db.fetch('currency');
    const prize = db.fetch('prize');
      db.add(`${currencies}.${random_winner(win)}` , prize);
      db.set(`prize` , 0);
      db.set("lotto" , "false")
      db.delete('user.list')
      message.channel.send(`Congrats, <@${random_winner(win)}> have won ${prize} ${currencies} from the Prize pool\n\nMake sure to use "f!lotto logout" to be able to play again`);
    }
    }
    if(option == "logout"){
      const status = db.fetch(`status.${message.author.id}`);
      /*if(lottoEvent == "false"){
     */
     if(status == "true"){
     db.set(`status.${message.author.id}` , "false");
      message.reply("Successfuly logout");
     }
     if(status == "false"){
       message.reply("You already logout from the last lotto");
     }
     
    }
   
  }
}
