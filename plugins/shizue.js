let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("shizue izawa tensura aesthetic","shizue izawa tensura cute","shizue izawa tensura fanart", "shizue izawa tensura wallpaper", "shizue izawa tensura icon", "shizue izawa tensura cool", "shizue izawa tensura manga","shizue izawa tensura loli","shizue izawa tensura dark","shizue izawa tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['shizueizawa']
handler.tags = ['anime']
handler.command = /^(shizueizawa)$/i
handler.limit = true
handler.register = true
module.exports = handler