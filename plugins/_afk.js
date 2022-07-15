module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
      m.reply(`
*AWAY FROM KEYBOARD*

Afk Time ${clockString(new Date - user.afk)}
Kamu Berhenti AFK${user.afkReason ? ' Setelah:\n' + user.afkReason : ''} 
`.trim())
      user.afk = -1
      user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afk
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      m.reply(`
*AWAY FROM KEYBOARD*

Afk Time ${clockString(new Date - afkTime)}
Yang Kamu Tag Sedang AFK ${reason ? 'Dengan Alasan:\n' + reason : 'Tanpa Alasan'} 
`.trim())
    }
    return true
  }
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}