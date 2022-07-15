let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kaori miyazono aesthetic","kaori miyazono cute","kaori miyazono fanart", "kaori miyazono wallpaper", "kaori miyazono icon", "kaori miyazono cool", "kaori miyazono manga","kaori miyazono loli","kaori miyazono dark","kaori miyazono").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['kaorimiyazono']
handler.tags = ['anime']
handler.command = /^(kaorimiyazono)$/i
handler.limit = true
handler.register = true
module.exports = handler