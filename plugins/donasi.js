const fetch = require('node-fetch');

let handler = async (m, { conn, command, usedPrefix }) => {
    let str = `${conn.getName(m.sender)}
    
• *D O N A T E*

◦ Dana : _088289338073_
◦ Smartfren : _088289338073_
◦ Indosat : _085811073032_

Thank you for your donations !
`
    await conn.relayMessage(m.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'USD',
            amount1000: fsizedoc,
            requestFrom: '0@s.whatsapp.net',
            noteMessage: {
                extendedTextMessage: {
                    text: str,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        externalAdReply: {
                            showAdAttribution: true
                        }
                    }
                }
            }
        }
    }, {});
};

handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)$/i;

module.exports = handler;