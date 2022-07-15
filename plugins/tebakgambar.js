let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakgambar[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
*「 TEBAK GAMBAR 」*\n
*${json.deskripsi}*\n
⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}hint Untuk Bantuan
🎁Bonus: ${poin} XP
🎫Tiketcoin: 1 Tiketcoin
    `.trim()
  conn.tebakgambar[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakgambar.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgambar[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i
handler.limit = false
handler.group = false
handler.register = true

module.exports = handler