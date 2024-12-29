let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
        'unlock': 'unlocked',
        'lock': 'locked',
    }[(args[0] || '')]
    if (isClose === undefined)
        return conn.sendAliasMessage(m.chat, { text: "1. open\n2. close\n3. lock\n4. unlock" }, [{ alias: "1", response: ".group open" }, { alias: "2", response: ".group close" }, { alias: "3", response: `.group lock` }, { alias: '4', response: `.group unlock`}], m)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group)$/i

handler.admin = true
handler.botAdmin = true

module.exports = handler;