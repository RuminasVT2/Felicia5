let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nami one piece aesthetic","nami one piece cute","nami one piece fanart", "nami one piece wallpaper", "nami one piece icon", "nami one piece cool", "nami one piece manga","nami one piece loli","nami one piece dark","nami one piece").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nami']
handler.tags = ['anime']
handler.command = /^(nami)$/i
handler.limit = true
handler.register = true
module.exports = handler