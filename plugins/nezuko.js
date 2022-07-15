let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nezuko aesthetic","nezuko cute","nezuko fanart", "nezuko wallpaper", "nezuko icon", "nezuko cool", "nezuko manga","nezuko loli","nezuko dark","nezuko").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nezuko']
handler.tags = ['anime']
handler.command = /^(nezuko)$/i
handler.limit = true
handler.register = true
module.exports = handler