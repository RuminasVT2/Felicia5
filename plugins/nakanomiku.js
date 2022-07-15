let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nakano miku aesthetic","nakano miku cute","nakano miku fanart", "nakano miku wallpaper", "nakano miku icon", "nakano miku cool", "nakano miku manga","nakano miku loli","nakano miku dark","nakano miku").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nakanomiku']
handler.tags = ['anime']
handler.command = /^(nakanomiku)$/i
handler.limit = true
handler.register = true
module.exports = handler