let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kitagawa marin aesthetic","kitagawa marin cute","kitagawa marin fanart", "kitagawa marin wallpaper", "kitagawa marin icon", "kitagawa marin cool", "kitagawa marin manga","kitagawa marin loli","kitagawa marin dark","kitagawa marin").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['kitagawa']
handler.tags = ['anime']
handler.command = /^(kitagawa)$/i
handler.limit = true
handler.register = true
module.exports = handler