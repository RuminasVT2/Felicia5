let handler = async m => m.reply(`
╭─「 DONATION 」
│ • Pulsa 0822-5347-9547
│ • Dana 0822-5347-9547
│ • Gopay 0822-5347-9547
│ • Ovo 0822-5347-9547
╰─────────────•

*Hubungi #owner Terlebih Dahulu Jika Anda Ingin Donasi*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.register = true
module.exports = handler
