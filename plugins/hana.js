let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("ichijou hana aesthetic","ichijou hana cute","ichijou hana fanart", "ichijou hana wallpaper", "ichijou hana icon", "ichijou hana cool", "ichijou hana manga","ichijou hana loli","ichijou hana dark","ichijou hana").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['hana']
handler.tags = ['anime']
handler.command = /^(hana)$/i
handler.limit = true
handler.register = true
module.exports = handler