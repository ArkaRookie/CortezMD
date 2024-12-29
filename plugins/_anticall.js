const { WAMessageStubType } = require('@whiskeysockets/baileys')
var { format } = require('util');

let rodots = m => m

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
    clearTimeout(this)
    resolve()
}, ms))

rodots.all = async function (m) {
	if (m.fromMe && m.isBaileys) return !0
	let text;
   let user = global.db.data.users[m.sender]
	let setting = global.db.data.settings[this.user.jid]
	if(!setting.anticall) return 
	
	if (m.messageStubType === (WAMessageStubType.CALL_MISSED_VOICE || WAMessageStubType.CALL_MISSED_VIDEO)) {
		await this.reply(m.chat, `Halo Kak *${m.name}*.\nKamu telah melanggar peraturan *${set.bot}* karena telah menelpon *Bot*\n\n${set.bot} akan memblokir nomor mu!\n\nNote: Jika tidak sengaja hubungi nomor dibawah ini!\nwa.me/${own.no}`, null)
		await delay(1000)
		await this.updateBlockStatus(m.chat, "block")
	}
}

module.exports = rodots