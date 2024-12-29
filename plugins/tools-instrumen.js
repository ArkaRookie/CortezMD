const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
    if (!/audio/.test(mime)) throw `Reply Video/Vn Nya`;
    let media = await q.download?.();
    if (!media) throw 'Can\'t download media';

    m.reply('Proses 1 minute');
    let baseUrl = 'https://vocalremover.com';
    const token = 'BKc2dgAzANO3Qkxh13y7kn08fulalntMaIvDloPz247501de';

    try {
        let file = `tmp/${m.sender.split('@')[0]}.mp3`;
        fs.writeFileSync(file, media);

        const form = new FormData();
        form.append('file', fs.createReadStream(file));
        form.append('task', 'spleeter:2stems');
        form.append('sample', '1');

        const config = {
            method: 'post',
            url: `${baseUrl}/api/file-conversion/create`,
            headers: {
                ...form.getHeaders(),
                'Authorization': `Bearer ${token}`
            },
            data: form
        };

        const { data } = await axios(config);
        console.log('Create response:', data);

        if (!data || !data.file_conversion) {
            throw new Error('File conversion object not found in response');
        }

        const { file_conversion } = data;
        if (!file_conversion.ulid) {
            throw new Error('ULID not found in file conversion object');
        }

        await conn.delay(60000);

        const apiEndpoint = `${baseUrl}/api/file-conversion/${file_conversion.ulid}`;

        const configs = {
            method: 'get',
            url: apiEndpoint,
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        let { data: result } = await axios(configs);
        console.log('Get response:', result);

        if (!result || !result.file_conversion) {
            throw new Error('File conversion result object not found in response');
        }

        let { file_conversion: audio } = result;

        await conn.sendFile(m.chat, audio.output.vocals.url, '', null, {
            key: {
                participant: '62895402466525@s.whatsapp.net',
                remoteJid: '62895402466525@s.whatsapp.net'
            },
            message: {
                conversation: audio.output.vocals.name
            }
        }, true, {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        });

        await conn.sendFile(m.chat, audio.output.instrumentals.url, '', null, {
            key: {
                participant: '62895402466525@s.whatsapp.net',
                remoteJid: '62895402466525@s.whatsapp.net'
            },
            message: {
                conversation: audio.output.instrumentals.name
            }
        }, false, {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        });

    } catch (e) {
        console.error('Error:', e.message);
        throw `${e.message}`;
    }
};

handler.help = ['instrument'];
handler.tags = ['tools'];
handler.limit = true;
handler.command = /^(instrument(al)?)$/i;

module.exports = handler;