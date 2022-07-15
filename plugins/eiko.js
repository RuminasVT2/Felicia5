let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("tsukimi eiko aesthetic","tsukimi eiko cute","tsukimi eiko fanart", "tsukimi eiko wallpaper", "tsukimi eiko icon", "tsukimi eiko cool", "tsukimi eiko manga","tsukimi eiko loli","tsukimi eiko dark","tsukimi eiko").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['eiko']
handler.tags = ['anime']
handler.command = /^(eiko)$/i
handler.limit = true
handler.register = true
module.exports = handler