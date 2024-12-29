let { Darkjokes } = require('dhn-api')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  await m.reply('Sedang diproses...')
  let a = Darkjokes()
  let b = 'Dark Jokes Meme' // Removed layout.xl since layout is not defined
  await conn.sendFile(m.chat, a, '', b, m)
}
handler.help = ["darkjoke"]
handler.tags = ["fun"]
handler.command = ["darkjoke", "darkjokes"]
handler.limit = true
module.exports = handler