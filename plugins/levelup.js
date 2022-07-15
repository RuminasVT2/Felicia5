let levelling = require('../lib/levelling')

let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    throw `*「 LEVELING UP 」*\n
Level *${user.level} (${user.exp - min}/${xp})*
Kurang *${max - user.exp}* EXP Lagi\n\nTips:\n*Mainkan Game Ataupun RPG Untuk Mendapatkan EXP 
`.trim()
  }
  let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) {
            m.reply(`*「 LEVELING UP 」*\n
Selamat, Anda Telah Naik Level
Dari Level *${before}* Ke Level *${user.level}*\n
Gunakan #profile Untuk Mengecek
	`.trim())
        }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i
handler.register = true
module.exports = handler
