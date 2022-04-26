const Discord = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["cls"], 

execute (client, message, args){
    
    const botperms = message.guild.me.hasPermission("MANAGE_MESSAGES")
    if(!botperms) return message.channel.send("No tengo los permisos para eleminar mensages.")

    var perms = message.member.hasPermission("MANAGE_MESSAGES")
    if(!perms) return message.channel.send("No tienes los permisos suficientes.")

    const valor = parseInt(args[0]);
    if (!valor) return message.channel.send("Debes de poner la cantidad de mensages a eliminar.")
    if(valor >= 99) return message.channel.send("No puedo eliminar mas de 100 mensages a la vez.")

    message.channel.bulkDelete(valor + 1)
    message.channel.send(`Se han eliminado ${valor} mensages.`)



 }

}