let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`*Limit Kamu ${global.db.data.users[who].limit}*\n\nBeli Limit: #buy jumlahlimit\n• Contoh: #buy 10\n\n1 Limit🎟️ = 999 Money💵`)
}
handler.help = ['limit [@user]']
handler.tags = ['xp','rpg']
handler.command = /^(limit)$/i
module.exports = handler
handler.register = true