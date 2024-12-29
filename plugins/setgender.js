let handler = async (m, { isPrems, conn, text, usedPrefix, command }) => {
  const user = global.db.data.users[m.sender]

  if (!user) {
    throw '*Kamu belum terdaftar di database!*'
    return
  }

  if (user.jail === true) {
    throw '*Kamu tidak bisa melakukan aktivitas karena masih dalam penjara!*'
    return
  }

  if (user.verified == true) {
    m.reply(`*Kamu sudah terverifikasi, tidak bisa ganti gender*\nHubungi wa.me/${global.nomorown} untuk mengganti`)
    return
  }
  
  if (user.gender != "non-binary 🎭" && isPrems == false && user.gamepass < 1) {
    m.reply('*Gender pengguna hanya bisa diatur satu kali saja.*\n💳 atau gunakan gamepass')
    return
  }

  if (!text || !['male', 'female'].includes(text.toLowerCase())) {
    throw `
Silakan pilih gender anda:
- *Male*  ♂️
- *Female*  ♀️
Contoh: *${usedPrefix}${command} male*
`.trim()
    return
  }

  // Set gender pengguna
  user.gender = text.toLowerCase() === 'male' ? "Male" : "Female"
  
  conn.reply(m.chat, `Jenis kelamin berhasil diatur sebagai *${text}*.`, m)
    
  if (user.gamepass >= 1 && isPrems == false && user.gender != "non-binary") {
    user.gamepass -= 1
    m.reply('*-1 💳 gamepass*')
  }
}

handler.help = ['setgender']
handler.tags = ['life']
handler.command = /^setgender$/i

module.exports = handler