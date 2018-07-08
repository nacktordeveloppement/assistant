const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Le bot est bien activé");
    bot.user.setActivity("by Nacktor");
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find("id", "465323709796843531");
    const regle = member.guild.channels.find("id", "465332207100100609");
    channel.send(`Bienvenue **${member}**, sur le serveur **${member.guild.name}**! N'hésite pas a allé lire le ${regle} pour ne pas avoir de problèmes!`);
});

bot.login("NDY1MzM1MDM2MzAxMDE3MDk4.DiMAiw.DWUypP7i6CZm5DUGy-Qu0Oyi8zE");
