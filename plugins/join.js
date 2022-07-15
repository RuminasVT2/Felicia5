let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner, groupMetadata }) => {
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'Link Invalid'
    if (global.db.data.users[m.sender].joinlimit == 0) return m.reply('Maaf Kamu Sudah Tidak Bisa Menggunakan Free Join..\nHarap hubungi *owner* kami')
    global.db.data.users[m.sender].joinlimit -= 1
   // let id = m.chat
   // let groupMetadata = await conn.groupMetadata(m.chat)
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(7, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`Berhasil join grup ${res} selama ${expired ? ` selama ${expired} hari` : ''}`)
   // conn.reply(`Bot telah di undang di group: ${groupMetadata.subject}\nCode ID: ${res}`, `62895330379186@s.whatsapp.net`)
    setTimeout(() => {
    conn.reply(res, `*Saya ${conn.user.name} Adalah Bot Whatsapp Yang Di Bangun Menggunakan Nodejs, Diundang Oleh @${m.sender.split`@`[0]} Trial Selama*\n*${msToDate(global.db.data.chats[res].expired - new Date() * 1)}*\n\nUntuk Melihat List *MENU* Bot Ketik #menu\n\nJika Ingin Di Perpanjang Expired Group, Harap Hubungi *OWNER* Saya`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
    }, 1500) 
    let chats = global.db.data.chats[res]
    if (!chats) chats = global.db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
//handler.help = ['join <chat.whatsapp.com>']
//handler.tags = ['premium']

handler.command = /^join$/i
handler.register = true
handler.rowner = true
module.exports = handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit";
    // +minutes+":"+sec;
}
