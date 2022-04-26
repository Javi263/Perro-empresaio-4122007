const Discord = require('discord.js');

module.exports = {
  name: "kick", 
  alias: [], 

execute (client, message, args){

    var botperms = message.guild.me.hasPermission("KICK_MEMBERS")
    if(!botperms) return message.channel.send("No tengo los permisos suficientes")

    var perms = message.member.hasPermission("KICK_MEMBERS")
    if(!perms) return message.channel.send("No tienes los permisos suficientes")

    const usuario = message.mentions.members.first()
    if(!usuario) return message.channel.send("Debes de mencionar al usuario para expulsar")
    if(usuario.id === message.author.id) return message.channel.send("No te puedes expulsar a ti mismo")

    const razon = args.slice(1).join(' ')
    if(!razon) return message.channel.send("Debes de escribir la razon de expulsion")

    message.guild.member(usuario).kick(razon);

    message.channel.send(`Se ha a expulsado al usuario ${usuario} correctamente. cls\nRazon: ${razon}`)

 }

}