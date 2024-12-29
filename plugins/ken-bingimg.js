let handler = async (m, { conn, usedPrefix, command, text }) => {
    if (!text) throw `• *Example :* ${usedPrefix + command} dog`
    conn.sendMessage(m.chat, { react: { text: '🍺', key: m.key }})
    
    try {
        let api = await alya.bingimage(text)
        console.log(JSON.stringify(api, null, 2));  // Log the API response to inspect its structure
        
        if (!api.data || !Array.isArray(api.data)) {
            throw new Error('API response is not in expected format');
        }
        
        for (let i of api.data) {
            conn.sendFile(m.chat, i.url, '', '', m)
        }
    } catch (error) {
        console.error(error);
        throw `An error occurred: ${error.message}`
    }
}

handler.help = ['bingimg *<text>*'];
handler.command = /^bingimg$/i;
handler.tags = ['internet', 'ai'];
handler.premium = true
handler.limit = true
handler.register = true

module.exports = handler