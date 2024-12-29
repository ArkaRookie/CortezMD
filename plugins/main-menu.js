let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let axios = require('axios')
let os = require('os')
let { platform } = require('node:process')
let canvafy = require ('canvafy')
let { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
let moment = require('moment-timezone')
let { createCanvas, loadImage, registerFont } = require('canvas');
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
const defaultMenu = {
  before: ``.trimStart(),
  header: '*〘 %category 〙*\n╔══════════════',
  body: '╟ %cmd',
  footer: '╚════════════════',
  after: ``,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key }});
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['anonymous', 'main', 'fun', 'islami', 'info', 'ai', 'bug', 'jadibot', 'atlantic', 'store', 'ephoto', 'ssh', 'clans', 'life', 'search', 'downloader', 'textprome', 'nsfw', 'convert', 'premium', 'music', 'simulator', 'game', 'judi', 'group', 'panel', 'internet', 'stalking', 'hengker', 'owner', 'rpg', 'crypto', 'diffusion', 'sticker', 'api', 'tools', 'mods', 'anime', 'api', 'smm']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'anonymous') tags = {
    anonymous: 'ANONYMOUS'
  }
  if (teks == 'downloader') tags = {
    downloader: 'DOWNLOADER'
  }
  if (teks == 'ai') tags = {
    ai: 'AI'
  }
  if (teks == 'convert') tags = {
    convert: 'CONVERT'
  }
  if (teks == 'crypto') tags = {
    crypto: 'CRYPTO'
  }
  if (teks == 'stalking') tags = {
    stalking: 'STALKING'
  }
  if (teks == 'clans') tags = {
    clans: 'CLANS'
  }
  if (teks == 'main') tags = {
    main: 'MAIN'
  }
  if (teks == 'diffusion') tags = {
    diffusion: 'DIFFUSION'
  }
  if (teks == 'api') tags = {
    api: 'API'
  }
  if (teks == 'premium') tags = {
    premium: 'PREMIUM'
  }
  if (teks == 'game') tags = {
    game: 'GAME'
  }
  if (teks == 'smm') tags = {
    smm: 'SMM'
  }
  if (teks == 'simulator') tags = {
    simulator: 'SIMULATOR'
  }
  if (teks == 'group') tags = {
    group: 'GROUP'
  }
  if (teks == 'panel') tags = {
    panel: 'PANEL'
  }
  if (teks == 'ssh') tags = {
    ssh: 'SSH'
  }
  if (teks == 'music') tags = {
    music: 'MUSIC'
  }
  if (teks == 'anonymous') tags = {
    anonymous: 'ANONYMOUS'
  }
  if (teks == 'atlantic') tags = {
    atlantic: 'ATLANTIC'
  }
  if (teks == 'fun') tags = {
    fun: 'FUN'
  }
  if (teks == 'islami') tags = {
    islami: 'ISLAMI'
  }
  if (teks == 'textprome') tags = {
    textprome: 'TEXTPROME'
  }
  if (teks == 'store') tags = {
    store: 'STORE'
  }
  if (teks == 'bug') tags = {
    bug: 'BUG'
  }
  if (teks == 'jadibot') tags = {
    jadibot: 'JADIBOT'
  }
  if (teks == 'nsfw') tags = {
    nsfw: 'NSFW'
  }
  if (teks == 'internet') tags = {
    internet: 'INTERNET'
  }
  if (teks == 'judi') tags = {
    judi: 'JUDI'
  }
  if (teks == 'hengker') tags = {
    hengker: 'HENGKER'
  }
  if (teks == 'ephoto') tags = {
    ephoto: 'EPHOTO'
  }
  if (teks == 'search') tags = {
    search: 'SEARCH'
  }
  if (teks == 'owner') tags = {
    owner: 'OWNER'
  }
  if (teks == 'rpg') tags = {
    rpg: 'RPG'
  }
  if (teks == 'info') tags = {
    info: 'INFO'
  }
if (teks == 'mods') tags = {
    mods: 'MODS'
  }
if (teks == 'api') tags = {
    api: 'API'
  }
  if (teks == 'sticker') tags = {
    sticker: 'STICKER'
  }
  if (teks == 'tools') tags = {
    tools: 'TOOLS'
  }
  if (teks == 'life') tags = {
    life: 'LIFE'
  }
  if (teks == 'anime') tags = {
    anime: 'ANIME'
  }
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let user = global.db.data.users[m.sender];
    let curr = user.exp - min
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let waktu = moment.tz('Asia/Jakarta').format('HH:mm');
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let ucap = ucapan()
    let module = package.module
    let totalreg = Object.keys(global.db.data.users).length
    let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "`CorteZzX@kyllnex.ruru.be"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
    };     
    let payment = {"key":{"remoteJid":"0@s.whatsapp.net","fromMe":false},"message":{"requestPaymentMessage":{"currencyCodeIso4217":"USD","amount1000":"99999999999","requestFrom":"0@s.whatsapp.net","noteMessage":{"extendedTextMessage":{"text":`${name}-san 🐼`,"contextInfo":{"mentionedJid":[`${m.sender}`]}}},"expiryTimestamp":"0","amount":{"value":"99999999999","offset":1000,"currencyCode":"USD"}}}}
    const gh = new Date(
    new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      }),
    );
    const hours = gh.getHours();
    const minutes = gh.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let group = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
    let isPremium = user.premium ? "Premium" : "Free User"
    let lim = user.premium ? '∞' : user.limit;
    let leve = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level; 
    let rank = user.owner ? 'Immortality' : user.premium ? 'Sepuh' : 'Kroco'
    let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1dff1788814dd281170f8.jpg");
    let tum = await getBuffer(ppUrl)
    let thum = await canvas(name, Func.formatter(user.point), ppUrl)
    let kata = [
    'Bukan kematian yang paling menyedihkan, melainkan hidup yang kehilangan tujuannya.',
    'Kau tahu, kadang kita harus melepaskan apa yang kita cintai demi kebahagiaan orang lain.',
    'Orang kuat tidak pernah lari dari masalah, mereka menghadapinya dengan kepala tegak.',
    'Kita mungkin terluka, tapi orang yang mengerti rasa sakit itu yang akan bertahan.',
    'Jika kita menangis di dalam mimpiku, apakah air mata itu juga nyata?',
    'Saat seseorang yang kau cintai berubah, bagaimana perasaanmu?',
    'Dalam kehidupan, jangan sampai kamu mengalami sakit hati yang sama.',
    'Orang yang paling menyakitkan adalah orang yang paling dekat dengan kita.',
    'Kita bisa menyembunyikan rasa sakit, tapi kita tidak bisa menyembunyikan air mata.',
    'Terluka itu takdir, tetapi menyakiti diri sendiri adalah pilihan.',
    'Hidup ini tidak adil, tetapi aku akan tetap tersenyum.',
    'Bukanlah kesedihan yang membuatmu lemah, tetapi bagaimana kamu bangkit kembali setelahnya.',
    'Sakit hati itu tidak pernah hilang, kita hanya belajar untuk menyembunyikannya.',
    'Kita mungkin berpisah, tapi kenangan itu akan tetap ada.',
    'Jangan menangis karena sesuatu yang sudah berlalu, tersenyumlah karena itu pernah ada.',
    'Hidup ini singkat, jadi jangan sia-siakan waktu dengan orang yang tidak menghargaimu.',
    'Terluka bukanlah akhir dari segalanya, itu artinya kita masih hidup.',
    'Orang yang paling dekat dengan kita adalah orang yang paling sulit untuk kita lupakan.',
    'Kesedihan adalah harga yang harus kita bayar untuk cinta.',
    'Kadang kala kita harus kehilangan sesuatu untuk menyadari betapa berharganya itu.',
    'Jangan pernah menyerah, karena yang tahu masa depan adalah waktu itu sendiri.',
    'Kesedihan adalah bukti bahwa kita masih memiliki hati.',
    'Jangan pernah menyerah, karena setiap kesedihan akan ada kebahagiaan di baliknya.',
    'Jangan pernah membiarkan kesedihan menghentikan langkahmu menuju masa depan.',
    'Mungkin dunia ini tidak adil, tapi itu bukan alasan untuk berhenti berjuang.',
    'Kadang kala kita harus melepaskan apa yang kita cintai, untuk kebahagiaan mereka.',
    'Jangan menangis karena sesuatu yang sudah berlalu, tapi tersenyumlah karena itu telah membuatmu menjadi lebih kuat.',
    'Hidup ini seperti sebuah permainan, kita bisa kalah atau menang, tapi kita harus terus bermain.',
    'Jangan pernah menyerah, karena setiap langkah adalah bagian dari perjalanan.',
    'Terluka bukan berarti kita lemah, itu artinya kita masih hidup.',
    'Kesedihan adalah titik balik dari kebahagiaan.',
    'Jika air mata adalah bahasa hati, aku ingin menjadi seorang yang bisa membacanya.',
    'Hidup ini seperti angin, kadang kencang kadang pelan, tapi kita harus terus bergerak maju.',
    'Jangan pernah takut untuk menangis, karena itu adalah cara terbaik untuk membersihkan hatimu.',
    'Terluka bukanlah akhir dari segalanya, itu adalah awal dari perjuangan baru.',
    'Jangan pernah menyerah, karena setiap kesedihan adalah pelajaran yang berharga.',
    'Hidup ini seperti musik, kadang sedih kadang riang, tapi bagaimana kita menyanyikannya adalah pilihan kita.',
    'Jangan pernah menyerah, karena setiap kekalahan adalah langkah menuju kemenangan.',
    'Kesedihan adalah titik balik dari kebahagiaan.',
    'Mungkin dunia ini terlalu kejam untuk dihadapi sendiri.',
    'Jika air mata adalah bahasa hati, aku ingin menjadi seorang yang bisa membacanya.',
    'Hidup ini seperti angin, kadang kencang kadang pelan, tapi kita harus terus bergerak maju.',
    'Jangan pernah takut untuk menangis, karena itu adalah cara terbaik untuk membersihkan hatimu.',
    'Terluka bukanlah akhir dari segalanya, itu adalah awal dari perjuangan baru.',
    'Jangan pernah menyerah, karena setiap kesedihan adalah pelajaran yang berharga.',
    'Hidup ini seperti musik, kadang sedih kadang riang, tapi bagaimana kita menyanyikannya adalah pilihan kita.',
    'Jangan pernah menyerah, karena setiap kekalahan adalah langkah menuju kemenangan.',
    'Kesedihan adalah titik balik dari kebahagiaan.',
    'Mungkin dunia ini terlalu kejam untuk dihadapi sendiri.',
    'Jika air mata adalah bahasa hati, aku ingin menjadi seorang yang bisa membacanya.',
    'Hidup ini seperti angin, kadang kencang kadang pelan, tapi kita harus terus bergerak maju.',
    'Jangan pernah takut untuk menangis, karena itu adalah cara terbaik untuk membersihkan hatimu.',
    'Terluka bukanlah akhir dari segalanya, itu adalah awal dari perjuangan baru.',
    'Jangan pernah menyerah, karena setiap kesedihan adalah pelajaran yang berharga.',
    'Hidup ini seperti musik, kadang sedih kadang riang, tapi bagaimana kita menyanyikannya adalah pilihan kita.',
    'Jangan pernah menyerah, karena setiap kekalahan adalah langkah menuju kemenangan.',
    'Kesedihan adalah titik balik dari kebahagiaan.',
    'Mungkin dunia ini terlalu kejam untuk dihadapi sendiri.',
    'Jika air mata adalah bahasa hati, aku ingin menjadi seorang yang bisa membacanya.',
    'Hidup ini seperti angin, kadang kencang kadang pelan, tapi kita harus terus bergerak maju.',
    'Jangan pernah takut untuk menangis, karena itu adalah cara terbaik untuk membersihkan hatimu.',
    'Terluka bukanlah akhir dari segalanya, itu adalah awal dari perjuangan baru.',
    'Jangan pernah menyerah, karena setiap kesedihan adalah pelajaran yang berharga.',
    'Hidup ini seperti musik, kadang sedih kadang riang, tapi bagaimana kita menyanyikannya adalah pilihan kita.',
    'Jangan pernah menyerah, karena setiap kekalahan adalah langkah menuju kemenangan.',
    'Kesedihan adalah titik balik dari kebahagiaan.',
    'Mungkin dunia ini terlalu kejam untuk dihadapi sendiri.',
    'Jika air mata adalah bahasa hati, aku ingin menjadi seorang yang bisa membacanya.',
    'Hidup ini seperti angin, kadang kencang kadang pelan, tapi kita harus terus bergerak maju.',
    'Jangan pernah takut untuk menangis, karena itu adalah cara terbaik untuk membersihkan hatimu.',
    'Terluka bukanlah akhir dari segalanya, itu adalah awal dari perjuangan baru.',
    'Jangan pernah menyerah, karena setiap kesedihan adalah pelajaran yang berharga.',
    'Hidup ini seperti musik, kadang sedih kadang riang, tapi bagaimana kita menyanyikannya adalah pilihan kita.',
    'Jangan pernah menyerah, karena setiap kekalahan adalah langkah menuju kemenangan.',
    'Kesedihan adalah titik balik dari kebahagiaan.',
    'Mungkin dunia ini terlalu kejam untuk dihadapi sendiri.',
    'Jika air mata adalah bahasa hati, aku ingin menjadi seorang yang bisa membacanya.',
    'Hidup ini seperti angin, kadang kencang kadang pelan, tapi kita harus terus bergerak maju.',
    'Jangan pernah takut untuk menangis, karena itu adalah cara terbaik untuk membersihkan hatimu.',
    'Terluka bukanlah akhir dari segalanya, itu adalah awal dari perjuangan baru.',
    'Jangan pernah menyerah, karena setiap kesedihan adalah pelajaran yang berharga.'
    ]
    let quotes = `${pickRandom(kata)}`
    let today = new Date();
    let tanggal = today.toLocaleDateString("id-ID", { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
      })
    let day = today.toLocaleDateString("id-ID", { weekday: "long" });
    let more = String.fromCharCode(8206)
    let readMore = more.repeat(4001)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let capt = `Hallo, @${m.sender.replace(/@.+/g, '')} 🤗
  Saya Adalah Bot WhatsApp Yang Di Rancang Oleh _*Escobar Cortez*_,
Saya Siap Membantu Anda
  
 – *OWNER INFORMATION*
 •°• Nama : Cortez
 •°• Umur : 14 Tahun
 •°• Status : Sigma
 •°• Contact Me
    • TT      : @escobar_cortez
    • Wa     : ${global.nomorown}
    • Github  : dcode-al
    
 – *BOT INFORMATION*
 •°• Database : Mongodb
 •°• Library : ${module}
 •°• Author : Escobar Cortez
 •°• Source : dcode-al

 *〘 List Menu Bot 〙*
╔══════════════
╟ ${_p + command} main
╟ ${_p + command} info
╟ ${_p + command} downloader
╟ ${_p + command} ai
╟ ${_p + command} diffusion
╟ ${_p + command} convert
╟ ${_p + command} premium
╟ ${_p + command} judi
╟ ${_p + command} bug
╟ ${_p + command} game
╟ ${_p + command} fun
╟ ${_p + command} music
╟ ${_p + command} group
╟ ${_p + command} atlantic
╟ ${_p + command} smm
╟ ${_p + command} store
╟ ${_p + command} panel
╟ ${_p + command} ssh
╟ ${_p + command} jadibot
╟ ${_p + command} internet
╟ ${_p + command} search
╟ ${_p + command} hengker
╟ ${_p + command} islami
╟ ${_p + command} ephoto
╟ ${_p + command} textprome
╟ ${_p + command} owner
╟ ${_p + command} rpg
╟ ${_p + command} simulator
╟ ${_p + command} sticker
╟ ${_p + command} anonymous
╟ ${_p + command} tools
╟ ${_p + command} anime
╚════════════════

> © CorteZzX By Escobar`
      conn.menubot = conn.menubot ? conn.menubot : {
      id: 1
      }
      if (conn.menubot.id === 1) {
      let tekss = `Hallo, @${m.sender.replace(/@.+/g, '')} 🤗
  Aku Adalah Bot WhatsApp Yang Di Rancang Oleh _*Escobar Cortez*_,
Saya Siap Membantu Anda
  
 – *OWNER INFORMATION*
 •°• Nama : Cortez
 •°• Umur : 14 Tahun
 •°• Status : Sigma
 •°• Contact Me
    • TT      : @escobar_cortez
    • Wa     : ${global.nomorown}
    • Github  : dcode-Aldev
    
 – *BOT INFORMATION*
 •°• Database : Mongodb
 •°• Library : ${module}
 •°• Author : Escobar Cortez 
 •°• Source : dcode-Aldev`
      let sections = [{
		title: 'Artificial Intelligence ( Ai )', 
		highlight_label: 'Populer Plugins',
		rows: [{
title: '⌜ ≡ Download Feature ⌟',
  description: "Displays menu Download ( List Menu )",
  id: '.menu downloader'
},
{
  title: '⌜ ≡ Main Feature ⌟',
  description: `Displays menu Main ( List Menu )`,
  id: '.menu main'
},
{
  title: '⌜ ≡ Info Feature ⌟',
  description: `Displays menu Info ( List Menu )`,
  id: '.menu info'
},
{
  title: '⌜ ≡ Ai Feature ⌟',
  description: "Displays menu Ai ( List Menu )",
  id: '.menu ai'
},
{
  title: '⌜ ≡ Diffusion Feature ⌟',
  description: "Displays menu Diffusion ( List Menu )",
  id: '.menu diffusion'
},
{
  title: '⌜ ≡ Convert Feature ⌟',
  description: "Displays menu Convert ( List Menu )",
  id: '.menu convert'
},
{
  title: '⌜ ≡ Premium Feature ⌟',
  description: "Displays menu Premium ( List Menu )",
  id: '.menu premium'
},
{
  title: '⌜ ≡ Judi Feature ⌟',
  description: "Displays menu Judi ( List Menu )",
  id: '.menu judi'
},
{
  title: '⌜ ≡ Bug Feature ⌟',
  description: "Displays menu Bug ( List Menu )",
  id: '.menu bug'
},
{
  title: '⌜ ≡ Game Feature ⌟',
  description: "Displays menu Game ( List Menu )",
  id: '.menu game'
},
{
  title: '⌜ ≡ Fun Feature ⌟',
  description: "Displays menu Fun ( List Menu )",
  id: '.menu fun'
},
{
  title: '⌜ ≡ Music Feature ⌟',
  description: "Displays menu Music ( List Menu )",
  id: '.menu music'
},
{
  title: '⌜ ≡ Groups Feature ⌟',
  description: "Displays menu Groups ( List Menu )",
  id: '.menu group'
},
{
  title: '⌜ ≡ Atlantic Feature ⌟',
  description: "Displays menu Atlantic ( List Menu )",
  id: '.menu atlantic'
},
{
  title: '⌜ ≡ Smm Feature ⌟',
  description: "Displays menu Smm ( List Menu )",
  id: '.menu smm'
},
{
  title: '⌜ ≡ Store Feature ⌟',
  description: "Displays menu Store ( List Menu )",
  id: '.menu store'
},
{
  title: '⌜ ≡ Panel Feature ⌟',
  description: "Displays menu Panel ( List Menu )",
  id: '.menu panel'
},
{
  title: '⌜ ≡ Ssh Feature ⌟',
  description: "Displays menu Ssh ( List Menu )",
  id: '.menu ssh'
},
{
  title: '⌜ ≡ Jadibot Feature ⌟',
  description: "Displays menu Jadibot ( List Menu )",
  id: '.menu jadibot'
},
{
  title: '⌜ ≡ Internet Feature ⌟',
  description: "Displays menu Internet ( List Menu )",
  id: '.menu internet'
},
{
  title: '⌜ ≡ Hengker Feature ⌟',
  description: "Displays menu Hengker ( List Menu )",
  id: '.menu hengker'
},
{
  title: '⌜ ≡ Islami Feature ⌟',
  description: "Displays menu Islami ( List Menu )",
  id: '.menu islami'
},
{
  title: '⌜ ≡ Ephoto Feature ⌟',
  description: "Displays menu Ephoto ( List Menu )",
  id: '.menu ephoto'
},
{
  title: '⌜ ≡ Textprome Feature ⌟',
  description: "Displays menu Textprome ( List Menu )",
  id: '.menu textprome'
},
{
  title: '⌜ ≡ Owner Feature ⌟',
  description: "Displays menu Owner ( List Menu )",
  id: '.menu owner'
},
{
  title: '⌜ ≡ Rpg Feature ⌟',
  description: "Displays menu Rpg ( List Menu )",
  id: '.menu rpg'
},
{
  title: '⌜ ≡ Simulator Feature ⌟',
  description: "Displays menu Simulator ( List Menu )",
  id: '.menu simulator'
},
{
  title: '⌜ ≡ Sticker Feature ⌟',
  description: "Displays menu Sticker ( List Menu )",
  id: '.menu sticker'
},
{
  title: '⌜ ≡ Anonymous Feature ⌟',
  description: "Displays menu Anonymous ( List Menu )",
  id: '.menu anonymous'
},
{
  title: '⌜ ≡ Tools Feature ⌟',
  description: "Displays menu Tools ( List Menu )",
  id: '.menu tools'
},
{
  title: '⌜ ≡ Anime Feature ⌟',
  description: "Displays menu Anime ( List Menu )",
  id: '.menu anime'
},
{
  title: '⌜ ≡ Search Feature ⌟',
  description: "Displays menu Search ( List Menu )",
  id: '.menu search'
   }]
},
{
title: 'Artificial Intelligence ( Ai )', 
		highlight_label: 'Donasj Ke Owner',
		rows: [{
  title: '⌜ ≡ Donasi ⌟',
  description: `Donasi Money ( Donasi )`,
  id: '.donasi'
	    }]
     }]

let listMessage = {
    title: 'Tap Here!', 
    sections
};
//throw listMessage.sections[0].rows
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
         contextInfo: {
         mentionedJid: [m.sender]
          }, 
          body: proto.Message.InteractiveMessage.Body.create({
            text: tekss
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
           text: 'ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ɪɴᴅʀᴀ ッ'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            subtitle: "Indraa Furina",
            hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: thum }, { upload: conn.waUploadToServer }))
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [              
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage) 
              }
           ],
          })
        })
    }
  }
}, { userJid: m.chat, quoted: m })
conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
      } else if (conn.menubot.id === 2) {
      await conn.reply(m.chat, 
      capt,
      m)           
      } else if (conn.menubot.id === 3) {
      await conn.sendMessage(m.chat, {
      text: Styles(capt), 
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true,
      title: namebot,
      thumbnailUrl: ppUrl,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}}, {quoted: m})
      } else if (conn.menubot.id === 4) {
      let call = {
      scheduledCallCreationMessage: {
      callType: 2,
      scheduledTimestampMs:  Date.now(),
      title: capt
      }}
      await conn.relayMessage(m.chat, call, {})
      } else if (conn.menubot.id === 5) {
      await conn.relayMessage(m.chat, {
      requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: fsizedoc,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: capt,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }
      }
      }
      }
      }
      }, {}); 
      } else if (conn.menubot.id === 6) {
      await conn.sendMessage(m.chat, {
      video: {
      url: 'https://pomf2.lain.la/f/3kb3iuq6.mp4'
      },
      caption: capt,
      gifPlayback: true,
      gifAttribution: 1,
      contextInfo: {
      mentionedJid: [m.sender]
      }}, {quoted: m})
      } else if (conn.menubot.id === 7) {
      const dataBuffer = await new canvafy.Rank()
      .setAvatar(ppUrl)
      .setBackground("image", "https://telegra.ph/file/98225485a33fc4a5b47b2.jpg")
      .setUsername(`${name}`)
      .setBorder("#fff")
      .setRank(level, "LEVEL")
      .setRankColor({text:"#fff",number:"#fff"})
      .setCurrentXp(curr, color = "#000")
      .setRequiredXp(exp, color = "#000")
      .build();
      conn.sendMessage(m.chat, {
      document: {
      url: "https://wa.me/"
      },
      mimetype: minety, 
      pageCount: 2024,
      fileName: `Selamat ${ucap} ${name}`,
      fileLength: 100000000000000,
      jpegThumbnail: await conn.resize(dataBuffer, 300, 100),
      caption: Styles(capt),
      contextInfo: {
      mentionedJid: [m.sender],      
      isForwarded: true,      
      businessMessageForwardInfo: { businessOwnerJid: '6289531639634@s.whatsapp.net' }, 
      forwardedNewsletterMessageInfo: {
      newsletterJid: 'global.newsletterId',
      newsletterName: 'global.salurannama',
      serverMessageId: -1
      },      
      forwardingScore: 2023,      
      }}, { quoted: fkontak })
      } else if (conn.menubot.id === 8) {
      const databg = await new canvafy.Rank()
      .setAvatar(ppUrl)
      .setBackground("image", "https://pomf2.lain.la/f/0lwvrkv.jpg")
      .setUsername(`${name}`)
      .setBorder("#fff")
      .setRank(level, "LEVEL")
      .setRankColor({text:"#fff",number:"#fff"})
      .setCurrentXp(curr, color = "#000")
      .setRequiredXp(exp, color = "#000")
      .build();
      conn.sendMessage(m.chat, {
      document: fs.readFileSync("./package.json"),
      fileName: `Selamat ${ucap} ${name}`,
      fileLength: 100000000000000,
      mimetype: minety,
      jpegThumbnail: await conn.resize(databg, 300, 100),
      caption: capt,
      contextInfo: {
      forwardingScore: 10,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
            newsletterJid: global.newsletterId,
            serverMessageId: null,
            newsletterName: global.salurannama,
        },
externalAdReply: {
showAdAttribution: true,
title: '               ⟡C O R T E Z X • M D⟡',
body: '',
thumbnail: fs.readFileSync('./media/thumbnail1.jpg'),
sourceUrl: "https://chat.whatsapp.com/IOpGQ1XL45v1YQOZZJIFlr",
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: fkontak });
}
      return
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p,
      uptime,
      muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level,
      limit,
      name,
      weton,
      week,
      date,
      dateIslamic,
      time,
      module,
      totalreg,
      rtotalreg,
      role
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.reply(m.chat, Styles(text).trim(), m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}

handler.help = ['help','menu']
handler.tags = ['main']
handler.command = /^(menu|help|menunya|mennu)$/i

handler.register = false;
handler.limit = true;
handler.register = true

module.exports = handler;

function detectSize(bytes) {
    if (typeof bytes !== 'number' || bytes < 0) {
        throw new TypeError("Input must be a non-negative number");
    }

    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

async function getBuffer(url, options) {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
async function canvas(nama, point, image) {
            // Load background and profile picture
            const bg = await loadImage('https://i.ibb.co/VCW1m56/image.jpg');
            const profilePic = await loadImage(image);

            // Register font
            registerFont(path.join('./lib/maxim.ttf'), { family: 'Maxim' });

            // Create canvas
            const canvas = createCanvas(bg.width, bg.height);
            const ctx = canvas.getContext('2d');

            // Draw background
            ctx.drawImage(bg, 0, 0, bg.width, bg.height);

            // Draw profile picture (centered and circular)
            const centerX = canvas.width / 1.35;
            const centerY = canvas.height / 1.92;
            const radius = canvas.width / 5.4;

            ctx.save();
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx.clip();
            ctx.drawImage(profilePic, centerX - radius, centerY - radius, radius * 2, radius * 2);
            ctx.restore();

            // Draw text on the left of pic
            const leftText = 'Copyright `CorteZzX@kyllnex.ruru.be'
            ctx.font = '20px "Maxim"';
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(leftText, centerX - radius - 285, centerY + 76);

            // Draw text below m.pushName
            const belowText = nama
            ctx.font = '27px "Maxim"';
            ctx.fillStyle = '#FFFFFF';
            ctx.textAlign = 'left';
            ctx.fillText(belowText, centerX - radius - 220, centerY - 15);

            ctx.font = '27px "Maxim"';
            ctx.fillStyle = '#FFFFFF'; // Yellow text color
            ctx.textAlign = 'left';
            ctx.fillText(point, centerX - radius - 220, centerY + 12);

            // Convert canvas to buffer and send as file
            const buffer = await canvas.toBuffer('image/jpeg');
            return buffer
            }
function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH');
    let res = "Malam";
    if (time >= 4) {
        res = "Pagi";
    }
    if (time > 10) {
        res = "Siang";
    }
    if (time >= 15) {
        res = "Sore";
    }
    if (time >= 18) {
        res = "Malam";
    }
    return res;
}