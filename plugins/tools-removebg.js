const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage');
const fs = require('fs');
const path = require('path');

let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (/image/.test(mime)) {
    conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '⏳',
        key: m.key,
      }
    });

    await m.reply('_Menghapus latar belakang gambar..._');
    
    let img = await q.download();
    let imageUrl = await uploadImage(img);

    try {
      let api = `https://api.lolhuman.xyz/api/removebg?apikey=Liberty&img=${encodeURIComponent(imageUrl)}`;
      let response = await fetch(api);

      if (!response.ok) {
        throw new Error(`Server returned ${response.status} status`);
      }

      let buffer = await response.buffer();
      let filename = path.join(__dirname, 'removebg.png');
      fs.writeFileSync(filename, buffer);

      let caption = '```Sukses Menghapus Latar Belakang```\n\n';
      caption += '```- Hasil:```';
      await conn.sendFile(m.chat, filename, 'removebg.png', caption, m);
      fs.unlinkSync(filename); // Hapus file setelah dikirim
    } catch (e) {
      console.log('Error:', e); // Logging error yang terjadi
      conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan: ' + e.message, m);
    }
  } else {
    conn.reply(m.chat, 'Balas gambar dengan caption *.removebg*', m);
  }
};

handler.help = ['removebg *<image>*'];
handler.tags = ['tools','premium'];
handler.command = /^(removebg)$/i;
handler.premium = true; // Jika Anda ingin fitur ini hanya untuk pengguna premium
module.exports = handler;