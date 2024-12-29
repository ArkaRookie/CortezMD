/** !! THIS CODE GENERATE BY RODOTZBOT !! **/

let ffmpeg = require('fluent-ffmpeg');
let fs = require('fs');
let path = require('path'); 

let handler = async (m, { conn }) => {
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime.includes('video')) throw `Mohon reply ke video yang ingin di buat story whatsaap`

    let videoData = await q.download();
    let fileName = `video_${Date.now()}.mp4`; 
    let tempPath = path.join('./tmp', fileName); 

    await conn.sendMessage(m.chat, {
      react: {
        text: '🍟',
        key: m.key,
      }
    });

    fs.writeFileSync(tempPath, videoData);

    let compressedFileName = `compressed_video_${Date.now()}.mp4`; // Nama file baru untuk video yang telah dikompresi
    let outputPath = path.join('./tmp', compressedFileName); // Path untuk video yang telah dikompresi

    ffmpeg(tempPath)
      .outputOptions('-vf', 'scale=640:-1') 
      .outputOptions('-b:v', '1M') 
      .on('end', () => {
        conn.sendFile(m.chat, outputPath, '', `• Video siap untuk dibuat story wa`, m);
        fs.unlinkSync(tempPath); 
      })
      .on('error', (err) => {
        console.error(err);
        m.reply('Terjadi kesalahan saat mengompres video. ' + err);
        fs.unlinkSync(tempPath); 
      })
      .save(outputPath); // Simpan video yang telah dikompresi dengan nama dan path baru
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan. ' + error);
  }
};

handler.command = handler.help = ["storyin"];
handler.tags = ["tools"];
handler.limit = true;

module.exports = handler;