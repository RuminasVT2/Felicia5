let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("diablo tensura aesthetic","diablo tensura cute","diablo tensura fanart", "diablo tensura wallpaper", "diablo tensura icon", "diablo tensura cool", "diablo tensura manga","diablo tensura loli","diablo tensura dark","diablo tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['diablo']
handler.tags = ['anime']
handler.command = /^(diablo)$/i
handler.limit = true
handler.register = true
module.exports = handler