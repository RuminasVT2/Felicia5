let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("benimaru tensura aesthetic","benimaru tensura cute","benimaru tensura fanart", "benimaru tensura wallpaper", "benimaru tensura icon", "benimaru tensura cool", "benimaru tensura manga","benimaru tensura loli","benimaru tensura dark","benimaru tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['benimaru']
handler.tags = ['anime']
handler.command = /^(benimaru)$/i
handler.limit = true
handler.register = true
module.exports = handler