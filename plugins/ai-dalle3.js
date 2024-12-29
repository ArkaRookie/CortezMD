let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} anime`, m)
    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    let api = await Func.fetchJson(`https://bing-rulzz.cyclic.app/api/bingimg?prompt=${text}`)
    if (api.status) {
    await conn.sendFile(m.chat, api.result[0], '', '', m)
    await conn.sendFile(m.chat, api.result[1], '', '', m)
    } else {
    conn.reply(m.chat, `Error: Bang`, m)
    }
};
handler.help = ["create *<text>*"]
handler.tags = ["diffusion","ai"]
handler.command = ["create"]
handler.premium = false

module.exports = handler