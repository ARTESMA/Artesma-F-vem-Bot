const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 if (!message.member.roles.cache.has("826752305424236566") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().addField("Hatalı Kullanım",`Lütfen Bir Kullanıcı Etiketleyiniz`).setColor("RANDOM"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.roles.add("826752305584013338") // Burayada whitelisti alındıktan sonra verilcek rol
  member.roles.remove("826752305584013335"); //Whitelist kaldırmak içinn buraya idsini yapıştırınız
    const kanal = message.guild.channels.cache.find(c => c.id == "826752305712857109")// Log kanalı idsi
    const embed1 = new Discord.MessageEmbed() 
    .setDescription(`<@!${member.id}> Sunucumuza Hoşgeldin Seninle Beraber \`${member.guild.memberCount}\` Kişi Olduk \n <#812223617273823242> Kanalından Kuralları Okumayı Unutma`)
    .setColor("RANDOM")
  let embed = new Discord.MessageEmbed() 
  .setColor("RANDOM")
  .setTimestamp()
  .addField(`Kayıt İşlemi Başarılı`, `<@!${member.id}> **Adlı Kullanıcıya <@&812221731367682058> Rolünü Verdim**`) 
  .setFooter(`Komutu Kullanan Yetkili : ${message.author.username}` ,message.author.avatarURL({dynamic: true }))
  return message.channel.send(embed).then(kanal.send(embed1)).then(m => m.delete({timeout: 20000}));
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: 'wls',

}