const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Showing all list of the commands',
	aliases: ['h'],
	execute(message, args) {
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
			{name: "f!prune" , value: "Prune messages", inline: true}
			)
			.setTimestamp()
			.setFooter(process.env.F_CREDIT);

		message.channel.send(helpEmbed);
	}
};
