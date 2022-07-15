let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("nakano itsuki aesthetic","nakano itsuki cute","nakano itsuki fanart", "nakano itsuki wallpaper", "nakano itsuki icon", "nakano itsuki cool", "nakano itsuki manga","nakano itsuki loli","nakano itsuki dark","nakano itsuki").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['nakanoitsuki']
handler.tags = ['anime']
handler.command = /^(nakanoitsuki)$/i
handler.limit = true
handler.register = true
module.exports = handler