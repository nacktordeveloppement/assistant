const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Le bot est bien activé");
    bot.user.setActivity("by Nacktor");
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find("id", "465323709796843531");
    const regle = member.guild.channels.find("id", "465332207100100609");
    channel.send(`Bienvenue **${member}**, sur le serveur **${member.guild.name}**! N'hésite pas a allé lire le ${regle} pour ne pas avoir de problèmes! Nous somme maintenant **${member.guild.members.size}** membres sur le serveur!`);
});

bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find("id", "465323709796843531");
    const role = member.guild.roles.find('name', "Membre");
    channel.send(`Aurevoir **${member}**, Nous avons perdut un membre nous somme maintenant **${member.guild.members.size}** membres sur le serveur!`);
    member.addRole(role);
});

bot.login(process.env.TOKEN);
