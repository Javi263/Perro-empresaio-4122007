const Discord = require('discord.js');

module.exports = {
  name: "ban", 
  alias: [], 

execute (client, message, args){

    var botperms = message.guild.me.hasPermission("BAN_MEMBERS")
    if(!botperms) return message.channel.send("No tengo los permisos suficientes")

    var perms = message.member.hasPermission("BAN_MEMBERS")
    if(!perms) return message.channel.send("No tienes los permisos suficientes")

    const ususario = message.mentions.members.first()
    if(!ususario) return message.channel.send("Debes de mencionar al usuario para banear")
    if(ususario.id === message.author.id) return message.channel.send("No te puedes banear a ti mismo")

    const razon = args.slice(1).join(" ")
    if(!razon) return message.channel.send("Debes de escribir la razon de ban")

    ususario.ban({ reason: razon})
    
    message.channel.send(`Se ha baneado al ususario ${ususario} correctamente`)

 }

} 