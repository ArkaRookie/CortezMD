let { proto } = require('@whiskeysockets/baileys')
let handler = async (m, { conn, command, usedPrefix, text }) => {
  let M = proto.WebMessageInfo
  let which = command.replace(/add/i, '')
  if (!m.quoted) throw `Balas pesan dengan perintah *${usedPrefix + command}*`
  if (!text) throw `Pengunaan:${usedPrefix + command} <teks>\n\nContoh:\n${usedPrefix + command} tes`
  let msgs = db.data.msgs
  if (text in msgs) throw `'${text}' telah terdaftar!`
  msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
  if (db.data.chats[m.chat].getmsg) return m.reply(`Berhasil menambahkan pesan '${text}' Akses dengan mengetik namanya`.trim())
  else return await conn.reply(m.chat, `Berhasil menambahkan pesan '${text}'\n\nakses dengan ${usedPrefix}get${which} ${text}`, m)
}
handler.help = ['msg', 'video', 'audio', 'img', 'stiker', 'gif'].map(v => 'add' + v + '')
handler.tags = ['tools']
handler.command = /^add(msg|video|audio|img|stic?ker|gif)$/
module.exports = handler