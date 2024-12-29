var fetch = require('node-fetch');
let uploadImage = require('../lib/uploadImage')

var handler = async (m, { text, usedPrefix, command }) => {
let today = new Date();
let tanggal = today.toLocaleDateString("id-ID", { 
day: 'numeric', 
month: 'long', 
year: 'numeric' 
})
let who = m.mentionedJid[0];
if (!text) return conn.reply(m.chat,  "Minimal tag 1 member!", m)
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/1dff1788814dd281170f8.jpg")
await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let pp = await (await fetch(ppUrl)).buffer()
let link = await uploadImage(pp)
let nama = await conn.getName(who);
let ppUrl2 = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1dff1788814dd281170f8.jpg")
let pp2 = await (await fetch(ppUrl2)).buffer()
let link2 = await uploadImage(pp2)
let nama2 = await conn.getName(m.sender);
let kartu = `https://api.lolhuman.xyz/api/kartunikah?apikey=${global.lolkey}&ppsuami=${link}&ppistri=${link2}&qrcode=${link2}&suami=${nama}&istri=${nama2}&tgl=${tanggal}&kec=Wakanda&prov=Wakanda%20Forever&akta=XXXX/XXXX/VI/2045`
let teks = `Selamat Menikah ${nama2}`
await conn.sendMessage(m.chat, { image: { url: kartu }, caption: teks, mentions: conn.parseMention(teks) }, { quoted: m })
}      
handler.command = /^kartunikah$/i
handler.help = ['kartunikah']
handler.tags = ['group'];
handler.premium = false
handler.register = true
handler.group = true

module.exports = handler;