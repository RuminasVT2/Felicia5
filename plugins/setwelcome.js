let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if ((isOwner || isAdmin)) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome Berhasil Diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)')
  } else throw `Teksnya Mana?\n\ncontoh:\n${usedPrefix + command} hai, @user!\nSelamat Datang Di Grup @subject\n\n@desc`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['group']
handler.command = /^(setwelcome|setw)$/i
handler.group = true

module.exports = handler
