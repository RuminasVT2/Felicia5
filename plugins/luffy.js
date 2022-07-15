let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("luffy aesthetic","luffy cute","luffy fanart", "luffy wallpaper", "luffy icon", "luffy cool", "luffy manga","luffy loli","luffy dark","luffy").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['luffy']
handler.tags = ['anime']
handler.command = /^(luffy)$/i
handler.limit = true
handler.register = true
module.exports = handler