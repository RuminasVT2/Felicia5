
let handler = async (m, { conn, args, usedPrefix, owner }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `*「 ITEM TRANSFER 」*\n\nGunakan Format:\n${usedPrefix}transfer <type> <jumlah> <@tag>\nContoh Penggunaan: \n*${usedPrefix}transfer money 100 @tag*\n\n*List Yang Bisa Di Transfer*\nMoney\nExp\nLimit`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw '*Tag Salah Satu, Atau Ketik Nomernya*'
        let users = global.db.data.users
        switch (type) {
            case 'money':
                if (global.db.data.users[m.sender].money >= count * 1) {
                    try {
                        global.db.data.users[m.sender].money -= count * 1
                        global.db.data.users[who].money += count * 1
                        conn.reply(m.chat, `*MONEY TRANSACTION*\n\nBerhasil Mentransfer Money Sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].money += count * 1
                        m.reply('*Gagal Menstransfer*')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `*Money Kamu Tidak Mencukupi Untuk Mentransfer Money Sebesar ${count}*`.trim(), m)
                break 
             case 'exp':
                if (global.db.data.users[m.sender].exp >= count * 1) {
                    try {
                        global.db.data.users[m.sender].exp -= count * 1
                        global.db.data.users[who].exp += count * 1
                        conn.reply(m.chat, `*EXP TRANSACTION*\n\nBerhasil Mentransfer Exp Sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].exp += count * 1
                        m.reply('*Gagal Menstransfer*')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `*Exp Kamu Tidak Mencukupi Untuk Mentransfer Exp Sebesar ${count}*`.trim(), m)
                break
             case 'limit':
                if (global.db.data.users[m.sender].limit >= count * 1) {
                    try {
                        global.db.data.users[m.sender].limit -= count * 1
                        global.db.data.users[who].limit += count * 1
                        conn.reply(m.chat, `*TRANSACTION LIMIT*\n\nBerhasil Mentransfer Limit Sebesar ${count}`.trim(), m)
                       // conn.reply(who, `Selamat mendapatkan limit sebesar ${count}\nFrom: *Owner*`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].limit += count * 1
                        m.reply('*Gagal Menstransfer*')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `*Limit Kamu Tidak Mencukupi Untuk Mentransfer Limit Sebesar ${count}*`.trim(), m)
                break
            default:
                return conn.reply(m.chat, `Gunakan Format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*\n\n*List Yang Bisa Di Transfer*\nMoney\nExp\nLimit`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Gunakan Format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*\n\n*List Yang Bisa Di Transfer*\nMoney\nExp\nLimit`.trim(), m)
        console.log(e)
        if (owner) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}
    
handler.help = ['transfer']
handler.tags = ['rpg']
handler.command = /^(transfer)$/i
handler.owner = false
handler.mods = false
handler.limit = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler