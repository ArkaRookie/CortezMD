let axios = require('axios')
let handler = async (m, { conn, args }) => {
  try {
    let text = args.join(' ')
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    if (!text) {
      m.reply("Masukkan kata")
      return
    }

    // Reaksi saat memulai pemrosesan
    await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });

    let res
    try {
      let response = await axios.get('https://ai.xterm.codes/api/text2speech/elevenlabs', {
        params: {
          text: text,
          key: 'vynz772627',
          voice: 'prabowo'
        },
        responseType: 'arraybuffer' // Mengatur tipe respons sebagai arraybuffer untuk menerima data audio
      })
      res = response.data
      conn.sendFile(m.chat, res, 'tts.opus', null, m, true)

      // Reaksi setelah pemrosesan berhasil
      await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });

    } catch (e) {
      // Reaksi ketika terjadi kesalahan
      await conn.sendMessage(m.chat, { react: { text: `❌`, key: m.key } });
      m.reply(e + '')
    }
  } catch (error) {
    console.log(error)
    m.reply("Masukkan Text")
  }
}

handler.help = ['voiceprabowo <teks>']
handler.tags = ['tools']
handler.command = /^voiceprabowo$/i
handler.limit = true
handler.premium = false

module.exports = handler