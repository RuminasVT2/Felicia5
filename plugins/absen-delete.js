let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `*Tidak Ada Absen Berlangsung Digrup Ini*\n\n*${usedPrefix}mulaiabsen* - Untuk Memulai Absen`
    delete conn.absen[id]
    m.reply(`*Selesai Menghapus Absen*`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
handler.register = true
module.exports = handler