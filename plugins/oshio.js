let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kofune ushio aesthetic","kofune ushio cute","kofune ushio fanart", "kofune ushio wallpaper", "kofune ushio icon", "kofune ushio cool", "kofune ushio manga","kofune ushio loli","kofune ushio dark","kofune ushio").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['ushio']
handler.tags = ['anime']
handler.command = /^(ushio)$/i
handler.limit = true
handler.register = true
module.exports = handler