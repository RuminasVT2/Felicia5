let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nakano nino aesthetic","nakano nino cute","nakano nino fanart", "nakano nino wallpaper", "nakano nino icon", "nakano nino cool", "nakano nino manga","nakano nino loli","nakano nino dark","nakano nino").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nakanonino']
handler.tags = ['anime']
handler.command = /^(nakanonino)$/i
handler.limit = true
handler.register = true
module.exports = handler