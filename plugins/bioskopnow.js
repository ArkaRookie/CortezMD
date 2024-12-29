/** !! THIS CODE GENERATE BY RODOTZ X ZHUBOT !! **/

let fetch = require('node-fetch')
let { bioskopNow } = require("@bochilteam/scraper");

let handler = async (m, { conn, command, usedPrefix }) => {

let data = await bioskopNow()
let capt = `
*BIOSKOP NOW*

${data.map(v => `*Name:* ${v.title}\n\n*Genre:* ${v.genre}\n*Duration:* ${v.duration}\n*PlayingAt:* ${v.playingAt}\n\n*Image:* ${v.img}\n*Url:* ${v.url}\n\n===============================`).join`\n\n`}
    `.trim()
    conn.sendMessage(m.chat, {
                text: capt,
                contextInfo: {
                    externalAdReply: {
                        title: "Bioskop Now",
                        body: "Powered by Bot Whatsapp",
                        thumbnailUrl: "https://telegra.ph/file/18492353ae94ef618f3b4.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
}
handler.help = ['bioskopnow']
handler.tags = ['internet']
handler.command = /^(bioskopnow|bioskop)$/i
handler.premium = false
handler.limit = true

module.exports = handler