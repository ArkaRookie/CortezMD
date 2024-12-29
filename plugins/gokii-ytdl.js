const ytdl = require('ytdl-core');
const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys");

let handler = async (m, { conn, text, command }) => {
    if (!text) return m.reply(`.${command} https://www.youtube.com/xxxxxxx`);
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

    try {
        const info = await ytdl.getInfo(text);
        const title = info.videoDetails.title;

        let sections = [{
            rows: [{
                title: 'Download Video',
                description: `Download video from - ${title}`,
                id: `.ytv ${text}`
            },
            {
                title: 'Download Audio',
                description: `Download audio from - ${title}`,
                id: `.yta ${text}`
            }]
        }];

        let listMessage = {
            title: 'Click Here ><',
            sections
        };

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    "messageContextInfo": {
                        "deviceListMetadata": {},
                        "deviceListMetadataVersion": 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        contextInfo: {
                            mentionedJid: [m.sender],
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid: '120363144038483540@newsletter',
                                newsletterName: 'Powered By : axelldx',
                                serverMessageId: -1
                            },
                            businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
                            forwardingScore: 256,
                            externalAdReply: {
                                title: 'AXELLDX',
                                thumbnailUrl: 'https://telegra.ph/file/a6f3ef42e42efcf542950.jpg',
                                sourceUrl: 'https://youtube.com/shorts/eHM3CMiAQ9Y?si=sqJQ1gyRAnptIK0m',
                                mediaType: 2,
                                renderLargerThumbnail: false
                            }
                        },
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `Click List Untuk Memilih Result!`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: 'Powered By _WhatsApp_'
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            title: `*Hello, @${m.sender.replace(/@.+/g, '')}!*`,
                            subtitle: "Kemii",
                            hasMediaAttachment: false
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "single_select",
                                    "buttonParamsJson": JSON.stringify(listMessage)
                                }
                            ],
                        })
                    })
                }
            }
        }, { userJid: m.chat, quoted: m });

        conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    } catch (error) {
        console.error(error);
        m.reply('Error: Unable to fetch video details. Please try again later.');
    }
}

handler.tags = ['downloader'];
handler.help = ['ytdl *<url>*'];
handler.command = ['ytdl', 'yt'];

module.exports = handler;