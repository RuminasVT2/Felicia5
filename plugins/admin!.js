let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw '*Jadikan Bot Sebagai Admin*'
  if (isAdmin) throw '*Kamu Sudah Admin Sayang*'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.command = /^adminkan$/i
handler.help = ['adminkan']
handler.tags = ['owner']
handler.rowner = true
handler.botAdmin = true
module.exports = handler
