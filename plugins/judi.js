let buatall = 1
let handler = async (m, { conn, args, usedPrefix, isOwner }) => {
    conn.judi = conn.judi ? conn.judi : {}
    if (m.chat in conn.judi) return m.reply ('*Masih Ada Yang Melakukan Judi Disini, Tunggu Sampai Selesai*')
    else conn.judi[m.chat] = true
    try {
    	let __waktutionskh = (new Date - global.db.data.users[m.sender].judilast)
        let _waktutionskh = (5000 - __waktutionskh)
        let waktutionskh = clockString(_waktutionskh)
        if (new Date - global.db.data.users[m.sender].judilast > 5000) {
        global.db.data.users[m.sender].judilast = new Date * 1
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 75)}`.trim()                //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'judi <jumlah>\n ' + usedPrefix + 'judi 1000', m)
        if (global.db.data.users[m.sender].money >= count * 1) {
            global.db.data.users[m.sender].money -= count * 1
            await m.reply('*Yakin? Bakal Menang?*') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `*「 JUDI 」*\n\n👤Aku Roll:${Aku}\n👤Kamu Roll: ${Kamu}\n\nKamu *Kalah*, Kamu Kehilangan ${count} Money💵`.trim(), m)
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].money += count * 2
                conn.reply(m.chat, `*「 JUDI 」*\n\n👤Aku Roll:${Aku}\n👤Kamu Roll: ${Kamu}\n\nKamu *Menang*, Kamu Mendapatkan ${count * 2} Money💵`.trim(), m)
            } else {
                global.db.data.users[m.sender].money += count * 1
                conn.reply(m.chat, `*「 JUDI 」*\n\n👤Aku Roll:${Aku}\n👤Kamu Roll: ${Kamu}\n\nKamu *Seri*, Kamu Mendapatkan ${count * 1} Money💵`.trim(), m)
            }
        } else conn.reply(m.chat, `*Money Kamu Tidak Cukup Untuk Melakukan Judi Sebesar ${count} money*`.trim(), m)
      } else conn.reply(m.chat, `*Kamu Sudah Judi, Tidak Bisa Judi Kembali*\n*Mohon Tunggu ${waktutionskh} Lagi Untuk Judi Kembali*`, m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
   } finally {
        delete conn.judi[m.chat]
    }
 }
handler.help = ['judi <jumlah>']
handler.tags = ['game']
handler.command = /^(judi)$/i
handler.group = true
handler.register = true
handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}