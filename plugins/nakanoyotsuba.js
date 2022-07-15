let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nakano yotsuba aesthetic","nakano yotsuba cute","nakano yotsuba fanart", "nakano yotsuba wallpaper", "nakano yotsuba icon", "nakano yotsuba cool", "nakano yotsuba manga","nakano yotsuba loli","nakano yotsuba dark","nakano yotsuba").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nakanoyotsuba']
handler.tags = ['anime']
handler.command = /^(nakanoyotsuba)$/i
handler.limit = true
handler.register = true
module.exports = handler