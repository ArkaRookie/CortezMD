let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
switch(command) {
case 'spotify2': case 'sp2': case 'spt2': {
if (!text) throw(`Contoh : ${usedPrefix + command} dandelion`);
let res = await fetch(`https://www.api-nightmares.my.id/api/spotify/search?q=${text}&apikey=Tio`);
let result = await res.json()
const api = result.data
const ini = Math.floor(Math.random() * api.length)
const random = api[ini]
const hasil = `乂 *S P O T I F Y*

*Title*: ${random.title}
*Duration*: ${random.duration}
*Popular*: ${random.popularity}
*Url*: ${random.url}
`
conn.sendMessage(m.chat, {text: hasil, contextInfo:
{
"externalAdReply": {
"title": '𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘',
"body": ``,
"showAdAttribution": true,
"mediaType": 1,
"sourceUrl": '',
"thumbnailUrl": 'https://telegra.ph/file/50afb355fac55370492de.jpg',
"renderLargerThumbnail": true
}
}}, {quoted: m})
const spodl = await fetchJson(`https://www.api-nightmares.my.id/api/spotify/dl?link=${random.url}&apikey=Tio`) 
const spoDl = spodl.result.download
conn.sendMessage(m.chat, {
audio: {
url: spoDl
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `𝙎𝙥𝙤𝙩𝙞𝙛𝙮𝙈𝙪𝙨𝙞𝙘`,
body: "",
thumbnailUrl: 'https://telegra.ph/file/d8283bf6f948413ad0e62.jpg', 
sourceUrl: '',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}
}
}, {quoted: m})
}
break
  }
}
handler.help = ["spotify2"]
handler.tags = ["downloader"]
handler.command = ["spotify2"]
module.exports = handler