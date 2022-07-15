let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("veldora tensura aesthetic","veldora tensura cute","veldora tensura fanart", "veldora tensura wallpaper", "veldora tensura icon", "veldora tensura cool", "veldora tensura manga","veldora tensura loli","veldora tensura dark","veldora tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['veldora']
handler.tags = ['anime']
handler.command = /^(veldora)$/i
handler.limit = true
handler.register = true
module.exports = handler