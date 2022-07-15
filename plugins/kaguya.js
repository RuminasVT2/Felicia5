let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("shinomiya kaguya aesthetic","shinomiya kaguya cute","shinomiya kaguya fanart", "shinomiya kaguya wallpaper", "shinomiya kaguya icon", "shinomiya kaguya cool", "shinomiya kaguya manga","shinomiya kaguya loli","shinomiya kaguya dark","shinomiya kaguya").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['kaguya']
handler.tags = ['anime']
handler.command = /^(kaguya)$/i
handler.limit = true
handler.register = true
module.exports = handler