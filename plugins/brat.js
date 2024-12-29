const axios = require('axios');
const { Sticker } = require('wa-sticker-formatter');

const handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `Gunakan perintah ini dengan format: ${usedPrefix}brat <teks>`;
    
    try {
        conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        const url = `https://btch.us.kg/brat?text=${encodeURIComponent(text)}`;

        const response = await axios.get(url, { responseType: 'arraybuffer' });

        const sticker = new Sticker(response.data, {
            pack: 'Stiker By',
            author: 'CorteZzX - MultiDevice',
            type: 'image/png',
        });

        const stikerBuffer = await sticker.toBuffer();
        await conn.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });

    } catch (error) {
        console.error('Error:', error);
        await conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mencoba membuat stiker brat. Coba lagi nanti.', m);
    }
};

handler.help = ['brat'];
handler.tags = ['sticker'];
handler.command = /^brat$/i;

module.exports = handler;