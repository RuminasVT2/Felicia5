let timeout = 60000
let poin = 500
let poin_lose = -100
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Selesaikan suit mu yang sebelumnya'
  if (!m.mentionedJid[0]) return m.reply(`*Tag Orang Yang Ingin Diajak Main*\n\n • Contoh\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*Dia Sedang Bermain Suit Dengan Orang Lain*`
  let id = 'suit_' + new Date() * 1
  let caption = `
*「 SUIT PVP 」*

*@${m.sender.split`@`[0]} Menantang @${m.mentionedJid[0].split`@`[0]} Untuk Bermain Suit*

Silahkan @${m.mentionedJid[0].split`@`[0]} 
`.trim()
  let footer = ` • Ketik "terima/ok/gas" Untuk Memulai Suit\n • Ketik "tolak/gabisa/nanti" Untuk Menolak`
  conn.suit[id] = {
    chat: await conn.sendButton(m.chat, caption, wm, null, [[ 'TERIMA', 'ok'], [ 'TOLAK', 'tolak']], m, { mentions: conn.parseMention(caption) }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `*Waktu Suit Habis*`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp'].map(v => v + ' @tag')
handler.command = /^suitpvp$/i
handler.register = true
handler.group = true
handler.limit = true

module.exports = handler
