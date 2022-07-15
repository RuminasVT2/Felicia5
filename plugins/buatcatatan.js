let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = '*Format Salah*\n\nExample: ' +usedPrefix+command+ 'Update Bot|1. Fitur New'
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (catatan.includes(title)) return m.reply('*Judul Tidak Tersedia Karena Sudah Digunakan*')
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    'title': title,
    'isi': isi
  }
  global.db.data.users[m.sender].catatan.push(cttn)
  conn.reply(m.chat, `*CATATAN BERHASIL DIBUAT*\n\nUntuk Melihat Catatan Ketik\n${usedPrefix}lihatcatatan`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['buatcatatan <title|isi>']
handler.tags = ['catatan']
handler.command = /^buatcatatan$/i
handler.register = true
module.exports = handler