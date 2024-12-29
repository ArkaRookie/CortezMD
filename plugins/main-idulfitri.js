let handler = async (m, { conn, text, usedPrefix, command }) => {
  conn.reply(m.chat, 'Idul Fitri', fkontak, adReply)
}
handler.help = ["idulfitri"]
handler.tags = ["main"]
handler.command = ["idulfitri"]
module.exports = handler