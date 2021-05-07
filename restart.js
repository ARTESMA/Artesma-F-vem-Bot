const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RED") 
.setTitle("SOFT ROLEPLAY ")
.setDescription(`RESTART GELİYOOR LÜTFEN ÇIKIŞ YAPINIZ`)
.addField(`SOFT ROLEPLAY DİSCORD LİNKİ`, `**[DİSCORD](https://discord.gg/K8MpZJupBD)**`)
.setImage(`https://media.giphy.com/media/iqDExA1QIB1YLmXCmC/giphy.gif`)
message.channel.send("@everyone")
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()








}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["restart"], 
    permLevel: 2 
  };
 
  exports.help = {
    name: 'restart', 
    description: '',
    usage: 'restart'
  };