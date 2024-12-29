const { areJidsSameUser } = require('@whiskeysockets/baileys');

let handler = async (m, { conn, participants }) => {
    try {
        // Fetch the latest participant list to ensure it's up-to-date
        participants = participants || await conn.groupMetadata(m.chat).then(meta => meta.participants);

        // Determine users to be promoted: mentioned users and users from replied message
        let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id));

        // Include the user from the replied message if it exists
        if (m.quoted && m.quoted.sender) {
            users.push(m.quoted.sender);
        }

        let promoteUser = [];

        for (let user of users) {
            // Check if the user is a group participant and not already an admin
            let participant = participants.find(v => areJidsSameUser(v.id, user));
            if (user.endsWith('@s.whatsapp.net') && participant && !participant.admin) {
                try {
                    await conn.groupParticipantsUpdate(m.chat, [user], 'promote');
                    await delay(1 * 1000); // Adding a delay between promotions
                    promoteUser.push(user); // Track successfully promoted users
                } catch (err) {
                    console.error(`Failed to promote ${user}:`, err);
                }
            }
        }

        if (promoteUser.length > 0) {
            m.reply('Success');
        } else {
            m.reply('No users were promoted.');
        }
    } catch (error) {
        console.error('Error handling promote command:', error);
        m.reply('An error occurred while trying to promote users.');
    }
};

handler.help = ['promote *@tag*'];
handler.tags = ['group'];
handler.command = /^(promote)$/i;

handler.admin = true;
handler.group = true;
handler.botAdmin = true;

module.exports = handler;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));