let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} anime`, m)
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let api = await Func.fetchJson(`https://itzpire.site/ai/photoleap?prompt=${text}`)
if (api.status) {
conn.sendFile(m.chat, api.result, '', '', m)
} else {
m.reply(api.message)
}
};
handler.help = ["photoleap *<text>*"]
handler.tags = ["ai"]
handler.command = ["photoleap"]
handler.premium = false
handler.register = true

module.exports = handler