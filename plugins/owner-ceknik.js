let { nikParse } = require('../lib/nik-parse.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  // Memastikan ada input dari pengguna
  if (!text) return m.reply(`• *Example :* ${usedPrefix + command} 3674024105760002`)
  
  // Mengirim reaksi saat proses dimulai
  await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  
  // Memanggil fungsi nikParse untuk memproses input
  let result = await nikParse(text)
  
  // Mengirim hasil pemrosesan kembali ke pengguna
  await conn.reply(m.chat, `${Func.jsonFormat(result)}`, m)
  
  // Menghapus reaksi setelah selesai
  await conn.sendMessage(m.chat, { react: { text: '', key: m.key }})
}

// Menentukan tag dan bantuan untuk handler
handler.tags = ['owner']
handler.help = ["ceknik *<text>*"]
handler.command = ["ceknik"]

// Menandai handler ini sebagai premium
handler.premium = false
handler.owner = true

module.exports = handler