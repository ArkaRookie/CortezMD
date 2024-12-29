const fs = require('fs');
const { createCanvas } = require('canvas');

function runtime(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    return { d, h, m, s };
}

function getWIBTime() {
    const offset = 7; // WIB is UTC+7
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let wibDate = new Date(utc + (3600000 * offset));
    let hours = wibDate.getHours();
    let minutes = wibDate.getMinutes();
    let seconds = wibDate.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ampm;
    return strTime;
}

async function createUptimeImage(runtime) {
    const canvas = createCanvas(500, 200);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#000'; // Black background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text
    ctx.fillStyle = '#fff'; // White text
    ctx.font = 'bold 60px Arial'; // Larger text
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Format uptime text as HH:MM:SS
    let uptimeText = `${String(runtime.h).padStart(2, '0')}:${String(runtime.m).padStart(2, '0')}:${String(runtime.s).padStart(2, '0')}`;
    ctx.fillText(uptimeText, canvas.width / 2, canvas.height / 2);

    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./uptime.png', buffer);
    return './uptime.png';
}

let handler = async (m, { conn, args, command }) => {
    let uptime = runtime(process.uptime());
    let uptimeImage = await createUptimeImage(uptime);
    let wibTime = getWIBTime();

    // Send image reply with contextInfo
    await conn.sendMessage(m.chat, {
        image: { url: uptimeImage },
        caption: `Waktu WIB Sekarang: ${wibTime}`,
        contextInfo: {
            externalAdReply: {
                mediaType: 1,
                title: 'AXELLDX',
                thumbnailUrl: 'https://telegra.ph/file/fd865544d151ba2728df6.jpg',
                renderLargerThumbnail: true,
                sourceUrl: ''
            }
        }
    }, { quoted: {
        key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' },
        message: {
            conversation: '𝘱𝘰𝘬𝘪 𝘵𝘦𝘳𝘷𝘦𝘳𝘪𝘧𝘪𝘬𝘢𝘴𝘪 𝘰𝘭𝘦𝘩 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱'
        }
    }});
}

handler.help = ['runtime'];
handler.tags = ['info'];
handler.command = /^(uptime|runtime)$/i;

module.exports = handler;