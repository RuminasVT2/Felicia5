let handler = async (m, { conn, text }) => {
  if (global.db.data.users[m.sender].pasangan == "") return conn.reply(m.chat, `*Kamu Sedang Tidak Menembak Siapapun*\n• Untuk Menembak, Ketik #tembak @Tag`, m)
  if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return conn.reply(m.chat, `*Kamu Telah Berpacaran Dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}*`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  conn.reply(m.chat, `*Kamu Sudah Mengikhlaskan @${global.db.data.users[m.sender].pasangan.split('@')[0]} Karena Dia Tidak Memberikan Jawaban Diterima Atau Ditolak*`, m, {contextInfo: {
    mentionedJid: [global.db.data.users[m.sender].pasangan]
  }})
  global.db.data.users[m.sender].pasangan = ""
}
handler.help = ['ikhlasin']
handler.tags = ['jadian']
handler.command = /^(ikhlasin|ikhlas)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.limit = false
handler.register = true
handler.fail = null
module.exports = handler