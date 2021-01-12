const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setDescription(
      `[Click!](http://bit.ly/regual)`
      )

    .setColor("BLACK")
    .setFooter(client.user.username, client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
