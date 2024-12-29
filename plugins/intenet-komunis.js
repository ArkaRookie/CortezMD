/** !! THIS CODE GENERATE BY RODOTZBOT !! **/

let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Send/Reply Images with the caption *.komunis*'
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  let media = await q.download()
  let url = await uploadImage(media)
  let hasil = await (await fetch(`https://api.popcat.xyz/communism?image=${url}`)).buffer()
  await conn.sendFile(m.chat, hasil, '', set.footer, m)
}

handler.help = ['komunis']
handler.tags = ['internet']
handler.premium = false
handler.command = /^(komunis)$/i
handler.register = true
handler.limit = true
handler.private = false

module.exports = handler