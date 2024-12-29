let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
	let ban = !args || !args[0] ? 100000 : isNumber(args[0]) ? parseInt(args[0]) : 100000
	ban = Math.max(1, ban)
	list.map(([user, data], i) => (Number(data.bank = ban)))
		conn.reply(m.chat, `*Berhasil direset ${ban} / user*`, m)
}
handler.help = ['bank'].map(v => 'reset' + v)
handler.tags = ['owner']
handler.command = /^(resetbank)$/i

handler.owner = true

module.exports = handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}