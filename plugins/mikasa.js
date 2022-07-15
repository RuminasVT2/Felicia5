let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("mikasa aesthetic","mikasa cute","mikasa fanart", "mikasa wallpaper", "mikasa icon", "mikasa cool", "mikasa manga","mikasa loli","mikasa dark","mikasa").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['mikasa']
handler.tags = ['anime']
handler.command = /^(mikasa)$/i
handler.limit = true
handler.register = true
module.exports = handler