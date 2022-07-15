let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("chitoge aesthetic","chitoge cute","chitoge fanart", "chitoge wallpaper", "chitoge icon", "chitoge cool", "chitoge manga","chitoge loli","chitoge dark","chitoge").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['chitoge']
handler.tags = ['anime']
handler.command = /^(chitoge)$/i
handler.limit = true
handler.register = true
module.exports = handler