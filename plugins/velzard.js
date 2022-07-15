let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("testarossa tensura aesthetic","testarossa tensura cute","testarossa tensura fanart", "testarossa tensura wallpaper", "testarossa tensura icon", "testarossa tensura cool", "testarossa tensura manga","testarossa tensura loli","testarossa tensura dark","testarossa tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['testarossa']
handler.tags = ['anime']
handler.command = /^(testarossa)$/i
handler.limit = true
handler.register = true
module.exports = handler