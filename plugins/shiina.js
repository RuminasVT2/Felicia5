let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("shiina mashiro aesthetic","shiina mashiro cute","shiina mashiro fanart", "shiina mashiro wallpaper", "shiina mashiro icon", "shiina mashiro cool", "shiina mashiro manga","shiina mashiro loli","shiina mashiro dark","shiina mashiro").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['shiinamashiro']
handler.tags = ['anime']
handler.command = /^(shiinamashiro)$/i
handler.limit = true
handler.register = true
module.exports = handler