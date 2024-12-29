const fetch = require('node-fetch');

// Fungsi untuk mendapatkan URL gambar default
const getThumb = () => {
    // Ganti dengan URL gambar default yang diinginkan
    return 'https://telegra.ph/file/bf9bcc6db5c112c772a80.jpg';
};

let toM = a => '@' + a.split('@')[0];
let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    args,
    command
}) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    // Menggunakan fungsi global.thumb() untuk mendapatkan URL gambar profil
    let pp = await conn.profilePictureUrl(who).catch(_ => getThumb());
    let name = await conn.getName(who);

    if (command == 'menikah' && groupMetadata) {
        let ps = groupMetadata.participants.map(v => v.id);
        let a = ps[Math.floor(Math.random() * ps.length)];
        let b;
        do b = ps[Math.floor(Math.random() * ps.length)];
        while (b === a);
        m.reply(`*${toM(a)}, KAU HARUS MENIKAHI ${toM(b)}, KAMU PASTI AKAN MENJADI PASANGAN YANG BAIK 💓*`, null, {
            mentions: [a, b]
        });
    }

    if (command == 'metercinta') {
        if (!text) throw `Contoh penggunaan ${usedPrefix}${command} terserah`;
        conn.reply(m.chat, `
*❤️❤️ METER CINTA ❤️❤️*
*cinta dari ${text} itu untuk kamu* *${Math.floor(Math.random() * 100)}%* *dari 100%*
*kamu harus memintanya untuk menjadi pacar kamu?*
`.trim(), m, m.mentionedJid ? {
            contextInfo: {
                mentionedJid: m.mentionedJid
            }
        } : {});
    }

    if (command == 'bertanya') {
        if (!text) throw `Contoh penggunaan ${usedPrefix}${command} haruskah saya makan?`;
        m.reply(`
*⁉️ PERTANYAAN ⁉️*
 
*PERTANYAAN:* ${text}
*TANGGAPAN:* ${['Ya','Mungkin ya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'][Math.floor(Math.random() * 6)]}
`.trim(), null, m.mentionedJid ? {
            mentions: m.mentionedJid
        } : {});
    }     
};
handler.command = handler.help = ['menikah', 'metercinta', 'bertanya'];
handler.tags = ['fun'];

module.exports = handler;