let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("saitama aesthetic","saitama cute","saitama fanart", "saitama wallpaper", "saitama icon", "saitama cool", "saitama manga","saitama loli","saitama dark","saitama").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['saitama']
handler.tags = ['anime']
handler.command = /^(saitama)$/i
handler.limit = true
handler.register = true
module.exports = handler