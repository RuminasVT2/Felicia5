let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("origami tobiichi aesthetic","origami tobiichi cute","origami tobiichi fanart", "origami tobiichi wallpaper", "origami tobiichi icon", "origami tobiichi cool", "origami tobiichi manga","origami tobiichi loli","origami tobiichi dark","origami tobiichi").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['origamitobiichi']
handler.tags = ['anime']
handler.command = /^(origamitobiichi)$/i
handler.limit = true
handler.register = true
module.exports = handler