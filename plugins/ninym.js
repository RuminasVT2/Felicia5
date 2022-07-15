let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("ralei ninym aesthetic","ralei ninym cute","ralei ninym fanart", "ralei ninym wallpaper", "ralei ninym icon", "ralei ninym cool", "ralei ninym manga","ralei ninym loli","ralei ninym dark","ralei ninym").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['ninym']
handler.tags = ['anime']
handler.command = /^(ninym)$/i
handler.limit = true
handler.register = true
module.exports = handler