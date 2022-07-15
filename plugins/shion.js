let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("shion tensura aesthetic","shion tensura cute","shion tensura fanart", "shion tensura wallpaper", "shion tensura icon", "shion tensura cool", "shion tensura manga","shion tensura loli","shion tensura dark","shion tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['shion']
handler.tags = ['anime']
handler.command = /^(shion)$/i
handler.limit = true
handler.register = true
module.exports = handler