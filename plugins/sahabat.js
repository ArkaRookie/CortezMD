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
    return conn.reply(m.chat, `Berikan nomor, tag atau reply chat target`, m);
  // let exists = await conn.isOnWhatsApp(number)
  // if (exists) return conn.reply(m.chat, `*Nomor target tidak terdaftar di WhatsApp*`, m)
  if (isNaN(number)) return conn.reply(m.chat, `Nomor tidak valid!`, m);
  if (number.length > 15) return conn.reply(m.chat, `Format tidak valid!`, m);
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
        `Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini`,
        m
      );
    if (user === m.sender)
      return conn.reply(m.chat, `Tidak bisa berteman  dengan diri sendiri`, m);
    //if (user === conn.user.jid)
    //return conn.reply(m.chat, `Tidak bisa berpacaran dengan bot`, m);

    if (typeof global.db.data.users[user] == "undefined")
      return m.reply("Tidak terdaftar di database");

    if (
      global.db.data.users[m.sender].sahabat != "" &&
      global.db.data.users[global.db.data.users[m.sender].sahabat].sahabat ==
        m.sender &&
      global.db.data.users[m.sender].sahabat != user
    ) {
      var denda = Math.ceil((global.db.data.users[m.sender].exp / 1000) * 20);
      global.db.data.users[m.sender].exp -= denda;
      conn.reply(
        m.chat,
        `Kamu sudah bersahabat dengan @${
          global.db.data.users[m.sender].sahabat.split("@")[0]
        }\n\nSilahkan putus dulu ${usedPrefix}putus @user untuk bersahabat dengan @${
          user.split("@")[0]
        }\n\nsetia dong!\ndenda : ${format(denda)} (20%)`,
        m,
        {
          contextInfo: {
            mentionedJid: [user, global.db.data.users[m.sender].sahabat],
          },
        }
      );
    } else if (global.db.data.users[user].sahabat != "") {
      var teman = global.db.data.users[user].sahabat;
      if (global.db.data.users[teman].sahabat == user) {
        var denda = Math.ceil((global.db.data.users[m.sender].exp / 1000) * 20);
        global.db.data.users[m.sender].exp -= denda;
        if (
          m.sender == teman &&
          global.db.data.users[m.sender].sahabat == user
        )
          return conn.reply(
            m.chat,
            `Kamu sudah bersahabat dengan @${
              user.split("@")[0]
            }\n\nsetia dong!\ndenda : ${format(denda)} (20%)`,
            m,
            {
              contextInfo: {
                mentionedJid: [user],
              },
            }
          );
        conn.reply(
          m.chat,
          `Tau sopan santun dikit teman\n@${
            user.split("@")[0]
          } sudah bersahabat dengan @${
            teman.split("@")[0]
          }\n\nSilahkan cari sahabat lain aja!\ndenda : ${format(
            denda
          )} (10%)*`,
          m,
          {
            contextInfo: {
              mentionedJid: [user, teman],
            },
          }
        );
      } else {
        global.db.data.users[m.sender].sahabat = user;
        conn.reply(
          m.chat,
          `Kamu baru saja mengajak @${
            user.split("@")[0]
          } bersahabat\n\nSilahkan menunggu jawabannya saja ya!\nKetik ${usedPrefix}terimasahabat @user atau ${usedPrefix}tolaksahabat @user`,
          m,
          {
            contextInfo: {
              mentionedJid: [user],
            },
          }
        );
      }
    } else if (global.db.data.users[user].sahabat == m.sender) {
      global.db.data.users[m.sender].sahabat = user;
      conn.reply(
        m.chat,
        `Selamat anda resmi bersahabat dengan @${
          user.split("@")[0]
        }\n\nSemoga rukun dan ceria selalu `,
        m,
        {
          contextInfo: {
            mentionedJid: [user],
          },
        }
      );
    } else {
      global.db.data.users[m.sender].sahabat = user;
      conn.reply(
        m.chat,
        `Kamu baru saja mengajak @${
          user.split("@")[0]
        } Bersahabat\n\nSilahkan menunggu jawabannya saja ya!\nKetik ${usedPrefix}terimasahabat @user atau ${usedPrefix}tolaksahabat @user`,
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
handler.help = ["bersahabat"].map((v) => v + " *@tag*");
handler.tags = ["fun"];
handler.command = /^(bersahabat)$/i;
handler.group = true;
handler.limit = true;
handler.fail = null;
module.exports = handler;