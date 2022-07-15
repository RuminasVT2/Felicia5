let handler = async (m, { conn, text, command }) => {
let jawab = ['Detik', 'Menit', 'Jam', 'Hari', 'Minggu', 'Bulan', 'Tahun', 'Dekade', 'Abad']
let kapan = jawab[Math.floor(Math.random() * jawab.length)]
  conn.reply(m.chat, `
*❓ Pertanyaan:* ${command} ${text}
*❗ Jawaban:* ${Math.floor(Math.random() * 1000)} ${kapan} Lagi
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['kerang']

handler.command = /^kapan(kah)?$/i
handler.limit = false
handler.register = true

handler.fail = null

module.exports = handler


