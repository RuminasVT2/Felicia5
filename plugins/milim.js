let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("milim nava aesthetic","milim nava cute","milim nava fanart", "milim nava wallpaper", "milim nava icon", "milim nava cool", "milim nava manga","milim nava loli","milim nava dark","milim nava").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['milimnava']
handler.tags = ['anime']
handler.command = /^(milimnava)$/i
handler.limit = true
handler.register = true
module.exports = handler