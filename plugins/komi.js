let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("komi shouko aesthetic","komi shouko cute","komi shouko fanart", "komi shouko wallpaper", "komi shouko icon", "komi shouko cool", "komi shouko manga","komi shouko loli","komi shouko dark","komi shouko").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['komi']
handler.tags = ['anime']
handler.command = /^(komi)$/i
handler.limit = true
handler.register = true
module.exports = handler