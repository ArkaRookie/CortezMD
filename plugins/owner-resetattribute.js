let handler = async (m, { conn, args }) => {
  let list = Object.entries(global.db.data.users)
  let datas = !args || !args[0] ? 500 : isNumber(args[0]) ? parseInt(args[0]) : 500
  datas = Math.max(5, datas)
  list.map(([user, data], i) => (Number(data.strenght, data.speed, data.attack, data.defense, data.regeneration = datas)))
  conn.reply(m.chat, `Berhasil di reset ${datas}/user`, m)
}

handler.command = handler.help = ['resetattribute']
handler.tags = ['owner']
handler.owner = true

module.exports = handler

function isNumber(x = 0) {
 x = parseInt(x)
 return !isNaN(x) && typeof x == 'number'
}