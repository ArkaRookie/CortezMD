let handler = async (m, { command, usedPrefix, text }) => {
  let which = command.replace(/del/i, '')
  if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat daftar nya`
  let msgs = global.db.data.msgs
  if (!text in msgs) throw `'${text}' tidak terdaftar di daftar pesan`
  delete msgs[text]
  m.reply(`Berhasil menghapus pesan di daftar pesan dengan nama '${text}'`)
}
handler.help = ['msg', 'video', 'audio', 'img', 'sticker', 'gif'].map(v => 'del' + v + ' ')
handler.tags = ['tools']
handler.command = /^del(msg|video|audio|img|stic?ker|gif)$/
module.exports = handler