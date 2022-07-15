let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nakano ichika aesthetic","nakano ichika cute","nakano ichika fanart", "nakano ichika wallpaper", "nakano ichika icon", "nakano ichika cool", "nakano ichika manga","nakano ichika loli","nakano ichika dark","nakano ichika").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nakanoichika']
handler.tags = ['anime']
handler.command = /^(nakanoichika)$/i
handler.limit = true
handler.register = true
module.exports = handler