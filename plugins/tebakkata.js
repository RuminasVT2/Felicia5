let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakkata[id][0])
        throw false
    }
   let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*「 TEBAK  KATA 」*\n
*${json.soal}*\n
⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}teka Untuk Bantuan
🎁Bonus: ${poin} XP
🎫Tiketcoin: 1 Tiketcoin
`.trim()
    conn.tebakkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i
handler.limit = false
handler.group = false
handler.register = true

module.exports = handler