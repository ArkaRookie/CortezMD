let { ytdl } = require('../lib/youtube.js');

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text)
        return conn.reply(
            m.chat,
            `• *Example :* .${command} https://www.youtube.com/xxxxxxx`,
            m
        );
    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    try {
        let data = await ytdl(text);
        await conn.sendMessage(
            m.chat,
            {
                document: { url: data.mp3 },
                fileName: data.title+'.mp3',
                mimetype: 'audio/mpeg',
            },
            { quoted: m }
        );
        await conn.sendMessage(m.chat, { react: { text: '', key: m.key } });
    } catch (e) {
        await m.reply(String(e));
        await conn.sendMessage(m.chat, { react: { text: '', key: m.key } });
    }
};

handler.tags = ['downloader'];
handler.help = ['ytmp3 *<url>*'];
handler.command = /^yta|ytmp3|youtubemp3$/i;
module.exports = handler;