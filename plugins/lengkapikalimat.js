let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.lengkapikalimat = conn.lengkapikalimat ? conn.lengkapikalimat : {}
    let id = m.chat
    if (id in conn.lengkapikalimat) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.lengkapikalimat[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/lengkapikalimat.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*「 LENGKAPI KALIMAT 」*\n
*${json.pertanyaan}*

⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}leka Untuk Bantuan
🎁Bonus: ${poin} XP
`.trim()
    conn.lengkapikalimat[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.lengkapikalimat[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.lengkapikalimat[id][0])
            delete conn.lengkapikalimat[id]
        }, timeout)
    ]
}
handler.help = ['lengkapikalimat']
handler.tags = ['game']
handler.command = /^lengkapikalimat/i
handler.limit = false
handler.register = true
handler.group = true

module.exports = handler
