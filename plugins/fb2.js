
let fetch = require('node-fetch')

let handler = async (m, { conn, command, args, usedPrefix }) => {
    if (!args[0]) return m.reply('*Letakkan URL Setelah Command*')
    if (!args[0].includes("facebook")) return m.reply(`Url is wrong..\n\n*Example:*\n${usedPrefix}fb https://www.facebook.com/juankcortavarriaoficial/videos/218237676749570/`)
    let res = await fetch(`https://api.neoxr.eu.org/api/fb?url=${args[0]}&apikey=obSw1DxesD`)
   
    let json = await res.json()
    if (!json.status) throw json
    await m.reply('*Processing*')
    await conn.sendFile(m.chat, json.data[1].url, json.data[1].url, wm, m)
}
handler.help = ['fb2'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook|)(dl|download)?(er)?(2)?)$/i
handler.limit = true
handler.group = true
handler.register = true
module.exports = handler