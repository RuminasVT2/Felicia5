let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kanna aesthetic","kanna cute","kanna fanart", "kanna wallpaper", "kanna icon", "kanna cool", "kanna manga","kanna loli","kanna dark","kanna").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['kanna']
handler.tags = ['anime']
handler.command = /^(kanna)$/i
handler.limit = true
handler.register = true
module.exports = handler