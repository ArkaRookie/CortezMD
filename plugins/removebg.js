const fetch = require('node-fetch');
const { RemoveBackground } = require('../lib/remove-background.js');
const uploadImage = require('../lib/uploadImage.js');

let handler = async (m, { conn, args }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (/image/.test(mime)) {
        await m.reply(wait);
        let media = await q.download();
        let nita = await uploadImage(media);
        let sauce = await RemoveBackground(nita, "3c1615980dcf693b282c4b0fb608b28a");
        let output = Object.entries(sauce).map(([key, value]) => `  ○ *${key.toUpperCase()}:* ${value}`).join('\n');
        await conn.reply(m.chat, output, m);
    } else {
        throw 'Reply imagenya';
    }
};

handler.help = ["remobg"];
handler.tags = ["tools"];
handler.command = ["remobg"];

module.exports = handler;