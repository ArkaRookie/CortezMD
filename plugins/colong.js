const { MessageType } = require('@whiskeysockets/baileys');
const { sticker } = require('../lib/sticker.js');

const handler = async (m, { conn, args, text, usedPrefix, command }) => {
    let stiker = false;
    try {
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';
        if (/image|video/.test(mime)) {
            let urut = text.split`|`;
            let one = urut[0];
            let two = urut[1];
            let img = await q.download();
            if (!img) throw `Reply stiker nya!\n ${usedPrefix + command} pack|auth`;
            stiker = await sticker(img, false, one, two);
        } else if (args[0]) {
            stiker = await sticker(false, args[0], 'Nihh', 'Bang');
        }
    } finally {
        if (stiker) {
            conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
        } else {
            throw 'Conversion failed';
        }
    }
};

handler.help = ['colong'];
handler.tags = ['sticker'];
handler.command = /^colong$/i;
handler.owner = true;

module.exports = handler;