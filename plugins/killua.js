let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("killua aesthetic","killua cute","killua fanart", "killua wallpaper", "killua icon", "killua cool", "killua manga","killua loli","killua dark","killua").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['killua']
handler.tags = ['anime']
handler.command = /^(killua)$/i
handler.limit = true
handler.register = true
module.exports = handler