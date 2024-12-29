const fetch = require('node-fetch');
const uploadFile = require('../lib/uploadFile.js');
const uploadImage = require('../lib/uploadImage');
const translate = require('@vitalets/google-translate-api');

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype;
  let url = m.text.split(' ')[1];

  if (url) {
    // Jika URL diberikan secara langsung
    var link = url;
  } else if (mime) {
    // Jika gambar direply
    let media = await q.download();
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    var link = await (isTele ? uploadImage : uploadFile)(media);
  } else {
    throw '• Balas Gambar/Url\nContoh: .osmage https://telegra.ph/file/db308811777d4f7bb83dc.png';
  }

  let apiUrl = `https://api.ryochinel.my.id/api/osmage?url=${encodeURIComponent(link)}&apikey=yk`;

  try {
    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      let { city, country, explanation, latitude, longitude, state } = data.result;

      // Terjemahkan penjelasan ke bahasa Indonesia
      let translatedExplanation = await translate(explanation, { to: 'id' });

      let resultMessage = `*Hoshiyuki Osint Img*\n======================\n- *Kota*: ${city}\n- *Negara*: ${country}\n- *Penjelasan*: ${translatedExplanation.text}\n- *Garis Lintang*: ${latitude}\n- *Garis Bujur*: ${longitude}\n- *Provinsi*: ${state}\n======================\n`;
      m.reply(resultMessage);
    } else {
      m.reply('× Gagal mendapatkan informasi gambar. Silakan coba lagi nanti.');
    }
  } catch (error) {
    m.reply('× Terjadi kesalahan. Silakan coba lagi nanti.');
  }
};

handler.help = ['osmage'];
handler.tags = ['ai'];
handler.command = ['osmage', 'osm'];

module.exports = handler;