let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
     if (!text) throw `Masukan nama nabi\n• Example: ${usedPrefix + command} adam`
     try {
     let url = await fetch(`https://raw.githubusercontent.com/Aiinne/scrape/main/data/kisahnabi/${text}.json`)
     let kisah = await url.json()
     let hasil = `Nabi : ${kisah.name}\nTanggal Lahir : ${kisah.thn_kelahiran}\nTempat Lahir : ${kisah.tmp}\nUsia : ${kisah.usia}\nKisah : ${kisah.description}`
     conn.reply(m.chat, hasil, m)
     } catch {
        throw `Pencarian tidak di temukan!\n\nContoh:\n${usedPrefix + command} adam`
     }
}
handler.help = ['kisahnabi <name>']
handler.tags = ['islami']
handler.command = /^kisahnabi$/i

handler.limit = true

module.exports = handler