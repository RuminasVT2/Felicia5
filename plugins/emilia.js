let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("emilia aesthetic","emilia cute","emilia fanart", "emilia wallpaper", "emilia icon", "emilia cool", "emilia manga","emilia loli","emilia dark","emilia").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['emilia']
handler.tags = ['anime']
handler.command = /^(emilia)$/i
handler.limit = true
handler.register = true
module.exports = handler