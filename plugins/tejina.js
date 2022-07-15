let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("tejina senpai aesthetic","tejina senpai cute","tejina senpai fanart", "tejina senpai wallpaper", "tejina senpai icon", "tejina senpai cool", "tejina senpai manga","tejina senpai loli","tejina senpai dark","tejina senpai").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['tejinasenpai']
handler.tags = ['anime']
handler.command = /^(tejinasenpai)$/i
handler.limit = true
handler.register = true
module.exports = handler