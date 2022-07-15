let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, 'Masih Ada Soal Belum Terjawab Di Chat Ini', conn.asahotak[id][0])
        throw false
    }
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*「 𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞 」*

*${json.soal}*

⏱️Timeout ${(timeout / 1000).toFixed(2)} Detik
🔎Ketik ${usedPrefix}ao untuk bantuan
🎁Bonus: ${poin} XP
🎫Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
    conn.asahotak[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.asahotak[id]) conn.reply(m.chat, `⏱️Waktu Habis\nJawabannya Adalah *${json.jawaban}*`, conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.limit = false
handler.group = true
handler.register = true
module.exports = handler