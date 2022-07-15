let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakkimia[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*「 TEBAK KIMIA 」*\n
*Nama Unsur Dari Lambang ${json.lambang} Adalah?*

⏱️Timeout *${(timeout / 1000).toFixed(2)} detik*
🔎Ketik ${usedPrefix}teki Untuk Bantuan
🎁Bonus: ${poin} XP
`.trim()
    conn.tebakkimia[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.unsur}*`, conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i
handler.limit = false
handler.group = false
handler.register = true

module.exports = handler