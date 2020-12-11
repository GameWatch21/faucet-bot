module.exports = {
  name: 'purge',
  description: 'Purging messages',
  aliases: ['prune'],
  execute(message, args){
message.delete({ timeout: 3000 });
    const amount = parseInt(args[0]);
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `${message.author},You don't have enough permissions for this command!`
      );

    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount <= 1 || amount > 101) {
      return message.reply("You need to input a number between 2 and 100.");
    }

    message.channel.bulkDelete(amount, true);
    return message
      .reply(`Successfully deleted ${amount} messages.`)
      .then(msg => {
        msg.delete(30000);
      });
  }
}