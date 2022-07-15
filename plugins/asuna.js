let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("asuna aesthetic","asuna cute","asuna fanart", "asuna wallpaper", "asuna icon", "asuna cool", "asuna manga","asuna loli","asuna dark","asuna").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['asuna']
handler.tags = ['anime']
handler.command = /^(asuna)$/i
handler.limit = true
handler.register = true
module.exports = handler