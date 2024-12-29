let search = require('../lib/scrape/search-2')

let handler = async (m, { usedPrefix, command, args, text }) => {
  try {
    const timer = 18000
    conn.gore = conn.gore ? conn.gore : []
    if (!text) return conn.reply(m.chat, Func.example(usedPrefix, command, 'bomb'), m)
    const check = conn.gore.find((v) => v.jid == m.sender)
    if (!check && !isNaN(text)) return m.reply(Func.texted('bold', `🚩Sesi Kamu telah kedaluwarsa / tidak ada, lakukan pencarian lain menggunakan kata kunci yang Kamu inginkan.`))
    if (check && !isNaN(text)) {
      if (Number(text) > check.results.length) return m.reply(Func.texted('bold', `🚩 Melebihi jumlah data.`))
      m.react('🕒')

      const json = await search.sgoredl(check.results[Number(text) - 1])
      let teks = `乂 *G o r e*\n\n`
      teks += '  ◦  *Title* : ' + json.data.judul + '\n'
      teks += '  ◦  *Views* : ' + json.data.views + '\n'
      teks += '  ◦  *Comment* : ' + json.data.comment + '\n\n' + set.footer

      conn.sendMessage(m.chat, {
        text: teks,
        contextInfo: {
          externalAdReply: {
            title: set.bot,
            thumbnailUrl: media.thumbnail,
            sourceUrl: null,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: m }).then(() => {
        conn.sendFile(m.chat, json.data.link, 'gore.mp4', set.footer, m)
      })
    } else {
      m.react('🕒')
      const json = await search.ssearchgore(text)
      if (!check) {
        conn.gore.push({
          jid: m.sender,
          query: text,
          results: json.data.map((v) => v.link),
          created_at: new Date() * 1,
        })
      } else check.results = json.data.map((v) => v.link)
      let p = `Untuk mendownload Video gunakan perintah *${usedPrefix + command} nomor*\n`
      p += `Contoh : ${usedPrefix + command} 1\n\n`
      json.data.map((v, i) => {
        p += `*${i + 1}*. ` + v.judul + `\n`
        p += ` ◦  *Uploader* : ` + v.uploader + `\n\n`
      }).join(`\n\n`)
      m.reply(p)
    }
    setInterval(async () => {
      const session = conn.gore.find((v) => v.jid == m.sender)
      if (session && new Date() - session.created_at > timer) {
        Func.removeItem(conn.gore, session)
      }
    }, 60_000)
  } catch (e) {
    console.log(e)
    return m.reply("An error occurred while processing your request.")  // Basic error message, replace with status.error if available
  }
}
handler.help = handler.command = ['gore']
handler.tags = ['downloader']
handler.limit = true
handler.premium = true
module.exports = handler