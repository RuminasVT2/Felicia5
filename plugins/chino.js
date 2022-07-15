let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("caffu chino aesthetic","caffu chino cute","caffu chino fanart", "caffu chino wallpaper", "caffu chino icon", "caffu chino cool", "caffu chino manga","caffu chino loli","caffu chino dark","caffu chino").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['caffuchino']
handler.tags = ['anime']
handler.command = /^(caffuchino)$/i
handler.limit = true
handler.register = true
module.exports = handler