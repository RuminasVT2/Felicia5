let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("zero two aesthetic","zero two cute","zero two fanart", "zero two wallpaper", "zero two icon", "zero two cool", "zero two manga","zero two loli","zero two dark","zero two").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['zerotwo']
handler.tags = ['anime']
handler.command = /^(zerotwo)$/i
handler.limit = true
handler.register = true
module.exports = handler