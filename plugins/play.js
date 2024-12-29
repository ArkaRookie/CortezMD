let { ytdl } = require('../lib/youtube.js');
let yts = require('yt-search');

function trimYouTubeUrl(url) {
    return url.split('?')[0];
}

var handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text)
        return conn.reply(
            m.chat,
            `• *Example :* ${usedPrefix}${command} Tentang Perasaanku`,
            m
        );

    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
    let edit = await m.reply(`_Searching Music From: *${text}*_`);

    try {
        let trimmedUrl = trimYouTubeUrl(text);
        let search = await yts(trimmedUrl);
        let vid = await search.videos[0];
        let { title, timestamp, views, url, thumbnail } = vid;
        let sigma = await ytdl(url);

        let capt = '```Successfully Get Music Data```\n\n';
        capt += `\`\`\`- Title: ${title}\`\`\`\n`;
        capt += `\`\`\`- Views: ${Func.h2k(views)}\`\`\`\n`;
        capt += `\`\`\`- Duration: ${timestamp} minute\`\`\`\n`;
        capt += `\`\`\`- Fetching: ${(new Date() - startTime) / 1000} seconds\`\`\``;

        let q = await conn.sendMessage(m.chat, { text: capt, edit: edit });

        let doc = {
            audio: { url: `${sigma.mp3}` },
            mimetype: 'audio/mp4',
            fileName: `${title}`,
            contextInfo: {
                forwardingScore: 2023,
                isForwarded: false,
                externalAdReply: {
                    title: 'AXELLDX',
                    mediaType: 1,
                    thumbnailUrl: thumbnail,
                    containsAutoReply: true,
                    renderLargerThumbnail: true,
                    showAdAttribution: false,
                }
            }
        };

        await conn.sendMessage(m.chat, doc, { quoted: m });
        await m.react('');
    } catch (e) {
        await m.reply(String(e));
        await conn.sendMessage(m.chat, { react: { text: '', key: m.key } });
    }
};

handler.help = ['play'].map((v) => v + ' *<text>*');
handler.tags = ['music', 'downloader'];
handler.command = /^play$/i;

handler.exp = 0;
handler.limit = false;
handler.register = true;

module.exports = handler;