let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	scrap.pinterest("hatsune miku aesthetic","hatsune miku cute","hatsune miku fanart", "hatsune miku wallpaper", "hatsune miku icon", "hatsune miku cool", "hatsune miku manga","hatsune miku loli","hatsune miku dark","hatsune miku").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"*Finish Processing, Don't Forget to Follow instagram.com/katyushaclara*",m))
   }
    
handler.help = ['hatsunemiku']
handler.tags = ['anime']
handler.command = /^(hatsunemiku)$/i
handler.limit = true
handler.register = true
module.exports = handler