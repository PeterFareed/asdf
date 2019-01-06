const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("516335759188426752")
setInterval(function() {
channel.send(`Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour Nour`);
}, 30)
})

client.login(process.env.BOT_TOKEN);