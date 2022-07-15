let handler = async (m, { conn, text }) => {
	if(isNaN(text)) {
  	var number = text.split`@`[1]
  } else if(!isNaN(text)) {
  	var number = text
  }

  const format = num => {
    const n = String(num),
          p = n.indexOf('.')
    return n.replace(
        /\d(?=(?:\d{3})+(?:\.|$))/g,
        (m, i) => p < 0 || i < p ? `${m},` : m
    )
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `*Berikan Nomor, Tag Atau Reply Chat Target.*`, m)
  // let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if(isNaN(number)) return conn.reply(m.chat, `*Nomor Tidak Valid.*`, m)
  if(number.length > 15) return conn.reply(m.chat, `*Format Is Invalid.*`, m)
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
    let users = m.isGroup ? participants.find(u => u.jid == user) : {}
    if(!user) return conn.reply(m.chat, `*Target Atau Nomor Tidak Ditemukan, Mungkin Sudah Keluar Atau Bukan Anggota Grup Ini.*`, m)
    if(user === m.sender) return conn.reply(m.chat, `*Tidak Bisa Berpacaran Dengan Diri Sendiri.*`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `*Bot Sudah Berpacaran Dengan Bot Lain.*`, m)
    
    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat,`*Maaf @${user.split('@')[0]} Tidak Sedang Menembak Anda*`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }else{
      global.db.data.users[user].pasangan = ""
      conn.reply(m.chat,`*Anda Baru Saja Telah Menolak @${user.split('@')[0]}*`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }
	}	
}
handler.help = ['tolak *@tag*']
handler.tags = ['jadian']
handler.command = /^(tolak)$/i
handler.mods = false
handler.premium = false
handler.group = true
handler.limit = true
handler.fail = null
module.exports = handler