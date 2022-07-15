let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/kawai.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(kawai|kawaii|kawaiii|kawaiiii)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler