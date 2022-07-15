let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nico robin aesthetic","nico robin cute","nico robin fanart", "nico robin wallpaper", "nico robin icon", "nico robin cool", "nico robin manga","nico robin loli","nico robin dark","nico robin").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nicorobin']
handler.tags = ['anime']
handler.command = /^(nicorobin)$/i
handler.limit = true
handler.register = true
module.exports = handler