let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nakiri alice aesthetic","nakiri alice cute","nakiri alice fanart", "nakiri alice wallpaper", "nakiri alice icon", "nakiri alice cool", "nakiri alice manga","nakiri alice loli","nakiri alice dark","nakiri alice").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nakirialice']
handler.tags = ['anime']
handler.command = /^(nakirialice)$/i
handler.limit = true
handler.register = true
module.exports = handler