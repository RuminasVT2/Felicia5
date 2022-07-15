let fetch = require('node-fetch')

let timeout = 180000
let poin = 1000
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
  let id = m.chat
  if (id in conn.tebakgame) {
    conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakgame[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
*「 TEBAK GAME 」*\n
⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}tega Untuk Bantuan
🎁Bonus: ${poin} XP
🎫TiketCoin: ${tiketcoin}
    `.trim()
  conn.tebakgame[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakgame.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgame[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.tebakgame[id][0])
      delete conn.tebakgame[id]
    }, timeout)
  ]
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgame/i
handler.limit = false
handler.group = false
handler.register = true

module.exports = handler