let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("yazawa nico aesthetic","yazawa nico cute","yazawa nico fanart", "yazawa nico wallpaper", "yazawa nico icon", "yazawa nico cool", "yazawa nico manga","yazawa nico loli","yazawa nico dark","yazawa nico").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['yazawanico']
handler.tags = ['anime']
handler.command = /^(yazawanico)$/i
handler.limit = true
handler.register = true
module.exports = handler