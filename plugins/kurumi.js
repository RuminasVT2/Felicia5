let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("kurumi aesthetic","kurumi cute","kurumi fanart", "kurumi wallpaper", "kurumi icon", "kurumi cool", "kurumi manga","kurumi loli","kurumi dark","kurumi").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['kurumi']
handler.tags = ['anime']
handler.command = /^(kurumi)$/i
handler.limit = true
handler.register = true
module.exports = handler