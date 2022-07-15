let qrcode = require("qrcode")
let handler  = async (m, { conn, text }) => {
  conn.sendFile(m.chat, await qrcode.toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png', '*Done Creating QR Codes, RC Codes, Quick Response Codes, OR Quick Response Codes Are Forms Of Evolution Of Barcodes From One Dimension To Two Dimensions.*', m)
}

handler.help = ['', 'code'].map(v => 'qr' + v + ' <teks>')
handler.tags = ['tools']
handler.command = /^qr(code)?$/i
handler.register = true
handler.limit = true
handler.fail = null

module.exports = handler
