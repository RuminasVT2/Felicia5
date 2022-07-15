let handler = async (m, { conn }) => {
  ayg = global.db.data.users[m.sender]

  if(ayg.pasangan == ""){
    return conn.reply(m.chat,`*Anda Jomblo, Mau Putusin Siapa?*.`,m)
  }
  
  beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

  if (typeof beb == "undefined"){
    conn.reply(m.chat,`*Berhasil Putus Hubungan Dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}*`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
  }

  if (m.sender == beb.pasangan){
    conn.reply(m.chat,`*Berhasil Putus Hubungan Dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}*`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
    beb.pasangan = ""
  }else {
    conn.reply(m.chat,`*Anda Jomblo, Mau Putusin Siapa?*.`,m)
  }
}
handler.help = ['putus']
handler.tags = ['jadian']
handler.command = /^(putus)$/i
handler.group = true
handler.limit = false
handler.register = true
handler.fail = null
module.exports = handler