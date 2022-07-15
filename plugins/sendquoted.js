async function handler(m) {
    if (!m.quoted) throw '*Reply Pesannya*'
    let q = await this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw '*Pesan Yang Anda Reply Tidak Mengandung Reply*'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['q']
handler.tags = ['tools']
handler.command = /^q$/i
handler.limit = true
module.exports = handler
