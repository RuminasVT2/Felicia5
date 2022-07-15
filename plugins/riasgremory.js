let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("rias gremory aesthetic","rias gremory cute","rias gremory fanart", "rias gremory wallpaper", "rias gremory icon", "rias gremory cool", "rias gremory manga","rias gremory loli","rias gremory dark","rias gremory").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['riasgremory']
handler.tags = ['anime']
handler.command = /^(riasgremory)$/i
handler.limit = true
handler.register = true
module.exports = handler