const uploadImage = require("../lib/uploadFile")
const axios = require("axios")
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command,
	text
}) => {
	if (!text) return m.reply("Contoh: .gemini selamat siang")
	await m.react('🕒')
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ""
	if (!mime) {
			let { data } = await axios.get(`https://api.yanzbotz.my.id/api/ai/gemini?query=${text}&apiKey=lnoxz`)
			let res = data.result
			await conn.sendMessage(m.chat, {
            text: res,
            contextInfo: {
            externalAdReply: {
            title: 'GEMINI-PRO / VISION',
            thumbnailUrl: 'https://telegra.ph/file/4bae3d5130aabcbe94588.jpg',
            sourceUrl: 'https://gemini.google.com',
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, {quoted: m})
			
	} else {

		let media = await q.download()
		let isTele = /image\/(png|jpe?g)/.test(mime)
		let link = await uploadImage(media)
		let { data } = await axios.get(`https://api.yanzbotz.my.id/api/ai/gemini-image?url=${link}&query=${text}&apiKey=lnoxz`)
		let res = data.result
		await conn.sendMessage(m.chat, {
        text: res,
        contextInfo: {
        externalAdReply: {
        title: 'GEMINI-PRO / VISION',
        thumbnailUrl: 'https://telegra.ph/file/4bae3d5130aabcbe94588.jpg',
        sourceUrl: 'https://gemini.google.com',
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: m})
	    
}
  }
handler.help = ["gemini"].map(a => a + " *<text>*")
handler.tags = ["ai"]
handler.command = /^(gemini)$/i
handler.premium = false
handler.register = true
module.exports = handler