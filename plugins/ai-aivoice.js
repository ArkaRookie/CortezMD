const { G4F } = require("g4f");
const g4f = new G4F();
const axios = require("axios");

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) return m.reply(Func.example(usedPrefix, command, "halo"));
  await m.react('🕒');
  if (!global.db.data.openai[m.sender]) global.db.data.openai[m.sender] = [];
  if (global.db.data.openai[m.sender].length >= 70) global.db.data.openai[m.sender] = [];
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || "";  
  let messages = [
    { 'role': 'assistant', 'content': require('fs').readFileSync('./system/prompt.txt', 'utf-8') },
    ...(global.db.data.openai[m.sender].map((msg) => ({ role: msg.role, content: msg.content })) || []),
    { 'role': 'user', 'content': text }
  ];
  let options = {
    provider: g4f.providers.GPT,
    model: "gpt-4-32k-0314",
    debug: true,
  };
  let json = await g4f.chatCompletion(messages, options);
  global.db.data.openai[m.sender].push({
    role: 'user',
    content: text
  });
  global.db.data.openai[m.sender].push({
    role: 'assistant',
    content: json.trim()
  });

  let ttsResult = await tiktokTts(json.trim(), 'id_001');
  if (ttsResult && ttsResult.data) {
    try {
      let buffer = Buffer.from(ttsResult.data, "base64");
      if (buffer.length > 0) {
        await conn.sendFile(m.chat, buffer, 'output.mp3', null, m, true);
      } else {
        throw new Error('Buffer is empty');
      }
    } catch (err) {
      console.error('Error decoding base64 or sending file:', err);
      m.reply('Terjadi kesalahan saat mengkonversi teks ke suara.');
    }
  } else {
    m.reply('Terjadi kesalahan saat menghubungi layanan TTS.');
  }
  await m.react('');
}

handler.help = ['ai-voice *<text>*'];
handler.command = /^ai-voice$/i;
handler.tags = ['ai'];
handler.premium = false;

module.exports = handler;

async function tiktokTts(text, model) {
  try {
    const modelVoice = model ? model : "en_us_001";
    const response = await axios.post(
      "https://tiktok-tts.weilnet.workers.dev/api/generation",
      {
        text: text,
        voice: modelVoice,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      },
    );
    return response.data;
  } catch (err) {
    console.error('Error calling TTS API:', err.response ? err.response.data : err);
    return null;
  }
}