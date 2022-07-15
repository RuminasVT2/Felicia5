let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("saya majo no tabitabi aesthetic","saya majo no tabitabi cute","saya majo no tabitabi fanart", "saya majo no tabitabi wallpaper", "saya majo no tabitabi icon", "saya majo no tabitabi cool", "saya majo no tabitabi manga","saya majo no tabitabi loli","saya majo no tabitabi dark","saya majo no tabitabi").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['saya']
handler.tags = ['anime']
handler.command = /^(saya)$/i
handler.limit = true
handler.register = true
module.exports = handler