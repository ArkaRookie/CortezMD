const { sticker } = require('../lib/sticker.js');

const handler = async (m, { conn }) => {
    let stiker = await sticker(null, global.API('https://telegra.ph/file/be102541182b923dd150d.png'), global.packname, global.author);
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
};

handler.customPrefix = /^(@6285828383506|maeda|goki)$/i; // ganti yang 628 dengan nomormu
handler.command = new RegExp;

module.exports = handler;