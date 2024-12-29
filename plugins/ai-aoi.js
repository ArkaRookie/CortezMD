const fetch = require('node-fetch');
const handler = {};

handler.help = ['aoi <teks>'];
handler.tags = ['ai'];
handler.command = /^aoi$/i;
handler.limit = true;
handler.premium = false;

async function textToSpeech(text) {
    try {
        const response = await fetch(`https://api.yanzbotz.my.id/api/tts/aoi?query=${encodeURIComponent(text)}`);
        const audioData = await response.buffer();
        return audioData;
    } catch (error) {
        console.error('Error fetching audio data:', error);
        throw new Error('Failed to fetch audio data');
    }
}

handler.exec = async function (message) {
    try {
        const text = message.data.args[1];
        if (!text) return await message.client.sendMessage(message.jid, 'Mohon berikan teks yang ingin diubah menjadi suara.', 'conversation');
        
        textToSpeech(text)
            .then(audioData => {
                // Lakukan sesuatu dengan audioData, misalnya kirim sebagai pesan suara
                // Contoh untuk mengirim sebagai pesan suara:
                message.client.sendMessage(message.jid, audioData, MessageType.audio);
            })
            .catch(error => {
                console.error('Error executing textToSpeech:', error);
                message.client.sendMessage(message.jid, 'Terjadi kesalahan saat mengonversi teks menjadi suara.', 'conversation');
            });
    } catch (error) {
        console.error('Error executing command:', error);
        await message.client.sendMessage(message.jid, 'Terjadi kesalahan saat mengonversi teks menjadi suara.', 'conversation');
    }
};

module.exports = handler;