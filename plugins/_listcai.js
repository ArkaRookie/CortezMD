let handler = async (m, {
    conn,
    usedPrefix,
    command,
    isOwner
}) => {
await conn.sendPresenceUpdate("composing", m.chat)
var sections = [
{
rows: [
{title: "Enable Chat Bot", rowId: `${usedPrefix}cai on`, description: "Activate chat bot ( Ai )"},
{title: "Disable Chat Bot", rowId: `${usedPrefix}cai off`, description: "Deactivate chat bot ( Ai )"},
{title: "Search Chat Bot", rowId: `${usedPrefix}cai search`, description: "Searching character chat bot ( Ai )"},
]
},
]
var listMessage = {
text: 'Select the list button below.',
footer: "Powered By _ICSF Team_",
mentions: [m.sender],
buttonText: "Click Here!",
sections
}

await conn.sendMessage(m.chat, listMessage, {
    quoted: m
});

}
handler.premium = false
handler.command = /^(listcai)$/i
handler.register = true
handler.private = true
module.exports = handler