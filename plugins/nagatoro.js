let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nagatoro aesthetic","nagatoro cute","nagatoro fanart", "nagatoro wallpaper", "nagatoro icon", "nagatoro cool", "nagatoro manga","nagatoro loli","nagatoro dark","nagatoro").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nagatoro']
handler.tags = ['anime']
handler.command = /^(nagatoro)$/i
handler.limit = true
handler.register = true
module.exports = handler