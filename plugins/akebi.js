let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("akebi komichi aesthetic","akebi komichi cute","akebi komichi fanart", "akebi komichi wallpaper", "akebi komichi icon", "akebi komichi cool", "akebi komichi manga","akebi komichi loli","akebi komichi dark","akebi komichi").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['akebi']
handler.tags = ['anime']
handler.command = /^(akebi)$/i
handler.limit = true
handler.register = true
module.exports = handler