let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
  let id = m.chat
  if (id in conn.tebakanime) {
    conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakanime[id][0])
    throw false
  }
  let res = await fetch(global.API('restapi', '/api/tebak-anime', {}, 'apikey'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  // if (!json.status) throw json
  let caption = `
*「 TEBAK ANIME 」*\n
⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}nime Untuk Clue
🎁Bonus: ${poin} XP
🎫TiketCoin: ${tiketcoin}
    `.trim()
  conn.tebakanime[id] = [
    await conn.sendFile(m.chat, json.soal, 'tebakanime.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakanime[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.tebakanime[id][0])
      delete conn.tebakanime[id]
    }, timeout)
  ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i
handler.limit = false
handler.group = false
handler.register = true
module.exports = handler