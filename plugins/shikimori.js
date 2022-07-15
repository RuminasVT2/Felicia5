let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("shikimori aesthetic","shikimori cute","shikimori fanart", "shikimori wallpaper", "shikimori icon", "shikimori cool", "shikimori manga","shikimori loli","shikimori dark","shikimori").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['shikimori']
handler.tags = ['anime']
handler.command = /^(shikimori)$/i
handler.limit = true
handler.register = true
module.exports = handler