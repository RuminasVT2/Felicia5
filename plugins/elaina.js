let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("elaina aesthetic","elaina cute","elaina fanart", "elaina wallpaper", "elaina icon", "elaina cool", "elaina manga","elaina loli","elaina dark","elaina").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i
handler.limit = true
handler.register = true
module.exports = handler