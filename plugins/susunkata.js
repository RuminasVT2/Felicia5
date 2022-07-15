let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.susunkata[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `    
*「 SUSUN KATA 」*

*${json.soal}*

🛅Tipe : ${json.tipe}
⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}suska Untuk Bantuan
🎁Bonus: ${poin} XP
🎫TiketCoin: ${tiketcoin} Tiketcoin
`.trim()
    conn.susunkata[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.susunkata[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.susunkata[id][0])
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i
handler.limit = false
handler.register = true
handler.group = false

module.exports = handler