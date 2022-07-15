let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0] || isNaN(args[0])) throw `*Masukan Angka Mewakili Jumlah Hari*\n\nExample: n${usedPrefix + command} 30`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += jumlahHari
    else global.db.data.chats[who].expired = now + jumlahHari
    conn.reply(m.chat, `*Berhasil Menetapkan Hari Kedaluarsa Untuk ${await conn.getName(who)} Selama ${args[0]} Hari.*\n\n⏱️Countdown: ${msToDate(global.db.data.chats[who].expired - now)}`, m)
}
handler.help = ['expired <hari>']
handler.tags = ['owner']
handler.command = /^(expired)$/i
handler.owner = true
module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}