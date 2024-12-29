let fetch = require('node-fetch');

// Simple in-memory storage for user stamina
let userStamina = {};

let handler = async (m, { conn, command, isOwner }) => {
    let sections = [{
        title: 'Movement Menu ( Move to a Place )', 
        highlight_label: 'Move to',
        rows: [{
            title: 'Forest',
            description: 'Move to the Forest',
            id: '.move forest',
            imageUrl: 'https://example.com/forest.jpg'
        }, {
            title: 'Market',
            description: 'Move to the Market', 
            id: '.move market',
            imageUrl: 'https://example.com/market.jpg'
        }, {
            title: 'Shop',
            description: 'Move to the Shop', 
            id: '.move shop',
            imageUrl: 'https://example.com/shop.jpg'
        }, {
            title: 'Mine',
            description: 'Move to the Mine',
            imageUrl: 'https://example.com/mine.jpg'
        }, {
            title: 'Bank',
            description: 'Move to the Bank',
            imageUrl: 'https://example.com/bank.jpg'
        }, {
            title: 'Office',
            description: 'Move to the Office', 
            imageUrl: 'https://example.com/office.jpg'
        }, {
            title: 'Dungeon',
            description: 'Move to the Dungeon', 
            imageUrl: 'https://example.com/dungeon.jpg'
        }, {
            title: 'River',
            description: 'Move to the River', 
            imageUrl: 'https://example.com/river.jpg'
        }, {
            title: 'Blacksmith',
            description: 'Move to the Blacksmith', 
            imageUrl: 'https://example.com/blacksmith.jpg'
        }, {
            title: 'Camp',
            description: 'Move to the Camp', 
            imageUrl: 'https://example.com/camp.jpg'
        }]
    }];

    let listMessage = {
        title: 'Movement Menu', 
        sections
    };

    const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys");
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
                            newsletterName: 'Powered By : escobarcortez', 
                            serverMessageId: -1
                        },
                        businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
                        forwardingScore: 256,
                        externalAdReply: {  
                            title: 'CORTEZ', 
                            thumbnailUrl: 'https://telegra.ph/file/a6f3ef42e42efcf542950.jpg', 
                            sourceUrl: 'https://youtube.com/shorts/eHM3CMiAQ9Y?si=sqJQ1gyRAnptIK0m',
                            mediaType: 2,
                            renderLargerThumbnail: false
                        }
                    }, 
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `*Hello, @${m.sender.replace(/@.+/g, '')}!*\n_Click Button List Below_`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Powered By _WhatsApp_'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        subtitle: "Cortez",
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
    }, {});

    await conn.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });

    if (command.startsWith('.move ')) {
        let location = command.split(' ')[1];
        let imageUrl = '';
        let locationName = '';

        switch (location) {
            case 'forest':
                imageUrl = 'https://example.com/forest.jpg';
                locationName = 'Forest';
                break;
            case 'market':
                imageUrl = 'https://example.com/market.jpg';
                locationName = 'Market';
                break;
            case 'shop':
                imageUrl = 'https://example.com/shop.jpg';
                locationName = 'Shop';
                break;
            case 'mine':
                imageUrl = 'https://example.com/mine.jpg';
                locationName = 'Mine';
                break;
            case 'bank':
                imageUrl = 'https://example.com/bank.jpg';
                locationName = 'Bank';
                break;
            case 'office':
                imageUrl = 'https://example.com/office.jpg';
                locationName = 'Office';
                break;
            case 'dungeon':
                imageUrl = 'https://example.com/dungeon.jpg';
                locationName = 'Dungeon';
                break;
            case 'river':
                imageUrl = 'https://example.com/river.jpg';
                locationName = 'River';
                break;
            case 'blacksmith':
                imageUrl = 'https://example.com/blacksmith.jpg';
                locationName = 'Blacksmith';
                break;
            case 'camp':
                imageUrl = 'https://example.com/camp.jpg';
                locationName = 'Camp';
                break;
            default:
                return;
        }

        // Initialize user stamina if not present
        if (!userStamina[m.sender]) {
            userStamina[m.sender] = 100; // Default stamina value
        }

        // Reduce stamina by 10
        userStamina[m.sender] -= 10;

        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: `You have moved to the ${locationName}. - Stamina reduced by 10. Current stamina: ${userStamina[m.sender]}.` 
        });
    }
}
handler.help = ['move']
handler.tags = ['game']
handler.command = /^(move|travel|goto)$/i
handler.private = false

module.exports = handler