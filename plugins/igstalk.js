const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Contoh\n${usedPrefix + command} ryhar.store`
  
  let result = await fetch(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=${global.lolkey}`)
  let res = await result.json()
  
  if (!res) throw res.text
  
  let caption = `👤 *Nama:* ${res.result.fullname}
◦ *Username:* ${res.result.username}
◦ *Pengikut:* ${res.result.followers}
◦ *Mengikuti:* ${res.result.following}
◦ *Post:* ${res.result.posts} 
${res.result.bio ? `
◦ *Bio:*
${res.result.bio}` : ''}

ᴘᴏᴋɪɪ ᴋᴀᴡᴀɪɪ ʙʏ ᴘᴀᴘᴀʜ ᴀxᴇʟʟ ♡
`.trim()

  await conn.sendFile(m.chat, res.result.photo_profile, 'instagram.jpeg', caption , m)
}

handler.help = ['igstalk']
handler.tags = ['tools']
handler.command = /^(igstalk)$/i

module.exports = handler