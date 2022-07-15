let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("hinata sakaguchi tensura aesthetic","hinata sakaguchi tensura cute","hinata sakaguchi tensura fanart", "hinata sakaguchi tensura wallpaper", "hinata sakaguchi tensura icon", "hinata sakaguchi tensura cool", "hinata sakaguchi tensura manga","hinata sakaguchi tensura loli","hinata sakaguchi tensura dark","hinata sakaguchi tensura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['hinatasakaguchi']
handler.tags = ['anime']
handler.command = /^(hinatasakaguchi)$/i
handler.limit = true
handler.register = true
module.exports = handler