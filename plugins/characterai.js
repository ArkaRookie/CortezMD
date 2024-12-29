let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
    if (!text) return conn.reply(m.chat, `.${command} hallo`, m)
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    
    let character = command.toLowerCase()
    let apiKey = "Fardankey" // Ganti dengan API key yang valid
    let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${encodeURIComponent(text)}&name=${character}&apiKey=${apiKey}`)
    let kemii = await res.json()
    
    conn.reply(m.chat, `${kemii.result}`, m)
}

handler.help = ['rimuru', 'kemii', 'jokowi', 'megawati', 'yaemiko', 'paimon', 'kiku', 'putin', 'lisa'].map(v => v + ' *<teks>*')
handler.command = /^(rimuru|kemii|jokowi|megawati|yaemiko|paimon|kiku|putin|lisa)$/i
handler.tags = ['ai']
handler.limit = true

module.exports = handler