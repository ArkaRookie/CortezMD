let fetch = require('node-fetch')
let handler = async (m, {
    conn,
    command,
    isOwner
}) => {
let sections = [{
title: 'Populer Menu ( List Menu )', 
highlight_label: 'Populer Plugins',
rows: [{
title: 'Downloader Feature',
description: 'Display Menu Downloader ( List Menu )',
id: '.menu downloader'
}, {
title: 'Ai Feature',
description: 'Display Menu Ai ( List Menu )', 
id: '.menu ai'
}, {
title: 'Game Feature',
description: 'Display Menu Game ( List Menu )', 
id: '.menu game'
}, {
title: 'Fun Feature',
description: 'Display Menu Fun ( List Menu )',
id: '.menu fun'
}, {
title: 'Music Feature',
description: 'Display Menu Music ( List Menu )',
id: '.menu music'
}, {
title: 'Rpg Feature',
description: 'Display Menu Rpg ( List Menu )',
id: '.menu rpg'
}, {
title: 'Sticker Feature',
description: 'Display Menu Sticker ( List Menu )', 
id: '.menu sticker'
}]
}, 
{
title: 'Basic Menu ( List Menu )', 
highlight_label: 'Basic Plugins',
rows: [{
title: 'Main Feature',
description: `Display Menu Main ( List Menu )`, 
id: '.menu main'
}, {
title: 'Info Feature',
description: 'Display Menu Info ( List Menu )',
id: '.menu info'
}, {
title: 'Diffusion Feature',
description: 'Display Menu Diffusion ( List Menu )',
id: '.menu diffusion'
}, {
title: 'Convert Feature',
description: 'Display Menu Convert ( List Menu )',
id: '.menu convert'
}, {
title: 'Premium Feature',
description: 'Display Menu Premium ( List Menu )', 
id: '.menu premium'
}, {
title: 'Judi Feature',
description: 'Display Menu Judi ( List Menu )',
id: '.menu judi'
}, {
title: 'Bug Feature',
description: 'Display Menu Bug ( List Menu )',
id: '.menu bug'
}, {
title: 'Quotes Feature',
description: 'Display Menu Quotes ( List Menu )',
id: '.menu quotes'
}, {
title: 'Primbon Feature',
description: 'Display Menu Primbon ( List Menu )',
id: '.menu primbon'
}, {
title: 'Group Feature',
description: 'Display Menu Group ( List Menu )',
id: '.menu group'
}, {
title: 'Atlantic Feature',
description: 'Display Menu Atlantic ( List Menu )',
id: '.menu atlantic'
}, {
title: 'Smm Feature',
description: 'Display Menu Smm ( List Menu )', 
id: '.menu smm'
}, {
title: 'Store Feature',
description: 'Display Menu Store ( List Menu )',
id: '.menu store'
}, {
title: 'Panel Feature',
description: 'Display Menu Panel ( List Menu )',
id: '.menu panel'
}, {
title: 'Ssh Feature',
description: 'Display Menu Ssh ( List Menu )', 
id: '.menu ssh'
}, {
title: 'Jadibot Feature',
description: 'Display Menu Jadibot ( List Menu )',
id: '.menu jadibot'
}, {
title: 'Internet Feature',
description: 'Display Menu Internet ( List Menu )',
id: '.menu internet'
}, {
title: 'Search Feature',
description: 'Display Menu Search ( List Menu )', 
id: '.menu search'
}, {
title: 'Hengker Feature',
description: 'Display Menu Hengker ( List Menu )',
id: '.menu hengker'
}, {
title: 'Islami Feature',
description: 'Display Menu Islami ( List Menu )',
id: '.menu islami'
}, {
title: 'Ephoto Feature',
description: 'Display Menu Ephoto ( List Menu )',
id: '.menu ephoto'
}, {
title: 'Textprome Feature',
description: 'Display Menu Textprome ( List Menu )',
id: '.menu textprome'
}, {
title: 'Owner Feature',
description: 'Display Menu Owner ( List Menu )', 
id: '.menu owner'
}, {
title: 'Simulator Feature',
description: 'Display Menu Simulator ( List Menu )',
id: '.menu simulator'
}, {
title: 'Anonymous Feature',
description: 'Display Menu Anonymous ( List Menu )',
id: '.menu anonymous'
}, {
title: 'Tools Feature',
description: 'Display Menu Tools ( List Menu )',
id: '.menu tools'
}, {
title: 'Anime Feature',
description: 'Display Menu Anime ( List Menu )', 
id: '.menu anime'
}, {
title: 'Nsfw Feature',
description: 'Display Menu Nsfw ( List Menu )',
id: '.menu nsfw'
}]
}]

let listMessage = {
    title: 'Menu List', 
    sections
};

const { generateWAMessageFromContent, proto } = require("@whiskeysockets/baileys") 
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
            text: `*Hello, @${m.sender.replace(/@.+/g, '')}!*\n_Click Button List Bellow_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Powered By _WhatsApp_'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            subtitle: "Escobar",
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
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
handler.help = ['menulist', 'listmenu']
handler.tags = ['main']
handler.command = /^(listmenu|menulist|list)$/i
handler.private = false

module.exports = handler