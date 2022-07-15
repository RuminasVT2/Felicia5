let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.caklontong = conn.caklontong ? conn.caklontong : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.caklontong[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `    
*「 CAK LONTONG 」*

*${json.soal}*

⏱️Timeout: ${(timeout / 1000).toFixed(2)} Detik
🔎Ketik: ${usedPrefix}calo Untuk Bantuan
🎁Bonus: ${poin} XP
🎫Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
    conn.caklontong[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.caklontong[id]) conn.reply(m.chat, `⏱️Waktu Habis\nJawabannya Adalah *${json.jawaban}*\n${json.deskripsi}`, conn.caklontong[id][0])
            delete conn.caklontong[id]
        }, timeout)
    ]
}
handler.help = ['caklontong']
handler.tags = ['game']
handler.command = /^caklontong/i
handler.limit = false
handler.register = true
module.exports = handler