let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let tiketcoin = 1
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakbendera[id][0])
        return
    }
    if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/qisyana/scrape/main/flag.json'))).json()
    let json = src[Math.floor(Math.random() * src.length)]
    if (!json) {
        conn.reply(m.chat, 'Soal tidak tersedia, coba lagi nanti.', m)
        return
    }
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tekbe untuk bantuan
Bonus: ${poin} XP
Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, 'img.jpg', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) {
                conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, conn.tebakbendera[id][0])
                delete conn.tebakbendera[id]
            }
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.limit = true
handler.group = true

module.exports = handler