let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("rem aesthetic","rem cute","rem fanart", "rem wallpaper", "rem icon", "rem cool", "rem manga","rem loli","rem dark","rem").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['rem']
handler.tags = ['anime']
handler.command = /^(rem)$/i
handler.limit = true
handler.register = true
module.exports = handler