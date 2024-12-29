const timeout = 28800000

let handler = async (m, { conn, usedPrefix, text }) => {
  let user = global.db.data.users[m.sender]
  let time = user.lastnambang + timeout

  if (new Date - user.lastnambang < timeout) throw `Anda sudah menambang\nMohon tunggu hasil pertambangan mu\nTunggu selama ${msToTime(time - new Date())} lagi`
  if (user.stamina < 10) throw `Stamina anda tidak cukup untuk menambang. Silakan istirahat atau konsumsi item tertentu untuk mengembalikan stamina.`

  let irons = `${Math.floor(Math.random() * 3)}`.trim()
  let emasbiasas = `${Math.floor(Math.random() * 4)}`.trim()
  let emasbatangs = `${Math.floor(Math.random() * 3)}`.trim()
  let emeralds = `${Math.floor(Math.random() * 3)}`.trim()

  user.iron += irons * 1
  user.emerald += emeralds * 1
  user.emas += emasbiasas * 1
  user.diamond += emasbatangs * 1
  user.tiketcoin += 1
  user.stamina -= 10
  user.lastnambang = new Date * 1
  
  conn.reply(m.chat, `Selamat kamu mendapatkan :\n+${irons} ⛓️ Iron\n+${emasbiasas} 🪙 Emas\n+${emasbatangs} 💍 Diamond\n+${emeralds} 🟩 Emerald\n+1 🎟️ Tiketcoin\n\n_Stamina anda berkurang_ 10`, m, {
    contextInfo: {
        externalAdReply: {
            mediaType: 1,
            title: 'AXELLDX',
            thumbnailUrl: 'https://telegra.ph/file/cc2c2da32785097e28395.jpg',
            renderLargerThumbnail: true,
            sourceUrl: ''
        }
    }
})
  
  setTimeout(() => {
    conn.reply(m.chat, `Waktunya nambang lagi kak ðŸ™‚`, m)
  }, timeout)
}

handler.help = ['nambang']
handler.tags = ['rpg']
handler.command = /^(nambang)/i
handler.group = true

handler.fail = null
handler.limit = true
handler.exp = 0
handler.money = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}