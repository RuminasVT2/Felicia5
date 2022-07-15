let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*Jumlah Pengguna Di Database Saat Ini Adalah ${totalreg} User*`)
}
handler.help = ['database', 'user']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user)$/i
handler.limit = false
handler.register = true
module.exports = handler
