const fetch = require("node-fetch")

let handler = async (m, { conn, text, usedPrefix, command }) => {
  conn.cai = conn.cai ? conn.cai : {};
  if (!text) throw `*• Example:* ${usedPrefix + command} *[on/off]*
*• Example search Chara:* ${usedPrefix + command} search *[characters name]*`
  const keyword = text.split(" ")[0];
  const kemii = text.slice(keyword.length + 1);
  if (keyword === "search") {
    if (!kemii) throw `*• Example:* ${usedPrefix + command} ${keyword} Hutao`
    m.reply(`_🔍searching data.... *[ ${kemii} ]*_`);
    let search = await (await fetch(
      `https://api.alyachan.dev/api/cai-search?q=${kemii}&apikey=dcodekemii`,
    )).json();
    let karakter = search.data.map((a, index) => `*[ ${index + 1}. ${a.name} ]*
*• Greeting:* \`${a.greeting}\`
*• Visibility:* ${a.visibility}
*• Creator:* ${a.creator_name}`,
      )
      .join("\n\n");
   const reply = await conn.reply(m.chat, karakter, m, {
        contextInfo: {
            mentionedJid: [],
            groupMentions: [],
    externalAdReply: {
        title: search.data[0].name,
        body: search.data[0].greeting,
        thumbnailUrl: "https://characterai.io/i/200/static/" + search.data[0].avatar,
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: false
          }
        }
    })
   await conn.reply(m.chat, `*[ KETIK ANGKA 1 SAMPAI ${search.data.length} ]*
> • _! Pilih karakter anda dengan mengetik *.cai set (nomor urut)* sesuai dengan pesan diatas_`, reply)
  conn.cai[m.sender] = {
pilih: search.data
}
  } else if (keyword === "set") {
      if (!conn.cai[m.sender]) throw `*[ KAMU BELUM MENCARI CHARACTER ]*
> _ketik *.cai search* untuk mencari characters favorit mu_`
if (!conn.cai[m.sender].pilih) throw `*[ KAMU SUDAH PUNYA CHARACTER ]*
> _ketik *.cai search* untuk menganti characters_`
      if (!kemii) throw `*• Example:* ${usedPrefix + command} ${keyword} 1`
    let pilihan = conn.cai[m.sender].pilih[kemii - 1]
    let kk = '```Berhasil Memilih Data:```' + ` ${pilihan.name}`
    m.reply(kk)
    
conn.cai[m.sender] = {
  isChats: false,
  id: pilihan.character_id,
  name: pilihan.name
     }
  } else if (keyword === "on") {
  if (!conn.cai[m.sender]) throw `*[ KAMU BELUM MENCARI CHARACTER ]*
> _ketik *.cai search* untuk mencari characters favorit mu_`
  conn.cai[m.sender].isChats = true
  m.reply("_*[ ✓ ] Room chat berhasil dibuat*_")
  } else if (keyword === "off") {
  if (!conn.cai[m.sender]) throw `*[ KAMU BELUM MENCARI CHARACTER ]*
> _ketik *.cai search* untuk mencari characters favorit mu_`
  conn.cai[m.sender].isChats = false
  m.reply("_*[ ✓ ] Berhasil keluar dari Room chat*_")
  }
};

handler.before = async(m ,{ conn, usedPrefix }) => {
conn.cai = conn.cai ? conn.cai : {}
  if (!m.text) return
if (m.text.match(global.prefix)) return
  if (!conn.cai[m.sender]) return
  if (!conn.cai[m.sender].isChats) return
  let kemii = await m.reply('```....```')
 let chat = await(await fetch(`https://api.alyachan.dev/api/cai?character_id=${conn.cai[m.sender].id}&message=${m.text}&apikey=dcodekemii`)).json()
 await conn.sendMessage(m.chat, { text: `${chat.data.content}`, edit: kemii })
}
handler.help = ["cai *<text>*"];
handler.tags = ["ai"];
handler.command = ["cai"];
module.exports = handler;