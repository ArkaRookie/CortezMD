let fetch = require('node-fetch');

let handler = async (m, {
    conn,
    command,
    isOwner
}) => {
    const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys");
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: "Hallowww :3"
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'ᴋᴀᴡᴀɪɪɴᴇ ᴘᴏᴋɪɪ ʙʏ ᴘᴀᴘᴀʜ ᴀxᴇʟʟ><'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({
                            image: {
                                url: 'https://telegra.ph/file/c88fb1c34dc1cfd5d2853.jpg'
                            }
                        }, {
                            upload: conn.waUploadToServer
                        }))
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Owner","id": ".owner"}`
                        },
                        {
                            "name": "cta_url",
                            "buttonParamsJson": "{\"display_text\":\"Saluran\",\"url\":\"https://whatsapp.com/channel/0029VaXtaJwG3R3lWS7CpZ1y\",\"merchant_url\":\"https://whatsapp.com/channel/0029VaXtaJwG3R3lWS7CpZ1y\"}"
                        },
                        {
                        	"name": "quick_reply",
                            "buttonParamsJson": `{"display_text":"Menu","id": ".menu"}`                       
                        }],
                    })
                })
            }
        }
    }, {});

    await conn.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}

handler.customPrefix = /^(halo|halo bot|halo poki|poki)$/i
handler.command = new RegExp

module.exports = handler;