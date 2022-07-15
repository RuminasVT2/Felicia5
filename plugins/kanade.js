let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kanade tachibana aesthetic","kanade tachibana cute","kanade tachibana fanart", "kanade tachibana wallpaper", "kanade tachibana icon", "kanade tachibana cool", "kanade tachibana manga","kanade tachibana loli","kanade tachibana dark","kanade tachibana").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['kanadetachibana']
handler.tags = ['anime']
handler.command = /^(kanadetachibana)$/i
handler.limit = true
handler.register = true
module.exports = handler