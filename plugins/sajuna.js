let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("inui sajuna aesthetic","inui sajuna cute","inui sajuna fanart", "inui sajuna wallpaper", "inui sajuna icon", "inui sajuna cool", "inui sajuna manga","inui sajuna loli","inui sajuna dark","inui sajuna").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['sajuna']
handler.tags = ['anime']
handler.command = /^(sajuna)$/i
handler.limit = true
handler.register = true
module.exports = handler