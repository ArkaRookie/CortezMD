const uploadImage = require('../lib/uploadImage.js');

let handler = async (m, { conn, usedPrefix, command, args }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/image\/(jpe?g|png)/.test(mime) && !/webp/.test(mime)) {
        let prompt = '', teks = (args[0] || '').toLowerCase().trim();
        let img = await q.download();
        let out = await uploadImage(img);
        try {
            conn.sendMessage(m.chat, {
                react: {
                    text: '🍵',
                    key: m.key,
                }
            });
            let y = 0;
            if (/jadi/.test(command) || command.startsWith('to')) {
                teks = command.replace(/jadi|to/,'');
                prompt = args.join(' ');
            } else {
                teks = args[0];
                prompt = args[1] ? args.slice(1).join(' ') : '';
            }
            let anu = await (await fetch(`https://api.itsrose.rest/image/turnMe`, {
                method: 'POST',
                headers: {
                    Authorization: global.rose,
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    init_image: out,
                    style: teks,
                    skin: 'default',
                    image_num: 2,
                    prompt: prompt
                })
            })).json();
            if (!anu.status) return m.reply(anu.styles ? `[ ! ] *example:* *${usedPrefix+command} zombie*\n\n▧「 *available styles* 」\n│✦ ${anu.styles.join('\n│✦ ')}\n└──···` : anu.message);
            for (let x of anu.result.images) {
                await conn.sendFile(m.chat, x, '', `${y < 1 ? `*STYLE: ${teks}*` : `${teks} style (${y+1})`}${prompt ? `\nprompt : ${prompt}` : ''}`, m);
                y++;
            }
        } catch (e) {
            console.log(e);
            throw e.response?.data?.message || 'Internal server error.';
        }
    } else throw `[ ! ] send/reply image with caption ${usedPrefix + command}`;
};

handler.help = ['turnme'];
handler.tags = ['ai'];
handler.command = /^(turn|turnme|maker)$/i;

handler.premium = true;
handler.limit = false;

module.exports = handler;