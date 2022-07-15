let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("naruto aesthetic","naruto cute","naruto fanart", "naruto wallpaper", "naruto icon", "naruto cool", "naruto manga","naruto loli","naruto dark","naruto").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['naruto']
handler.tags = ['anime']
handler.command = /^(naruto)$/i
handler.limit = true
handler.register = true
module.exports = handler