const axios = require('axios');

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `
*contoh:* ${usedPrefix}${command} Halo Bing, apa kabar?
`;
  const payload = {
    prompt: text,
    init_image: "",
    time_zone: "Asia/Jakarta",
    tone: "Balanced",
    strip_markdown: false
  };

  m.reply(global.wait);
  try {
    const { data } = await axios.post("https://api.itsrose.rest/chatGPT/bing_chat", payload, {
      headers: { Authorization: `${global.rose}` }
    });
    const { result, status } = data;

    if (!status) {
      console.log(message); 
    } else {
      const { message, invocation, sources } = result;
      let capt = `${message.content}

${sources.map(v => `Nama: ${v.title}\nLInk: ${v.url}`).join`\n\n`}`.trim();
      await conn.sendMessage(m.chat, {
        text: capt,
        contextInfo: {
          externalAdReply: {
            title: "Saya Bing",
            body: wm,
            thumbnailUrl: "https://telegra.ph/file/b6b6329c9406d62c6cee6.jpg",
            sourceUrl: "",
            mediaType: 1,
            showAdAttribution: false,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: m });

      for (const image of invocation.images) {
        await conn.sendFile(m.chat, image, 'filetype.png', null, m);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

handler.help = ['bing <Halo Bing>'];
handler.tags = ['ai'];
handler.command = /^(bing|bingai|bingchat)$/i;
handler.limit = true;
handler.register = false;
handler.premium = true;

module.exports = handler;