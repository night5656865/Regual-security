const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async bot => {
  //bot.shard.fetchClientValues("guilds.size").then(async results => {
  //bot.shard.fetchClientValues("users.size").then(async results2 => {
//  let shardi = bot.shard.id + 1;
  var oyun = [
    "Tr Lang En Lang !!lang",
    "Producer:ᘜᙢ Night ☫",
    "AutoTag System",
    "Faster Security System!",
    "I am active 24/7",
    "!!help | !!invite | !!prefix",
    //Shard: ${shardi}/${bot.shard.count},
    //${bot.guilds.size.toLocaleString()} Guilds! ${bot.guilds
      //.reduce((a, b) => a + b.memberCount, 0)
      //.toLocaleString()} Members!
    //${bot.guilds.size.toLocaleString()} sunucu, ${bot.guilds
      //.reduce((a, b) => a + b.memberCount, 0)
      //.toLocaleString()} kullanıcı!
  ];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    bot.user.setActivity(oyun[random], { type: "PLAYING" });
  }, 12000);
  bot.user.setStatus("dnd");
  //});
  //});
};