let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Owner
global.owner = [
  ['6288224154222'],
  [''],
  ['', 'Escobar Cortez', 'contact@', true]
] // Put your number here
global.mods = ['6288224154222', '6288215063601'] // Moderator
global.prems = ['6288215063601'] // Premium

//apikey
global.doni = 'Yaemiko',
global.xyro = 'ClaraKeyOfficial';
global.btc = 'IndraAfsin';
global.xzn = 'Kemii';
global.yanz = 'iyan123';
global.zein = 'zenzkey_c22460242f6e',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    xfarr: 'https://api.xfarr.com',
    dzx: 'https://api.dhamzxploit.my.id',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_c22460242f6e',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.xyroinee.xyz': 'ClaraKeyOfficial',
    'https://api.neoxr.eu': 'PSHT22',
    'https://api.xfarr.com': 'Kemii',
    'https://api.zahwazein.xyz': 'Kemii',
    'https://api.betabotz.org': 'Rizalzllk',
    'https://api.lolhuman.xyz': 'Indra',
    'https://api.itsrose.life': 'Rk-Salsabila',
    'https://skizo.tech': 'Composing',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'CoryeZzX MD'
  var sticker_author = 'CoryeZzX MD'
} else {
  var sticker_name = 'CoryeZzX MD'
  var sticker_author = 'CoryeZzX MD'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.version = '5.0.3'
global.sessionName = 'Dontol'
global.gcbot = 'https://chat.whatsapp.com/BASFqgR4PJDIKq1hwGcCzJ'
global.saluran = pickRandom(['https://whatsapp.com/channel/0029VasLkww5PO0weCGskh3x', 'https://whatsapp.com/channel/0029VasLkww5PO0weCGskh3x'])
global.newsletterId = pickRandom(['120363299719848392@newsletter', '120363291653534063@newsletter'])
global.idgc = '120363303234224012@g.us'
global.idkom = '120363335003186733@g.us'
global.instagram = 'https://instagram.com/al_dev_1'
global.namebot = 'CoryeZzX MD'
global.footer = '© CoryeZzX MD By Escobar'
global.thumb = pickRandom(["https://telegra.ph/file/6a25601518c0268e922fe.jpg",
"https://telegra.ph/file/9eddb9c67b22a5488ef52.jpg"])
global.thumbnail = pickRandom(["https://telegra.ph/file/00f7c04f645c3030a97b5.jpg",
"https://telegra.ph/file/0a4bbeddf9fe0e7137453.jpg",
"https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg"])

global.qris = 'https://pomf2.lain.la/f/4hp22w.jpg'
global.email = 'nyainengsih83@gmail.com'
global.salurannama = 'Powered by CorteZzX'
global.creator = "6288224154222@s.whatsapp.net"
global.nomorbot = '6288215063601'
global.nomorown = '6288224154222'
global.namaown = 'Escobar Cortez'

// Harga Nokos
global.nokosindo = '7000'
global.nokosusa = '8000'
global.nokosmalay = '12000'

// Panel
global.domain = 'https://veyyyzdzz.panellprivate.my.id' // Domain Web
global.apikey = 'ptla_Jr4Thc9i6pg7ncHktjkplSrujMSzBilVdA4deV7JN5D' // Key PTLA
global.c_apikey = 'ptlc_nWaVwvaQMCtdhqDfG7KgvILkiG9LuFEquF7E1XSUQdq' // Key PTLC
global.eggs = '15'
global.locs = '1'

// Atlantic Pedia Api
global.atlaapi = 'jiKgbG6XBgU3E0zL0UjeXdELK5ExfzDycILGo5JWQYwITQ0UAZCoNZFd1MAOC2OY1I5qBFRdSV4wHzTUZl19e6T7IZF5ciLHn1MK'

// Medan Pedia Api
global.medan = ''
global.medanid = ''

// Sosial Media
global.sig = 'https://instagram.com/al_dev_1'
global.syt = '-'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/BASFqgR4PJDIKq1hwGcCzJ'
global.swa = 'https://wa.me/6289531639634'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

// Pembayaran
global.pdana = '-'
global.povo = '~Not Found'
global.pgopay = '-'
global.pulsa = '-'
global.pulsa2 = '-'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

// Watermark
global.packname = 'CoryeZzX MD'
global.author = 'CoryeZzX MD'
global.wm = '© CoryeZzX MD By Escobar Cortez'
global.wm2 = 'CoryeZzX MD'
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.done = '```Status Request :```' + ' `Succes`'
global.packname = 'CoryeZzX MD'
global.author = 'Escobar Cortez'
global.nameown = 'Escobar Cortez'
global.wait = 'tunggu ya kak... '
global.error = {
    status: false,
    creator: 'CoryeZzX MD - Escobar Cortez',
    message: 'sedang dalam perbaikan'
}
global.waitowner = 'tunggu ya mas sayang'

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'

global.antiporn = true
global.autobio = true
global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑️',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈',
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    };

    // Corrected mapping function
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
};

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//