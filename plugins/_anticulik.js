let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `*GROUP INVITE*\n
Syarat:
 • Member Minimal 10
 • Tidak Ada Bot Lain
 • Tidak Terjadi Spam
 • Bot Berhak Mengeluarkan Member
    Yang Melakukan Spam
• Bot Suatu Saat Akan Keluar Karena
   Masa Trial Sudah Berakhir

Jika Syarat Diatas Bisa Anda Lakukan
Silahkan Hubungi Owner @${global.owner[0]}
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler
