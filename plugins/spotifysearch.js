const { generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys");
const axios = require("axios");
const fs = require('fs');
const canvafy = require("canvafy");

let rodotz = async (m, { conn, text, usedPrefix, command, args }) => {
    try {
        if (!args[0]) {
            return m.reply(`🚩 Masukkan Query / Links!\n\nContoh: \n${usedPrefix + command} Forever Young Alphaville\n\nContoh: \n${usedPrefix + command} https://open.spotify.com/track/4S1VYqwfkLit9mKVY3MXoo`);
        }

        if (args[0].match(/https:\/\/open.spotify.com/gi)) {
            m.react('🕒');
            let info = await spotifydl(args[0]);
            let captionvid = `∘ Title: ${info.title}\n∘ Type: ${info.type}\n∘ Artist: ${info.artist}\n∘ Duration: ${await Func.toTime(info.duration)}\n\n${set.footer}`;

            const p = await new canvafy.Spotify()
                .setTitle(info.title)
                .setAuthor("Spotify Downloader")
                .setTimestamp(40, 100)
                .setOverlayOpacity(0.8)
                .setBorder("#fff", 0.8)
                .setImage(info.image)
                .setBlur(3)
                .build();

            await conn.sendFile(m.chat, p, '', captionvid, m);
            await conn.sendFile(m.chat, info.download, '', null, m, true);
        } else {
            m.react('🕒');
            let result = await searchSpotify(text);
            let caption = result.map((v, i) => {
                return {
                    header: "Download Audio",
                    title: v.name,
                    description: `Popularity ${v.popularity}%`,
                    id: '.spotify ' + v.link
                }
            });

            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: {
                            body: {
                                text: `Hasil pencarian dari ${text}`,
                            },
                            footer: {
                                text: "Click for Download Result"
                            },
                            header: {
                                title: "Hello " + m.name,
                                subtitle: "",
                                hasMediaAttachment: false,
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    {
                                        name: "single_select",
                                        buttonParamsJson: JSON.stringify({
                                            title: "RESULT " + result.length,
                                            sections: [
                                                {
                                                    rows: caption
                                                }
                                            ]
                                        })
                                    }
                                ]
                            }
                        }
                    }
                }
            }, { quoted: m }, {});

            await conn.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    } catch (error) {
        console.error('Error processing Spotify request:', error);
        m.reply('An error occurred while processing your request.');
    }
}

rodotz.help = ["spotify", "spotifys", "spotifysearch"];
rodotz.tags = ["search", "downloader"];
rodotz.command = ["spotify", "spotifys", "spotifysearch"];
module.exports = rodotz;

async function spotifydl(url) {
    try {
        const spotifyResponse = await axios.get(
            `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
            {
                headers: {
                    accept: "application/json, text/plain, */*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": "\"Android\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    Referer: "https://spotifydownload.org/",
                    "Referrer-Policy": "strict-origin-when-cross-origin",
                },
            }
        );

        const spotifyData = spotifyResponse.data.result;
        if (!spotifyData || !spotifyData.gid || !spotifyData.id) {
            throw new Error('Invalid response from Spotify API');
        }

        const mp3Response = await axios.get(
            `https://api.fabdl.com/spotify/mp3-convert-task/${spotifyData.gid}/${spotifyData.id}`,
            {
                headers: {
                    accept: "application/json, text/plain, */*",
                    "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                    "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
                    "sec-ch-ua-mobile": "?1",
                    "sec-ch-ua-platform": "\"Android\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    Referer: "https://spotifydownload.org/",
                    "Referrer-Policy": "strict-origin-when-cross-origin",
                },
            }
        );

        const mp3Data = mp3Response.data.result;
        if (!mp3Data || !mp3Data.download_url) {
            throw new Error('Invalid response from MP3 convert task API');
        }

        return {
            title: spotifyData.name,
            type: spotifyData.type,
            artist: spotifyData.artists,
            duration: spotifyData.duration_ms,
            image: spotifyData.image,
            download: `https://api.fabdl.com${mp3Data.download_url}`
        };
    } catch (error) {
        console.error('Error during Spotify download process:', error);
        throw new Error('Failed to download the audio');
    }
}

async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}

async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error getting Spotify access token:', error);
        throw 'An error occurred while obtaining Spotify access token.';
    }
}