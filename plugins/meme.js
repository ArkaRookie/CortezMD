let { tiktoks } = require('../lib/scrape.js')

let handler = async (m, { conn, usedPrefix, command }) => {
conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
let kemii = await tiktoks(`absurd humor`)
conn.sendMessage(m.chat, {
video: {url: kemii.no_watermark},
gifPlayback: true, 
caption: '```Result from:```'+' `Meme Video`'
}, {quoted: m})
}
handler.help = ['meme']
handler.tags = ['internet']

handler.command = /^(meme)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler