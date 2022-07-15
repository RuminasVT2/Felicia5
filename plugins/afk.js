let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
*「 MEMASUKI AFK MODE 」*${conn.getName(m.sender)} Sekarang AFK${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.limit = false
handler.register = true
module.exports = handler
