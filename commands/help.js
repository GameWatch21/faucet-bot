const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Showing all list of the commands',
	aliases: ['h'],
	execute(message, args) {
	  if(!args[0]){
		const helpEmbed = new Discord.MessageEmbed()
			.setTitle(`${message.author.tag}, Help Commands Page 1/1`)
			.setDescription(`Here are the commands:`)
			.setColor('RANDOM')
			.addFields(
				{
					name: 'f!ping',
					value: 'Checking if the bot is online or offline',
					inline: true
				},

				{
					name: 'f!faucet',
					value: 'Claim Fraction of Currency',
					inline: true
				},
				{ name: 'f!balance', value: 'Check your crypto balance', inline: true },
				{
					name: 'f!withdraw',
					value: 'Withdraw your earned crypto\nWithdrawal Option:\n•tip.cc',
					inline: true
				},
				 {name: 'f!statistic' , value: 'See your faucet statistic' , inline: true},
      {name: 'f!donate' , value: 'Have some spare of currency to donate?' , inline: true},
      {name: 'f!warn' , value: 'Warn someone that broke the rule' , inline: true}, 
			{name: "f!prune" , value: "Prune messages", inline: true},
      {name: `f!tip`, value: `Tip other user crypto`, inline: true},
      {name: `f!report`, value: `Report if there is a bug or glitch`, inline: true}
			)
			.setTimestamp()
			.setFooter(process.env.F_CREDIT);
    
		message.channel.send(helpEmbed);
	  }
	  if(args[0] == "admin"){
	    const adminEmbed = new Discord.MessageEmbed()
			.setTitle(`${message.author.tag}, Admin Help Commands Page 1/1`)
			.setDescription(`Here are the commands:`)
			.setColor('RANDOM')
			.addFields(
				{
					name: 'f!admin balance',
					value: 'Check the bot balance with specific currency',
					inline: true
				},

				{
					name: 'f!admin bal',
					value: 'Check the bot balance with specific currency',
					inline: true
				},
				{ name: 'f!admin balances', value: 'Check the bot balances', inline: true },
				{
					name: 'f!admin bals',
					value: 'Check the bot balances',
					inline: true
				},
				 {name: 'f!admin check' , value: 'Check someone balance'},
      {name: 'f!admin statistic' , value: 'Check the faucet bot statistic'},
      {name: 'f!admin stats' , value: 'Check the faucet bot statistic' , inline: true}, 
			{name: "f!admin stat" , value: "Check the faucet bot statistic", inline: true},
      {name: `f!add`, value: `Add someone balance`, inline: true},
      {name: `f!admin reset`, value: `Reset someone balance`, inline: true},
     {name: `f!admin ads`, value: `Set the Advertisement space`, inline: true},
     
     {name: `f!admin announcement`, value: `Send an Announcement message through the bot`, inline: true}
     /*
     {name: `f!admin ads`, value: `Set the Advertisement space`, inline: true}
     */
     
			)
			.setTimestamp()
			.setFooter(process.env.F_CREDIT);
    
		message.channel.send(adminEmbed);
	  }
	}
};
