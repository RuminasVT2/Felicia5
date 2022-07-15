let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tekateki[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tekateki.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*「 TEKA TEKI 」*\n
${json.pertanyaan}

⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}tekki Untuk Bantuan
🎁Bonus: ${poin} XP
🎫Tiketcoin: 1 Tiketcoin
`.trim()
    conn.tekateki[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i
handler.limit = true
handler.group = true

module.exports = handler