const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RED") 
.setTitle("SOFT ROLEPLAY BAKIMDA")
.setDescription(`SUNUCU BAKIMDA !`)
.addField(`SOFT ROLEPLAY DİSCORD ADRESİ`, `**[DİSCORD](https://discord.gg/K8MpZJupBD)**`)
.setFooter(`SOFT ROLEPLAY BAKIMDA !`)
.setImage(`https://media.giphy.com/media/iqDExA1QIB1YLmXCmC/giphy.gif`)
message.channel.send("@everyone")
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["bakım"], 
    permLevel: 2 
  };
 
  exports.help = {
    name: 'bakım', 
    description: '',
    usage: 'bakım'
  };