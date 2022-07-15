let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("aiohto aesthetic","aiohto cute","aiohto fanart", "aiohto wallpaper", "aiohto icon", "aiohto cool", "aiohto manga","aiohto loli","aiohto dark","aiohto").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['aiohto']
handler.tags = ['anime']
handler.command = /^(aiohto)$/i
handler.limit = true
handler.register = true
module.exports = handler