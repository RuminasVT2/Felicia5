let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw '*Gambar Tidak DiTemukan*'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `Kirim/Balas Gambar Dengan Caption *${usedPrefix + command}*`
}
handler.help = ['setppgroup']
handler.tags = ['group']

handler.command = /^setpp(group|grup|gc)?$/i
handler.register = true
handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler