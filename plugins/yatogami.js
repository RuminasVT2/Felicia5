let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("tohka yatogami aesthetic","tohka yatogami cute","tohka yatogami fanart", "tohka yatogami wallpaper", "tohka yatogami icon", "tohka yatogami cool", "tohka yatogami manga","tohka yatogami loli","tohka yatogami dark","tohka yatogami").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['tohkayatogami']
handler.tags = ['anime']
handler.command = /^(tohkayatogami)$/i
handler.limit = true
handler.register = true
module.exports = handler