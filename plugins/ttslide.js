/*
 * Tiktok Img geser & Tiktok video
 * By Nzx </>
 * Don't delete my wm :')
*/

const axios = require("axios");
const cheerio = require("cheerio");
const btch = require("btch-downloader");
const { generateWAMessageFromContent, prepareWAMessageMedia, delay, proto, generateWAMessageContent  } = require("@whiskeysockets/baileys");

/*
import axios from "axios";
import cheerio from "cheerio";
import btch from "btch-downloader";
const { generateWAMessageFromContent, prepareWAMessageMedia, delay, proto, generateWAMessageContent  } = (await import('@whiskeysockets/baileys')).default
*/

let handler = async (m, { conn, usedPrefix, command, args, text }) => {
	if (!args[0] ) return m.reply(`*Contoh:* ${usedPrefix+command} https://vm.tiktok.com/ZSYEYxx87/`);
	if (!args[0].match(/tiktok/gi)) throw `URL *Tidak Valid!!!*`;
	await m.reply(wait);
	await conn.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}});
	try {
		let api = `https://dlpanda.com/id?url=${args[0]}&token=G7eRpMaa`;
		let response = await axios.get(api);
		const html = response.data;
		const $ = cheerio.load(html);
		let asd = [];
		let img = [];
		
		async function createImage(url) {
			const { imageMessage } = await generateWAMessageContent({
				image: {
					url
				}
			}, {
				upload: conn.waUploadToServer
			})
			return imageMessage;
		};
		
		$('div.col-md-12 > img').each((index, element) => {
			img.push($(element).attr('src'))
		});
		
		asd.push({ img })
		let fix = img.map((e, i) => {
			return e
		});
		let url = await btch.ttdl(args[0]);
		let vid = url.video[0];
		let aud = url.audio[0];
		
		if (fix.length === 0) {
			await conn.sendFile(m.chat, vid, "tiktok.mp4", "*Title:* " + url.title, m);
			await delay(2000);
			await conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mpeg' }, { quoted: m });
			await conn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}});
		} else {
			let i = 1;
			let push = [];
			for (let f of fix) {
				push.push({
					body: proto.Message.InteractiveMessage.Body.fromObject({
						text: `Gambar ${i++}`
					}),
					footer: proto.Message.InteractiveMessage.Footer.fromObject({
						text: global.botname
					}),
					header: proto.Message.InteractiveMessage.Header.fromObject({
						title:"",
						hasMediaAttachment: true,
						imageMessage: await createImage(f)
					}),
					nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
						buttons: [
						{
							name: "cta_url",
							buttonParamsJson: {
								display_text: "Owner",
								url: "https://wa.me/6288289338073",
								merchant_url: "https://wa.me/6288289338073"
							}
						}]
					})
				})
			}
			const chat = generateWAMessageFromContent(m.chat, {
				viewOnceMessage: {
					message: {
						messageContextInfo: {
							deviceListMetadata: {},
							deviceListMetadataVersion: 2
						},
						interactiveMessage: proto.Message.InteractiveMessage.fromObject({
							body: proto.Message.InteractiveMessage.Body.create({
								text: "_Result_"
							}),
							footer: proto.Message.InteractiveMessage.Footer.create({
								text: "Copyright 2024\naxelldx </>",
							}),
							header: proto.Message.InteractiveMessage.Header.create({
								hasMediaAttachment: false
							}),
							carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
								cards: [
								...push
								]
							})
						})
					}
				}
			}, { quoted: m });
			await conn.relayMessage(m.chat, chat.message, {
				messageId: chat.key.id
			})
			await conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mpeg' }, { quoted: m });
			await conn.sendMessage(m.chat, { react: { text: "✅",key: m.key,}});
		}
	} catch (e) {
		console.log(e);
		await conn.sendMessage(m.chat, { react: { text: "❌",key: m.key,}});
		throw `*Error:* ${e}`;
	}
}
handler.help = ['tiktokslide', 'ttslide'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(tiktokslide|ttslide|ttdlslide)$/i
handler.register = true;
module.exports = handler;
//export default handler;