const fetch = require('node-fetch');
const fs = require('fs');

let handler = async (m, { conn, generateWAMessageFromContent }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, gconly, nsfw, statusupdate, autogetmsg, antivirus, publicjoin } = global.db.data.settings[conn.user.jid];
    const chats = Object.keys(await conn.chats);
    const groups = Object.keys(await conn.groupFetchAllParticipating());
    let block = await conn.fetchBlocklist();
    let tag = `@${m.sender.replace(/@.+/, '')}`;
    let mentionedJid = [m.sender];
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);

    let sts = `• *S T A T U S*
    
┌  ◦  Aktif selama ${uptime}
│  ◦  *${groups.length}* Grup
│  ◦  *${chats.length - groups.length}* Chat Pribadi
│  ◦  *${Object.keys(global.db.data.users).length}* Pengguna
│  ◦  ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}
│  ◦  *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
└  ◦  *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned

• *S E T T I N G S*

┌  ◦  ${anon ? '√' : '×'} *Anon Chat*
│  ◦  ${anticall ? '√' : '×'} *Anti Call*
│  ◦  ${antispam ? '√' : '×'} *Anti Spam*
│  ◦  ${antitroli ? '√' : '×'} *Anti Troli*
│  ◦  ${backup ? '√' : '×'} *Auto Backup DB*
│  ◦  ${gconly ? '√' : '×'} *Mode Grup*
│  ◦  ${jadibot ? '√' : '×'} *Jadi Bot*
└  ◦  ${nsfw ? '√' : '×'} *Mode Nsfw*
`;

// Send fake reply with contextInfo
await conn.sendMessage(m.chat, {
    text: sts,
    contextInfo: {
        externalAdReply: {
            title: 'AXELLDX',
            thumbnailUrl: 'https://telegra.ph/file/8b260fecb45b02471c5c7.jpg',
            mediaType: 1,
            renderLargerThumbnail: true,
            sourceUrl: '' // You can add a URL if needed
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363288101737637@newsletter',
            newsletterName: 'Powered By Axell'
        }
    }
}, {
    quoted: {
        key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' },
        message: {
            conversation: getWIBTime()
        }
    }
});
};

handler.help = ['statusbot'];
handler.tags = ['info'];
handler.command = /^statusbot?$/i;

module.exports = handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

function getWIBTime() {
    const offset = 7; // WIB is UTC+7
    let date = new Date();
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let wibDate = new Date(utc + (3600000 * offset));
    let hours = wibDate.getHours();
    let minutes = wibDate.getMinutes();
    let seconds = wibDate.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let strTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + ampm;
    return strTime;
}