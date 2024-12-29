let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
	let mon = !args || !args[0] ? 100000 : isNumber(args[0]) ? parseInt(args[0]) : 100000
	mon = Math.max(1, mon)
	list.map(([user, data], i) => (Number(data.money = mon)))
		conn.reply(m.chat, `*Berhasil direset ${mon} / user*`, m)
}
handler.help = ['money'].map(v => 'reset' + v)
handler.tags = ['owner']
handler.command = /^(resetmoney)$/i

handler.owner = true

module.exports = handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}