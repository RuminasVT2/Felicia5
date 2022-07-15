let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI-LINK 」*\n\nTerdeteksi *${await conn.getName(m.sender)}*\nSebagai Hukuman Karena Memgirimkan Link Grup Lain, Kamu Akan Dikeluarkan Dari Grup Ini.`)
    if (isAdmin) return m.reply('*「 ANTI-LINK 」*\n\nAdmin Tidak Akan Dikeluarkan')
    if (!isBotAdmin) return m.reply('*「 ANTI-LINK 」*\n\nBot Bukan Admin, Tidak Bisa Mengeluarkan Member.')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ANTI-LINK 」*\n\nMengirim Link Grup Sendiri Tidak Akan Dikeluarkan.')
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler


