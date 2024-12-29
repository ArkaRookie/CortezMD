const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix + command} kemii`, m)
  conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });
  let hasil = await lol.ephoto(command, text)
  let buffer = hasil.toBuffer('image/jpeg')
  conn.sendFile(m.chat, buffer, '', 'Powered by : https://api.lolhuman.xyz', m)
  }

handler.help = ['fpslogo','anonymhacker','beautifulflower','birthdaycake','birthdayday','cartoongravity','galaxybat','galaxystyle','galaxywallpaper','glittergold','glossychrome','greenbush','greenneon','heartshaped','hologram3d','lighttext','logogaming','luxurygold','metallogo','multicolor3d','noeltext','puppycute','royaltext','silverplaybutton','snow3d','starsnight','textbyname','textcake','watercolor','wooden3d','writegalacy'].map(v => v + ' *<teks>*')
handler.command = /^(fpslogo|anonymhacker|beautifulflower|birthdaycake|birthdayday|cartoongravity|galaxybat|galaxystyle|galaxywallpaper|glittergold|glossychrome|greenbush|greenneon|heartshaped|hologram3d|lighttext|logogaming|luxurygold|metallogo|multicolor3d|noeltext|puppycute|royaltext|silverplaybutton|snow3d|starsnight|textbyname|textcake|watercolor|wooden3d|writegalacy)$/i
handler.tags = ['ephoto']
handler.limit = true

module.exports = handler