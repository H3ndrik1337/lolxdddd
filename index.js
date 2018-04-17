const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message) {
    console.log(message.content);
});

client.login(process.env.TOKEN);
