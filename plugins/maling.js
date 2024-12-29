const timeout = 3600000; // 1 hour in milliseconds
const banDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

let handler = async (m, { conn, usedPrefix, text }) => {
    let user = global.db.data.users[m.sender];
    
    // Initialize user properties if they do not exist
    if (!user.lastmaling) user.lastmaling = 0;
    if (!user.money) user.money = 0;
    if (!user.exp) user.exp = 0;
    if (!user.kardus) user.kardus = 0;
    if (user.banned === undefined) user.banned = false;
    
    let now = new Date().getTime();
    
    // Check if the user is currently banned from robbing
    if (user.banned) {
        return conn.reply(m.chat, `Anda sedang dilarang maling selama ${msToTime(banDuration)}`, m);
    }
    
    // Check if the user can rob again
    if (now - user.lastmaling < timeout) {
        let timeRemaining = user.lastmaling + timeout - now;
        return conn.reply(m.chat, `Anda sudah merampok bank\nTunggu selama ${msToTime(timeRemaining)} lagi`, m);
    }

    // Determine if the robbery fails
    let failChance = Math.random();
    if (failChance < 0.3) {  // 30% chance of failure
        // Apply penalties
        let fine = 1000000;  // Fine of 1 million
        user.money -= fine; // Deduct fine, allowing negative balance
        user.lastmaling = now;  // Update lastmaling time

        // Set a temporary ban (5 minutes)
        user.banned = true;
        setTimeout(() => {
            user.banned = false;
        }, banDuration);

        return conn.reply(m.chat, `Maling gagal! Kamu didenda 💵 ${fine} dan dilarang maling selama ${msToTime(banDuration)}.`, m, {
            contextInfo: {
                externalAdReply: {
                    mediaType: 1,
                    title: 'AXELLDX',
                    thumbnailUrl: 'https://telegra.ph/file/25f176657e83c5fb51dae.jpg',
                    renderLargerThumbnail: true,
                    sourceUrl: ''
                }
            }
        });
    }

    // Robbery success logic
    let money = Math.floor(Math.random() * 30000);
    let exp = Math.floor(Math.random() * 999);
    let kardus = Math.floor(Math.random() * 1000);
    user.money += money;
    user.exp += exp;
    user.kardus += kardus;
    user.lastmaling = now;

    conn.reply(m.chat, `Selamat kamu mendapatkan : \n💵 +${money} Money\n📦 +${kardus} Kardus\n⚗️ +${exp} Exp`, m, {
        contextInfo: {
            externalAdReply: {
                mediaType: 1,
                title: 'AXELLDX',
                thumbnailUrl: 'https://telegra.ph/file/4c7a34b3fed30a8c54b20.jpg',
                renderLargerThumbnail: true,
                sourceUrl: ''
            }
        }
    });

    setTimeout(() => {
        conn.reply(m.chat, `Yuk waktunya Maling lagi 👋…`, m);
    }, timeout);
};

handler.help = ['maling'];
handler.tags = ['rpg'];
handler.command = /^(maling)/i;
handler.owner = false;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;

handler.fail = null;
handler.limit = false;
handler.exp = 0;
handler.money = 0;

module.exports = handler;

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + " jam " + minutes + " menit " + seconds + " detik";
}