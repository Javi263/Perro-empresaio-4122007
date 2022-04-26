const Discord = require("discord.js") 
const client = new Discord.Client();

const fs = require('fs')
let { readdirSync } = require('fs');
const { type } = require("os");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.on("ready", () => {
  function presence(){
    client.user.setPresence({
      status: "on",
      activity: {
        name: "Programando un bot",
        type: "PLAYING"
      }

    })
  }
  presence();

  console.log("Listo pa kchar")
})

client.on("message", (message) =>{

    if(message.channel.type === 'dm') return;

    let prefix = "."

    if(message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;

    let usuario = message.mentions.members.first() || message.member;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    //comandos de bobadas :V
    
    if(command === "poto"){
      message.reply("no")
    }

    if(command === "pene"){
      message.reply("no")
    }

    if(command === "vagina"){
      message.reply("no")
    }

    //comandos de bobadas :V
    
    
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
      cmd.execute(client, message, args)
    }

})

//Bienvenidas :V

client.on("guildMemberAdd", (member) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Bienvenido a este servidor")
  .setDescription(`Bienvenido ${member}, espero que te guste mucho, aqui tan las reglas <#905622493090443396>`)
  .setFooter("Bienvenido!")
  .setTimestamp()
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
  .setColor("RANDOM")

  client.channels.cache.get("905623561249640448").send(embed)
})

client.on("guildMemberRemove", (member) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Chau puta resultarte ser una puta")
  .setDescription(`Adios ${member} espero que te corten el pilin`)
  .setFooter("Adios!")
  .setTimestamp()
  .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
  .setColor("RANDOM")

  client.channels.cache.get("905623829605388308").send(embed)
})

//Despedidas :V





client.login("Token")