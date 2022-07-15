
let handler = async (m, { conn, usedPrefix, participants }) => {
conn.level = global.db.data.users[m.sender]
conn.role = global.db.data.users[m.sender]
  conn.fight = conn.fight ? conn.fight : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof conn.fight[m.sender] != "undefined" && conn.fight[m.sender] == true) return m.reply(`*Kamu Sedang Bertarung, Tunggu Selesai Untuk Bertarung Lagi*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = getRandom(5,15)

  m.reply(`*「 FIGHTING 」*\n\n*Kamu Level ${global.db.data.users[m.sender].level} ${global.db.data.users[m.sender].role} Menantang ${conn.getName(lawan)} Level ${global.db.data.users[lawan].level} ${global.db.data.users[lawan].role} Dan Sedang Dalam Pertarungan Sengit.*\n\n⏱️Tunggu ${lamaPertarungan} Menit Untuk Melihat Siapa Yang Menang`)

  conn.fight[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Noob','Cupu','Kurang hebat','Ampas kalahan','Gembel kalahan']
  let alasanMenang = ['Hebat','Pro','Master Game','Legenda game','Sangat Pro','Rajin Nge-push']

  let kesempatan = []
  for (i=0;i<global.db.data.users[m.sender].level;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.data.users[lawan].level;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = getRandom(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 3000
    global.db.data.users[m.sender].money += hadiah
    global.db.data.users[m.sender].tiketcoin += 1
    m.reply(`*「 FIGHTING 」*\n\n• Point Kamu ${conn.getName(m.sender)}: ${pointPemain * 10}\n• Point Lawan ${conn.getName(lawan)}: ${pointLawan * 10}\n\n*Kamu Level ${global.db.data.users[m.sender].level} ${global.db.data.users[m.sender].role} Menang Melawan ${conn.getName(lawan)} Yang Level ${global.db.data.users[lawan].level} ${global.db.data.users[lawan].role} Karena Kamu ${alasanMenang[getRandom(0,alasanMenang.length-1)]}*\n\nVictory Prize\n• Money ${hadiah.toLocaleString()}💵\n• Tiketcoin 1🎫`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 9000
    global.db.data.users[m.sender].money -= denda
    global.db.data.users[m.sender].tiketcoin += 1
    m.reply(`*「 FIGHTING 」*\n\n• Point Kamu ${conn.getName(m.sender)}: ${pointPemain * 10}\n• Point Lawan ${conn.getName(lawan)}: ${pointLawan * 10}\n\n*Kamu Level ${global.db.data.users[m.sender].level} ${global.db.data.users[m.sender].role} Kalah Melawan ${conn.getName(lawan)} Yang Level ${global.db.data.users[lawan].level} ${global.db.data.users[lawan].role} Karena Kamu ${alasanKalah[getRandom(0,alasanKalah.length-1)]}*\n\nMoney Kamu Berkurang ${denda.toLocaleString()}💵\n• TiketCoin 1🎫`)
  }else {
    m.reply(`*「 FIGHTING 」*\n\n• Point Kamu ${conn.getName(m.sender)}: ${pointPemain * 10}\n• Point Lawan ${conn.getName(lawan)}: ${pointLawan * 10}\n\n*Hasil Seimbang Dan Tidak Dapat Apa-Apa*`)
  }

  delete conn.fight[m.sender]
}
handler.help = ['fighting','fight']
handler.tags = ['game','rpg']
handler.command = /^(fight(ing)?)$/i
handler.limit = true
handler.group = true
handler.register = true
module.exports = handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
