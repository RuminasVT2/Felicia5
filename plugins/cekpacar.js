let handler = async (m, { conn, text }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
	
	text = no(text)
  
  if(isNaN(text)) {
		var number = text.split`@`[1]
	}else if(!isNaN(text)) {
		var number = text
	}

  if(number.length > 15 || (number.length < 9 && number.length > 0)) return conn.reply(m.chat, `*Tag Target Setelah Command*`, m)

  if (!text && !m.quoted){
    user = m.sender
    orang = "Kamu"
  }else if(text) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang Yang Kamu Tag"
  } else if(m.quoted.sender) {
    var user = m.quoted.sender
    orang = "Orang Yang Kamu Tag"
  } else if(m.mentionedJid) {
    var user = number + '@s.whatsapp.net'
    orang = "Orang Yang Kamu Tag"
  }

  if (typeof global.db.data.users[user] == "undefined"){
    return m.reply("*Orang Yang Anda Tag Tidak Terdaftar Di Bot.*")
  }

  if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
    return m.reply("*Pacar Target Tidak Terdaftar Di Bot.*")
  }

  if (global.db.data.users[user].pasangan == "") {
    conn.reply(m.chat, `*${orang} Tidak Memiliki Pasangan Dan Tidak Sedang Menembak Siapapun*\n\n*Ketik #tembak @tag Untuk Menembak Seseorang*`, m)
  }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
    conn.reply(m.chat, `*${orang} Sedang Digantung Oleh @${global.db.data.users[user].pasangan.split('@')[0]} Karena Sedang Tidak Diterima Atau Di Tolak*\n\n*Ketik #ikhlasin Untuk Menghapus Nama Dia Dari Hatimu*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }else {
    conn.reply(m.chat, `*${orang} Sedang Menjalani Hubungan Dengan @${global.db.data.users[user].pasangan.split('@')[0]}*`, m,{contextInfo: {
      mentionedJid: [global.db.data.users[user].pasangan]
    }})
  }
}
handler.help = ['cekpacar']
handler.tags = ['jadian']
handler.command = /^(cekpacar)$/i
handler.limit = false
handler.group = true
handler.fail = null
module.exports = handler