let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("shuna tensura aesthetic","shuna tensura cute","shuna tensura fanart", "shuna tensura wallpaper", "shuna tensura icon", "shuna tensura cool", "shuna tensura manga","shuna tensura loli","shuna tensura dark","shuna tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['shuna']
handler.tags = ['anime']
handler.command = /^(shuna)$/i
handler.limit = true
handler.register = true
module.exports = handler