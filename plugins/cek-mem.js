let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, '*Ketik Namanya!*', m)
	
  let mek = `
*––––––『 CEK - MEM 』––––––*
• Nama : ${text}
• Memek : ${pickRandom(['Ih item','Belang wkwk','Muluss','Putih Mulus','Black Doff','Pink wow','Item Glossy'])}
• Lubang : ${pickRandom(['Perawan','Ga perawan','Udah pernah dimasukin','Masih rapet','Tembem'])}
• Jembut : ${pickRandom(['Lebat','Ada sedikit','Gada jembut','Tipis','Mulus'])}
`.trim()

conn.reply(m.chat, mek, m)
}
handler.help = ['cekmemek']
handler.tags = ['fun']
handler.command = /^cekmemek/i
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}