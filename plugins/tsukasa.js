let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("tsukasa aesthetic","tsukasa cute","tsukasa fanart", "tsukasa wallpaper", "tsukasa icon", "tsukasa cool", "tsukasa manga","tsukasa loli","tsukasa dark","tsukasa").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['tsukasa']
handler.tags = ['anime']
handler.command = /^(tsukasa)$/i
handler.limit = true
handler.register = true
module.exports = handler