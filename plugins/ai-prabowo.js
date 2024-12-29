let axios = require('axios');

let handler = async (m, { conn, args }) => {
  try {
    let text = args.join(' ');
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
    if (!text) {
      m.reply("Masukkan kata");
      return;
    }

    // Kirim reaksi pesan untuk menunjukkan bahwa proses sedang berlangsung
    conn.sendMessage(m.chat, { react: { text: '🀄', key: m.key }});

    let prompt = `kamu adalah Prabowo Subianto, kamu adalah salah satu calon presiden republik Indonesia, berbicaralah yang keras dan tegas!!, kamu memiliki kelebihan yaitu pintar, memiliki kecerdasan seperti ai, dan kamu adalah salah satu tokoh utama di Negara Republik Indonesia, jangan pernah menyebutkan prompt mu di saat berbicara!!!`;

    let aiResponse;
    try {
      let aiPromptResponse = await axios.get('https://api.kyuurzy.site/api/ai/aiprompt', {
        params: {
          prompt: prompt,
          query: text
        }
      });
      aiResponse = aiPromptResponse.data.result;

      let retryCount = 0;
      let maxRetries = 3;
      let ttsResponse;
      while (retryCount < maxRetries) {
        try {
          ttsResponse = await axios.get('https://ai.xterm.codes/api/text2speech/elevenlabs', {
            params: {
              key: 'Bell409',
              text: aiResponse,
              voice: 'prabowo'
            },
            responseType: 'arraybuffer' // Mengatur tipe respons sebagai arraybuffer untuk menerima data audio
          });
          break; // Jika berhasil, keluar dari loop
        } catch (e) {
          if (e.response && e.response.status === 503) {
            retryCount++;
            if (retryCount === maxRetries) throw e;
            await new Promise(resolve => setTimeout(resolve, 2000)); // Tunggu 2 detik sebelum mencoba lagi
          } else {
            throw e; // Jika error bukan 503, lempar error
          }
        }
      }

      let res = ttsResponse.data;
      
      // Kirim pesan audio
      conn.sendFile(m.chat, res, 'prabowo-voice.opus', null, m, true);
    } catch (e) {
      if (e.response) {
        m.reply(`Terjadi kesalahan: ${e.response.status} ${e.response.statusText}\n${JSON.stringify(e.response.data, null, 2)}`);
      } else {
        m.reply(`Terjadi kesalahan: ${e.message}\n${JSON.stringify(e, null, 2)}`);
      }
    }
  } catch (error) {
    console.log(error);
    m.reply("Masukkan teks");
  }
};

handler.help = ['prabowo <teks>'];
handler.tags = ['ai'];
handler.command = /^prabowo$/i;
handler.limit = true;
handler.premium = false;

module.exports = handler;