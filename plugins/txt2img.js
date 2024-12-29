// txt2img By Takeshi Zuraa

const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} 1girl, solo, ponytail, blush.`, m)
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
	await m.reply(`_Generate Image From: *${text}*_`)
	let url = `https://api.fumifumi.xyz/api/text2img?query=${text}`
	  let capt = '```Succes Generate Image```\n\n'
  capt += '```- Prompt:```' + '```' + ` ${text}` + '```\n'
	await conn.sendFile(m.chat, url, 'freefire.jpg', capt, m)
}
handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img)$/i
handler.premium = true
module.exports = handler;