const Discord = require ("discord.js");

exports.run = (client, message) => {
   
const mhelp = new Discord.MessageEmbed()
.setColor("WHİTE")
.setTitle("SoftRP AKTİF! Sunucuya giriş yapabilirsiniz.")
.setDescription(`
    TeamSpeak 3 IP : 1
    Sunucu IP: connect 194.5.
`) 
.addField(`SOFT ROLEPLAY DİSCORD ADRESİ`, `**[DİSCORD](https://discord.gg/K8MpZJupBD)**`)
.setFooter(`SOFT ROLEPLAY AKTİF ! `)
.setImage(`https://media.giphy.com/media/iqDExA1QIB1YLmXCmC/giphy.gif`)
message.channel.send("@everyone")
message.channel.send(mhelp)

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["aktif"], 
    permLevel: 3
  };
 
  exports.help = {
    name: 'aktif', 
    description: '',
    usage: 'aktif'
  };