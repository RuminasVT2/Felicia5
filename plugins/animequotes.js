let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
m.reply(`*「 QUOTES ANIME 」*\n\n*${indo}*\n\n • Character ${character}\n • Anime ${anime}`)
}
handler.help = ['quotesanime']
handler.tags = ['quotes']
handler.command = /^(quotesanime|animequotes|kataanime)$/i
handler.limit = true
handler.register = true
module.exports = handler
