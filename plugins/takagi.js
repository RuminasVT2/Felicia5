let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("takagi aesthetic","takagi cute","takagi fanart", "takagi wallpaper", "takagi icon", "takagi cool", "takagi manga","takagi loli","takagi dark","takagi").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['takagi']
handler.tags = ['anime']
handler.command = /^(takagi)$/i
handler.limit = true
handler.register = true
module.exports = handler