let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("hinata hyuga cute","Hinata hyuga","hyuga hinata", "hinata hyuga icon", "hinata hyuga fanart", "hinata hyuga loli", "hinata hyuga badass").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['hinata']
handler.tags = ['anime']
handler.command = /^(hinata)$/i
handler.limit = true
handler.register = true
module.exports = handler