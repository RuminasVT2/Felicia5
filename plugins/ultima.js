let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("ultima tensura aesthetic","ultima tensura cute","ultima tensura fanart", "ultima tensura wallpaper", "ultima tensura icon", "ultima tensura cool", "ultima tensura manga","ultima tensura loli","ultima tensura dark","ultima tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['ultima']
handler.tags = ['anime']
handler.command = /^(ultima)$/i
handler.limit = true
handler.register = true
module.exports = handler