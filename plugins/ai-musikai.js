const axios = require('axios');

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let roseSet = db.data.txt2img || {};
    switch (command) {
        case 'gender':
            await conn.sendMessage(m.chat, {
                react: {
                    text: '🍵',
                    key: m.key,
                }
            });
            if (!text) return m.reply(`Isikan gender yang sesuai(female / male)`);
            roseSet.gender = text;
            m.reply(`[ ✓ ] Berhasil mengatur gender *${roseSet.gender}*`);
            break;
        case 'mood':
            await conn.sendMessage(m.chat, {
                react: {
                    text: '🍵',
                    key: m.key,
                }
            });
            if (!text) return m.reply(`Isikan mood yang sesuai(happy, confident, hype, romantic, dark)`);
            roseSet.mood = text;
            m.reply(`[ ✓ ] Berhasil mengatur mood *${roseSet.mood}*`);
            break;
            case 'genre':
            await conn.sendMessage(m.chat, {
                react: {
                    text: '🍵',
                    key: m.key,
                }
            });
            if (!text) return m.reply(`Isikan genre yang sesuai(funk, rap, pop, jazz, metal, rock, edm, kpop, indie, cinematic)`);
            roseSet.genre = text;
            m.reply(`[ ✓ ] Berhasil mengatur genre *${roseSet.genre}*`);
            break;
        case 'musikai':
            if (!text) return m.reply('*• Example :* .musikai I love Fanzz, tends your subscription now!');
            m.reply("tunggu sekitar 3 menit")
            
                const { data } = await axios.request({
                    baseURL: "https://api.itsrose.rest",
                    url: "audio/music_ai",
                    method: "POST",
                    headers: {
                        accept: "application/json",
                        Authorization: global.rose,
                        "Content-Type": "application/json",
                    },
                    data: {
                        "prompt": text,
                        "gender": roseSet.gender,
                        "mood": roseSet.mood,
                        "genre": roseSet.genre
                    }
                });

                const { result } = data;

                await conn.delay(180000);

                let api = `https://api.itsrose.rest/audio/music_ai/query?id=${result.id}`;

                const response = await axios.get(api, {
                    headers: {
                        "Authorization": global.rose,
                    },
                });
                const json = response.data;
                const audio = json.result.url;
                const foto = json.result.image_url;
                const lirik = json.result.lyrics;
                const mood = json.result.mood;
                const genre = json.result.genre;
                const gender = json.result.gender;
                let hasil = `• Lirik : ${lirik}\n• Mood : ${mood}\n• Gender : ${gender}`;

                conn.sendFile(m.chat, audio, m);
                conn.sendFile(m.chat, foto, '', hasil, m);
           
            break;
    }
};

handler.command = ["musikai", "gender", "mood","genre"];
handler.help = ["musikai"];
handler.tags = ["ai"];
handler.premium = true;

module.exports = handler