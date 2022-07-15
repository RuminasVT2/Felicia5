const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.tebaklirik) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebaklirik[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
*「 TEBAK LIRIK LAGU 」*\n
*${json.soal}*

⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}teli Untuk Bantuan
🎁Bonus: ${poin} XP
🎫TiketCoin: 1 Tiketcoin
    `.trim()
    conn.tebaklirik[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebaklirik[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.tebaklirik[id][0])
            delete conn.tebaklirik[id]
        }, timeout)
    ]
}
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i
handler.limit = false
handler.group = false
handler.register = true

module.exports = handler