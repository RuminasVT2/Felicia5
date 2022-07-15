let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("goku aesthetic","goku cute","goku fanart", "goku wallpaper", "goku icon", "goku cool", "goku manga","goku loli","goku dark","goku").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['goku']
handler.tags = ['anime']
handler.command = /^(goku)$/i
handler.limit = true
handler.register = true
module.exports = handler