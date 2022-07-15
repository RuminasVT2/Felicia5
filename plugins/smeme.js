const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, text, usedPrefix }) => {
 try {
  let [teks, teks2] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak Ada Foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://api.memegen.link/images/custom/${teks}/${teks2}.png?background=${url}`
//  let wasted = `http://docs-jojo.herokuapp.com/api/meme-gen?top=${teks}&bottom=${teks2}&img=${url}`
  let stiker = await sticker(null, wasted, packname, author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
 } catch (e) {
   m.reply(`*Masukan Format*\nReply Image Dengan Caption ${usedPrefix}smeme teks1|teks2\n\n*Jangan Reply Sticker*`)
  }
}
handler.help = ['smeme']
handler.tags = ['sticker']
handler.command = /^smeme$/i
handler.register = true
handler.limit = true

handler.fail = null

module.exports = handler
