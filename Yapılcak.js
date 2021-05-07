const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.has("826752305424236566")) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanmak için **Rolleri Yönet** yetkisine sahip olmalısın.').setColor(10038562));
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!rMember) return message.channel.send(new Discord.MessageEmbed().setDescription(`Lütfen bir kullanıcı ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL()).setTimestamp());
    let role = message.mentions.roles.first()
    if (!role) return message.channel.send(new Discord.MessageEmbed().setDescription(`Lütfen bir rol ismi gir.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL()).setTimestamp());
    let aRole = message.mentions.roles.first()
    if (!aRole) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu rolü bulamıyorum.\nÖrnek: ` + ayarlar.prefix + `rolver **@İsim @Yetki**`).setColor(10038562).setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL()).setTimestamp());
    if (rMember.roles.cache.has(aRole.id)) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu kullanıcı zaten bu rolde.').setColor(10038562));
    await (rMember.roles.removeRole(aRole.id))
    message.channel.send(new Discord.MessageEmbed().setDescription(`${rMember} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi! ✅`).setColor('RANDOM'));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolsil'],
  permLevel: "0"
};

exports.help = {
  name: "rolal",
  description: "Kişilere Rol Yetkisi Verir",
  usage: "rolver <mesaj>"
};