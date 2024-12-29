let handler = async (m, { conn }) => {
  tmn = global.db.data.users[m.sender]

  if(tmn.sahabat == ""){
    return conn.reply(m.chat,`Anda tidak memiliki sahabat.`,m)
  }
  
  tmb = global.db.data.users[global.db.data.users[m.sender]. sahabat]

  if (typeof tmb == "undefined"){
    conn.reply(m.chat,`Berhasil putus hubungan sahabat dengan @${global.db.data.users[m.sender].sahabat.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].sahabat]
    }})
    tmn.sahabat = ""
  }

  if (m.sender == tmb.sahabat){
    conn.reply(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].sahabat.split('@')[0]}`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].sahabat]
    }})
    tmn.sahabat = ""
    tmb.sahabat = ""
  }else {
    conn.reply(m.chat,`Anda tidak memiliki pasangan.`,m)
  }
}
handler.help = ['putusahabat']
handler.tags = ['fun']
handler.command = /^(putusahabat)$/i
handler.group = true
handler.limit = true
handler.fail = null
module.exports = handler