let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("rikka takanashi aesthetic","rikka takanashi cute","rikka takanashi fanart", "rikka takanashi wallpaper", "rikka takanashi icon", "rikka takanashi cool", "rikka takanashi manga","rikka takanashi loli","rikka takanashi dark","rikka takanashi").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['rikkatakanashi']
handler.tags = ['anime']
handler.command = /^(rikkatakanashi)$/i
handler.limit = true
handler.register = true
module.exports = handler