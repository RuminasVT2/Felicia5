let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("siesta aesthetic","siesta cute","siesta fanart", "siesta wallpaper", "siesta icon", "siesta cool", "siesta manga","siesta loli","siesta dark","siesta").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['siesta']
handler.tags = ['anime']
handler.command = /^(siesta)$/i
handler.limit = true
handler.register = true
module.exports = handler