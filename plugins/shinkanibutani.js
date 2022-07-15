let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("shinka nibutani aesthetic","shinka nibutani cute","shinka nibutani fanart", "shinka nibutani wallpaper", "shinka nibutani icon", "shinka nibutani cool", "shinka nibutani manga","shinka nibutani loli","shinka nibutani dark","shinka nibutani").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['shinkanibutani']
handler.tags = ['anime']
handler.command = /^(shinkanibutani)$/i
handler.limit = true
handler.register = true
module.exports = handler