let handler = async (m, { conn, text, usedPrefix }) => {
  if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  const format = (num) => {
    const n = String(num),
      p = n.indexOf(".");
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) =>
      p < 0 || i < p ? `${m},` : m
    );
  };

  if (!text && !m.quoted)
    return conn.reply(m.chat, `*Berikan Nomor, Tag Atau Reply Chat Target*`, m);
  // let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if (isNaN(number)) return conn.reply(m.chat, `*Nomor Tidak Valid!*`, m);
  if (number.length > 15) return conn.reply(m.chat, `*Format Tidak Valid!*`, m);
  try {
    if (text) {
      var user = number + "@s.whatsapp.net";
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + "@s.whatsapp.net";
    }
  } catch (e) {
  } finally {
    let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
    let participants = m.isGroup ? groupMetadata.participants : [];
    let users = m.isGroup ? participants.find((u) => u.jid == user) : {};
    if (!user)
      return conn.reply(
        m.chat,
        `*Target Atau Nomor Tidak Ditemukan, Mungkin Sudah Keluar Atau Bukan Anggota Grup Ini*`,
        m
      );
    if (user === m.sender)
      return conn.reply(m.chat, `*Tidak Bisa Berpacaran Dengan Diri Sendiri*`, m);
    //if (user === conn.user.jid)
    //return conn.reply(m.chat, `Tidak bisa berpacaran dengan bot`, m);

    if (typeof global.db.data.users[user] == "undefined")
      return m.reply("*Tidak Terdaftar Di Database*");

    if (
      global.db.data.users[m.sender].pasangan != "" &&
      global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan ==
        m.sender &&
      global.db.data.users[m.sender].pasangan != user
    ) {
      var denda = Math.ceil((global.db.data.users[m.sender].exp / 1000) * 20);
      global.db.data.users[m.sender].exp -= denda;
      conn.reply(
        m.chat,
        `Kamu Sudah Berpacaran Dengan @${
          global.db.data.users[m.sender].pasangan.split("@")[0]
        }\n\nSilahkan Putus Dulu ${usedPrefix}putus @user Untuk Menembak @${
          user.split("@")[0]
        }\n\nsetia dong!\n • Denda : ${format(denda)} (20%)`,
        m,
        {
          contextInfo: {
            mentionedJid: [user, global.db.data.users[m.sender].pasangan],
          },
        }
      );
    } else if (global.db.data.users[user].pasangan != "") {
      var pacar = global.db.data.users[user].pasangan;
      if (global.db.data.users[pacar].pasangan == user) {
        var denda = Math.ceil((global.db.data.users[m.sender].exp / 1000) * 20);
        global.db.data.users[m.sender].exp -= denda;
        if (
          m.sender == pacar &&
          global.db.data.users[m.sender].pasangan == user
        )
          return conn.reply(
            m.chat,
            `Kamu Sudah Berpacaran dengan @${
              beb.split("@")[0]
            }\n\nSetia Dong!\n •  Denda : ${format(denda)} (20%)`,
            m,
            {
              contextInfo: {
                mentionedJid: [beb],
              },
            }
          );
        conn.reply(
          m.chat,
          `Tau Sopan Santun Dikit\n@${
            user.split("@")[0]
          } Sudah Berpacaran Dengan @${
            pacar.split("@")[0]
          }\n\nSilahkan Cari Pasangan Lain Aja!\n • Denda : ${format(
            denda
          )} (10%)*`,
          m,
          {
            contextInfo: {
              mentionedJid: [user, pacar],
            },
          }
        );
      } else {
        global.db.data.users[m.sender].pasangan = user;
        conn.reply(
          m.chat,
          `Kamu Baru Saja Mengajak @${
            user.split("@")[0]
          } Berpacaran\n\n*Silahkan Menunggu Jawabannya Saja Ya!*\n • Ketik ${usedPrefix}terima @user Atau ${usedPrefix}tolak @user`,
          m,
          {
            contextInfo: {
              mentionedJid: [user],
            },
          }
        );
      }
    } else if (global.db.data.users[user].pasangan == m.sender) {
      global.db.data.users[m.sender].pasangan = user;
      conn.reply(
        m.chat,
        `Selamat Anda Resmi Berpacaran Dengan @${
          user.split("@")[0]
        }\n\nSemoga Langgeng Dan Bahagia Selalu♥️`,
        m,
        {
          contextInfo: {
            mentionedJid: [user],
          },
        }
      );
    } else {
      global.db.data.users[m.sender].pasangan = user;
      conn.reply(
        m.chat,
        `Kamu Baru Saja Mengajak @${
          user.split("@")[0]
        } berpacaran\n\n*Silahkan Menunggu Jawabannya Saja!*\n • Ketik ${usedPrefix}terima @user Atau ${usedPrefix}tolak @user`,
        m,
        {
          contextInfo: {
            mentionedJid: [user],
          },
        }
      );
    }
  }
};
handler.help = ["tembak"].map((v) => v + " *@tag*");
handler.tags = ["jadian"];
handler.command = /^(tembak)$/i;
handler.group = true;
handler.limit = true;
handler.fail = null;
module.exports = handler;