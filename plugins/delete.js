let handler = async function (m) {
    if (!m.quoted) throw false;

    let { chat, id, sender } = m.quoted;

    if (!m.isGroup) return conn.reply(m.chat, '🚩 Perintah ini hanya dapat digunakan di dalam grup!', m);

    // Get group metadata to check admin status
    let groupMetadata = await conn.groupMetadata(m.chat);
    let botNumber = conn.user.jid;
    let botParticipant = groupMetadata.participants.find(participant => participant.id === botNumber);
    let userParticipant = groupMetadata.participants.find(participant => participant.id === m.sender);

    let isAdmin = participant => participant?.admin === 'admin' || participant?.admin === 'superadmin';

    let isBotAdmin = isAdmin(botParticipant);
    let isUserAdmin = isAdmin(userParticipant);

    console.log('Is Bot Admin:', isBotAdmin);
    console.log('Is User Admin:', isUserAdmin);

    // Check if bot is admin
    if (!isBotAdmin) return conn.reply(m.chat, '🚩 Bot bukan admin!', m);

    // Check if user is admin or not
    if (!isUserAdmin) return conn.reply(m.chat, '🚩 Kamu bukan admin grup!', m);

    // Delete the message
    conn.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: false, // fromMe is set to false because we're targeting a user's message
            id: id,
            participant: sender
        }
    });
};

handler.help = ['del *<reply>*', 'delete *<reply>*'];
handler.tags = ['tools'];

handler.command = /^del(ete)?$/i;
handler.limit = true;

module.exports = handler;