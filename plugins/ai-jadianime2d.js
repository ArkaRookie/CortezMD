let axios = require('axios')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return conn.reply(m.chat, 'Send/Reply Images with the caption *.jadianime*', m)
    let media = await q.download()
    let url = await uploadImage(media)
    try {
    conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    await conn.sendFile(m.chat, `https://skizo.tech/api/toanime?apikey=katz&url=${url}`, '', '', m)
    } catch (e) {
    m.reply('Err')
    }
}
handler.help = ["jadianime2d *<image>*"]
handler.tags = ["convert"]
handler.command = /^(jadianime2d)$/i
handler.limit = true
handler.premium = true
module.exports = handler;