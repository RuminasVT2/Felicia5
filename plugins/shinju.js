let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("inui shinju aesthetic","inui shinju cute","inui shinju fanart", "inui shinju wallpaper", "inui shinju icon", "inui shinju cool", "inui shinju manga","inui shinju loli","inui shinju dark","inui shinju").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['shinju']
handler.tags = ['anime']
handler.command = /^(shinju)$/i
handler.limit = true
handler.register = true
module.exports = handler