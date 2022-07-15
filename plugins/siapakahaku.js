let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.siapakahaku[id][0])
        throw false
    }
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*「 SIAPAKAH AKU 」*
Siapakah Aku? *${json.soal}*

⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}who Untuk Bantuan
🎁Bonus: ${poin} XP 
🎫TiketCoin: ${tiketcoin} Tiketcoin
`.trim()
    conn.siapakahaku[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.reply(m.chat, `⏱️Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i
handler.limit = false
handler.register = true
handler.group = true
module.exports = handler