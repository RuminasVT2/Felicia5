let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("guy crimson tensura aesthetic","guy crimson tensura cute","guy crimson tensura fanart", "guy crimson tensura wallpaper", "guy crimson tensura icon", "guy crimson tensura cool", "guy crimson tensura manga","guy crimson tensura loli","guy crimson tensura dark","guy crimson tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['guycrimson']
handler.tags = ['anime']
handler.command = /^(guycrimson)$/i
handler.limit = true
handler.register = true
module.exports = handler