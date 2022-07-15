const xpperlimit = 999
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].money >= xpperlimit * count) {
    global.db.data.users[m.sender].money -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `*「 BUY LIMIT 」*\n\n-${xpperlimit * count} Money💵\n+ ${count} Limit🎟️`, m)
  } else conn.reply(m.chat, `*Money Tidak Mencukupi Untuk Membeli ${count} Limit*🎟️\n\nMain Fitur RPG Untuk Dapatkan Money`, m)
}
handler.help = ['buy <jumlah limit>', 'buyall']
handler.tags = ['xp']
handler.command = /^buy([0-9]+)|buy|buyall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler