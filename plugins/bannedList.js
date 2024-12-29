let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let now = new Date().getTime()

    conn.reply(m.chat, `
┌ *Banned chat list*
│ Total : ${chats.length} Chat${chats.length ? '\n' + chats.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) === undefined ? 'Unknown' : conn.getName(jid)}
│ ${jid}
`.trim()).join('\n') : ''}
└────

┌ *Banned Users list*
│ Total : ${users.length} User${users.length ? '\n' + users.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) === undefined ? 'Unknown' : conn.getName(jid)}
│ https://wa.me/${jid.split('@')[0]}
│ ${global.db.data.users[jid].bannedDate > now ? msToDate(global.db.data.users[jid].bannedDate - now) : '*Permanen!*'}
`.trim()).join('\n') : ''}
└────
`, m)
}

handler.help = ['listbanned']
handler.tags = ['info']
handler.command = /^listban(ned)?|ban(ned)?list|daftarban(ned)?$/i
module.exports = handler

function msToDate(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / 1000);
    return `${days} Hari ${hours} Jam ${minutes} Menit ${sec} Detik`;
}