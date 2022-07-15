let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw '*Pengguna Tidak Ada Didalam Data Base*'
    m.reply(`*「 CHECK COUPON 」*\n\nCupon Kamu ${global.db.data.users[who].cupon}\n\nInformation:\nCupon Ini Adalah Sebuah Hadiah Dari Owner\nCara Menggunakan: #open cupon 1`)
}
handler.help = ['cupon [@user]']
handler.tags = ['xp']
handler.command = /^(cupon)$/i
handler.limit = false
handler.register = true
module.exports = handler
