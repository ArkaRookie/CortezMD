const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tekbe/i.test(m.quoted.text)) return true
    this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
    if (!(id in this.tebakbendera)) {
        m.reply('Soal itu telah berakhir.')
        return true
    }
    if (m.quoted.id == this.tebakbendera[id][0].id) {
        let json = this.tebakbendera[id][1]
        if (m.text.toLowerCase() === json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender] = global.db.data.users[m.sender] || { exp: 0, tiketcoin: 0 }
            global.db.data.users[m.sender].exp += this.tebakbendera[id][2]
            global.db.data.users[m.sender].tiketcoin += 1
            m.reply(`*Benar!*\n+${this.tebakbendera[id][2]} XP\n+1 TiketCoin`)
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) {
            m.reply(`*Dikit Lagi!*`)
        } else {
            m.reply(`*Salah!*`)
        }
    }
    return true
}
handler.exp = 0

module.exports = handler