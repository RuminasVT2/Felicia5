
let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, '*Example: #pesan nomor|teks*', m)
    if (!pesan) return conn.reply(m.chat, '*Example: #pesan nomor|teks*', m)
    if (text > 500) return conn.reply(m.chat, '*Batas 500 Teks*', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 MESSAGE RECEIVED 」*\n\n• Dari : wa.me/${korban}\n• Pesan : ${pesan}\n\n*${global.wm}*`

    conn.reply(korban + '@s.whatsapp.net', spam1, m)

    let logs = `*✉️ Berhasil Mengirim Pesan Wa Ke Nomor ${korban}*`
    conn.reply(m.chat, logs, m)
}
handler.command = /^(pesan)$/i
handler.rowner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
