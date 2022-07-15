let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `*Masih Ada Vote Di Chat Ini*\n\n*${usedPrefix}hapusvote* - Untuk Menghapus Vote`
    }
    m.reply(`*VOTE DIMULAI*\n\n*${usedPrefix}upvote* - Untuk Ya\n*${usedPrefix}devote* - Untuk Tidak\n*${usedPrefix}cekvote* - Untuk Mengecek Vote\n*${usedPrefix}hapusvote* - Untuk Menghapus Vote`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler
