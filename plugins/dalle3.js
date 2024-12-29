let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} dog.`, m)
    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    let kemii = await m.reply(`_Process generate image : *${text}*_`)
    let hasil = await skyzo.dalle3(text)
    let salsa = await conn.sendMessage(m.chat, { text: `_Success generate image : *${text}*_`, edit: kemii })
    await conn.sendFile(m.chat, hasil.url, 'dalle3.jpg', '*Powered by :* _https://skizo.tech_', salsa)
};
handler.help = ["dalle3 *<text>*"]
handler.tags = ["ai"]
handler.command = ["dalle3"]
handler.premium = true
handler.register = true
handler.limit = true

module.exports = handler