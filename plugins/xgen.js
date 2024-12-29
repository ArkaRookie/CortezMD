const fetch = require('node-fetch');

const handler = async (m, { conn, text }) => {
  if (!text) throw 'Contoh: .xgen loli, nude';
  await m.reply(wait);
  const response = await fetch(`https://api.maher-zubair.tech/nsfw/x-gen?q=${text}`);
  const buffer = await response.buffer(); // Ambil responsenya sebagai buffer
  await conn.sendFile(m.chat, buffer, 'image.jpg', '*[ X-Gen ]*', m); // Kirim gambar sebagai file
};
handler.command = ['xgen', 'x-gen'];
handler.help = ['xgen'];
handler.tags = ['ai', 'premium'];
handler.premium = true;
module.exports = handler;