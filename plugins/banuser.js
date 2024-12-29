let handler = async (m, { conn, text }) => {
    let user = global.db.data.users[m.sender]
    
    if (!text) return conn.reply(m.chat, '• *Example :* .ban 628816609112', m)
    
    let who
    if (m.isGroup) {
        who = text.includes('@') ? text.split('@')[1] + '@s.whatsapp.net' : text + '@s.whatsapp.net'
    } else {
        who = text + '@s.whatsapp.net'
    }
    
    if (!who || !global.db.data.users[who]) return conn.reply(m.chat, '🚩 User not found or invalid number', m)
    
    let targetUser = global.db.data.users[who]
    targetUser.banned = true
    conn.sendMessage(m.chat, { react: { text: '☑️', key: m.key }})
    
    if (targetUser.vip === true) {
        user.vip = true
        targetUser.banned = false
        conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }})
        return conn.reply(m.chat, '🚩 Cannot ban them because they are a special member', m)
    }
}

handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true

module.exports = handler