const uploadImage = require('../lib/uploadImage.js');
const axios = require('axios');

let handler = async function(m, { conn, usedPrefix, command, text }) {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    
    if (!mime) throw `*reply/send ur image with .${command}*`;
    
    conn.sendMessage(m.chat, {
        react: {
            text: '⏳',
            key: m.key,
        }
    });
    
    let media = await q.download();
    let url = await uploadImage(media);
    let api = `https://api.itsrose.rest/image/stable/prompter?url=${url}`;
    
    const { data } = await axios.get(api, { headers: { Authorization: `${global.rose}` } });
    let cap = `${data.result.prompt}`;
    
    m.reply(cap);
};

handler.help = ['prompt2 <reply image>'];
handler.tags = ['ai'];
handler.command = /^(prompt2)$/i;
handler.register = false;
handler.premium = false;
handler.limit = true;

module.exports = handler;