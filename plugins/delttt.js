let handler = async (m, { conn, text }) => {
	conn.game = conn.game ? conn.game : {}
	try {
		if (conn.game) {
			delete conn.game
			conn.reply(m.chat, `*Berhasil Menghapus Sessions TicTacToe*`, m)
		} else if (conn.game) {
			m.reply(`*Tidak Ada Sessions TicTacToe*`)
		} else throw '?'
	} catch (e) {
		m.reply('Rusak')
	}
}
//BY RIZXYU
handler.help = ['delttt']
handler.tags = ['game']
handler.command = /^(delttt|delsesittt|delsesitt)$/i
handler.limit = false

handler.register = true
handler.fail = null

module.exports = handler