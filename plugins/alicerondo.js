let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("carrera tensura aesthetic","carrera tensura cute","carrera tensura fanart", "carrera tensura wallpaper", "carrera tensura icon", "carrera tensura cool", "carrera tensura manga","carrera tensura loli","carrera tensura dark","carrera tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['carrera']
handler.tags = ['anime']
handler.command = /^(carrera)$/i
handler.limit = true
handler.register = true
module.exports = handler