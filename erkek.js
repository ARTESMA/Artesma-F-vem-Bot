const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has("826752305424236566") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Bir Kullanıcı Etiketleyiniz`).setColor("RANDOM"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  let hex = args[1];
      if(!hex) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen kişinin Hex idsini giriniz`).setColor("RANDOM")).then(m => m.delete({timeout: 5000}));
  member.roles.add("826752305584013335"); 
  member.roles.remove("826752305584013338");
    const kanal = message.guild.channels.cache.find(c => c.id == "826752305712857108")//Log kanalı idsi Hydraxxd
    const embed1 = new Discord.MessageEmbed() 
    .addField(`Kayıt İşlemi Başarılı`, `<@!${member.id}> **Adlı Kullanıcıya <@&812221731367682058> Rolünü Verdim.**Kişinin HEX:\`${hex}\``) 
    .setColor("RANDOM")
    .setFooter(`Komutu Kullanan Yetkili : ${message.author.username}` ,message.author.avatarURL({dynamic: true }))
    let embed = new Discord.MessageEmbed() 
    .setColor("RANDOM")
    .setTimestamp()
    .addField(`Kayıt İşlemi Başarılı. Kayıt loglara gönderildi.`) 
    .setFooter(`Komutu Kullanan Yetkili : ${message.author.username}` ,message.author.avatarURL({dynamic: true }))
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete({timeout: 20000}));
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["wlv"],
  permLevel: 0
}
exports.help = {
  name: 'wl',

}