let { MessageType } = require('@whiskeysockets/baileys')

let rumahsakit = 500;
let benteng = 700;
let camptroops = 900;
let pertanian = 700;
let pertambangan = 600;
let industri = 1000;
let house = 300;
let masjid = 600;
let gereja = 600;

let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {

    let type = (args[0] || '').toLowerCase();
    let upgrade = (args[0] || '').toLowerCase();

    let user = global.db.data.users[m.sender];

    const list = `
乂 *B U I L D* 
• 🏯 *Benteng*
• 🌾 *Pertanian*
• 🏕️ *Camptroop*
• ⚒️ *Pertambangan*
• 🏥 *Rumah Sakit*
• 🏭 *Industri*
• 🏡 *House*
• 🕌 *Masjid*
• ⛪ *Gereja*

_command_ :
   ${usedPrefix + command} benteng
`.trim();

    try {
        if (/build|bangun/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count);
            switch (type) {
                case 'benteng':
                case 'fortress':
                    if (global.db.data.users[m.sender].batu >= benteng * count && global.db.data.users[m.sender].kayu >= benteng * count) {
                        global.db.data.users[m.sender].fortress += count;
                        global.db.data.users[m.sender].kayu -= benteng * count;
                        global.db.data.users[m.sender].batu -= benteng * count;
                        m.reply(`Berhasil membangun benteng. Selamat, benteng Anda sudah terbangun sekarang!`);
                    } else {
                        m.reply(`SDA Anda tidak cukup untuk membangun benteng yang senilai ${benteng * count} Kayu dan ${benteng * count} Batu`);
                    }
                    break;
                case 'pertanian':
                    if (user.batu >= pertanian * count && user.kayu >= pertanian * count) {
                        user.pertanian += count;
                        user.kayu -= pertanian * count;
                        user.batu -= pertanian * count;
                        m.reply(`Berhasil membangun pertanian. Selamat, pertanian Anda sudah terbangun sekarang!`);
                    } else {
                        m.reply(`SDA Anda tidak cukup untuk membangun pertanian yang senilai ${pertanian * count} Kayu dan ${pertanian * count} Batu`);
                    }
                    break;
                case 'house':
                    if (user.batu >= house * count && user.kayu >= house * count) {
                        user.house += count;
                        user.kayu -= house * count;
                        user.batu -= house * count;
                        m.reply(`Berhasil membangun rumah. Selamat, rumah Anda sudah terbangun sekarang!`);
                    } else {
                        m.reply(`SDA Anda tidak cukup untuk membangun rumah yang senilai ${house * count} Kayu dan ${house * count} Batu`);
                    }
                    break;
                case 'industri':
                    if (user.batu >= industri * count && user.kayu >= industri * count) {
                        user.industri += count;
                        user.kayu -= industri * count;
                        user.batu -= industri * count;
                        m.reply(`Berhasil membangun industri. Selamat, industri Anda sudah terbangun sekarang!`);
                    } else {
                        m.reply(`SDA Anda tidak cukup untuk membangun industri yang senilai ${industri * count} Kayu dan ${industri * count} Batu`);
                    }
                    break;
                case 'masjid':
                    if (user.batu >= masjid * count && user.kayu >= masjid * count) {
                        user.masjid += count;
                        user.kayu -= masjid * count;
                        user.batu -= masjid * count;
                        m.reply(`Berhasil membangun masjid. Selamat, masjid Anda sudah terbangun sekarang!`);
                    } else {
                        m.reply(`SDA Anda tidak cukup untuk membangun masjid yang senilai ${masjid * count} Kayu dan ${masjid * count} Batu`);
                    }
                    break;
                case 'gereja':
                    if (user.batu >= gereja * count && user.kayu >= gereja * count) {
                        user.gereja += count;
                        user.kayu -= gereja * count;
                        user.batu -= gereja * count;
                        m.reply(`Berhasil membangun gereja. Selamat, gereja Anda sudah terbangun sekarang!`);
                    } else {
                        m.reply(`SDA Anda tidak cukup untuk membangun gereja yang senilai ${gereja * count} Kayu dan ${gereja * count} Batu`);
                    }
                    break;
                case 'camptroops':
                case 'camptroop':
                    if (user.batu >= camptroops * count && user.kayu >= camptroops * count) {
                        user.camptroops += count;
                        user.kayu -= camptroops * count;
                        user.batu -= camptroops * count;
                        m.reply(`Berhasil membangun kamp pasukan. Selamat, kamp pasukan Anda sudah terbangun sekarang!`);
                    } else {
                        m.reply(`SDA Anda tidak cukup untuk membangun kamp pasukan yang senilai ${camptroops * count} Kayu dan ${camptroops * count} Batu`);
                    }
                    break;
                case 'pertambangan':
                    if (user.batu >= pertambangan * count && user.kayu >= pertambangan * count) {
                        user.tambang += count;
                        user.kayu -= pertambangan * count;
                        user.batu -= pertambangan * count;
                        m.reply(`Berhasil membangun pertambangan. Selamat, pertambangan Anda sudah terbangun sekarang!`);
                    } else {
                        m.reply(`SDA Anda tidak cukup untuk membangun pertambangan yang senilai ${pertambangan * count} Kayu dan ${pertambangan * count} Batu`);
                    }
                    break;
                case 'rumahsakit':
                case 'hospital':
                    if (user.batu >= rumahsakit * count && user.kayu >= rumahsakit * count) {
                        user.rumahsakit += count;
                        user.kayu -= rumahsakit * count;
                        user.batu -= rumahsakit * count;
                        m.reply(`Berhasil membangun rumah sakit. Selamat, rumah sakit Anda sudah terbangun sekarang!`);
                    } else {
                        m.reply(`SDA Anda tidak cukup untuk membangun rumah sakit yang senilai ${rumahsakit * count} Kayu dan ${rumahsakit * count} Batu`);
                    }
                    break;
                default:
                    return conn.reply(m.chat, list, m);
            }
        }
    } catch (e) {
        conn.reply(m.chat, 'Error', m);
        console.log(e);
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m);
            }
        }
    }
};

handler.help = ['build <args>', 'upgrade <sell|buy> <args>'];
handler.tags = ['rpg'];
handler.owner = false;
handler.command = /^(build|bangun|upgrade|upgd)$/i;
module.exports = handler;