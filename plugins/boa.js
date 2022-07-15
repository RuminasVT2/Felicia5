let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("boa hancock aesthetic","boa hancock cute","boa hancock fanart", "boa hancock wallpaper", "boa hancock icon", "boa hancock cool", "boa hancock manga","boa hancock loli","boa hancock dark","boa hancock").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['boahancock']
handler.tags = ['anime']
handler.command = /^(boahancock)$/i
handler.limit = true
handler.register = true
module.exports = handler