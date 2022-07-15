let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("yor forger aesthetic","yor forger cute","yor forger fanart", "yor forger wallpaper", "yor forger icon", "yor forger cool", "yor forger manga","yor forger loli","yor forger dark","yor forger").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['yor']
handler.tags = ['anime']
handler.command = /^(yor)$/i
handler.limit = true
handler.register = true
module.exports = handler