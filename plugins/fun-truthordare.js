/** !! THIS CODE GENERATE BY RODOTZBOT !! **/

let { dare, truth } = require('@bochilteam/scraper')

let handler = async function (m, { conn, text, command, usedPrefix }) {
if (command == 'dare') {
await conn.reply(m.chat, await dare(), m)
}
if (command == 'truth') {
await conn.reply(m.chat, await truth(), m)
}
}
handler.command = handler.help = ['dare', 'truth']
handler.tags = ['fun']

module.exports = handler