const { youtube } = require("btch-downloader")

let handler = async(m, { conn, usedPrefix, command, text }) => {
	if (!text) return m.reply(`*Example:* ${usedPrefix + command} https://www.youtube.com/watch?v=Z28dtg_QmFw`)
	m.reply(wait)
	try {
		let { mp4 } = await youtube(text)
		await conn.sendFile(m.chat, mp4, "Yt.mp4", "Success", m)
	} catch (err) {
		throw err
	}
}
handler.help = handler.command = ['ytmp4','ytv']
handler.tags = ['downloader']
handler.exp = 0
handler.limit = true
handler.premium = false

module.exports = handler