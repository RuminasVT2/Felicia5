let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("leon cromwell tensura aesthetic","leon cromwell tensura cute","leon cromwell tensura fanart", "leon cromwell tensura wallpaper", "leon cromwell tensura icon", "leon cromwell tensura cool", "leon cromwell tensura manga","leon cromwell tensura loli","leon cromwell tensura dark","leon cromwell tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['leoncromwell']
handler.tags = ['anime']
handler.command = /^(leoncromwell)$/i
handler.limit = true
handler.register = true
module.exports = handler