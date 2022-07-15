let fetch = require('node-fetch')
let winScore = 1000
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
        throw false
    }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*「 FAMILY100 」*

*Soal: ${json.soal}*

Jumlah Jawaban  *${json.jawaban.length}* Jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(Beberapa Jawaban Terdapat Spasi)
`: ''}

🎁+${winScore} Money Setiap Jawaban Benar
    `.trim()
    this.game[id] = {
        id,
        msg: await m.reply(caption),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i
handler.limit = false
handler.group = true
handler.register = true
module.exports = handler