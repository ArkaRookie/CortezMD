let buatall = 1;
let { MessageType } = require('@whiskeysockets/baileys');

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.casino = conn.casino ? conn.casino : {};
    if (m.chat in conn.casino) return conn.reply(m.chat, '🚩 Masih ada yang melakukan casino disini, tunggu sampai selesai!!', m);
    else conn.casino[m.chat] = true;
    
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim();
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim(); // Hehe Biar Susah Menang :v
        let Aku = (randomaku * 1);
        let Kamu = (randomkamu * 1);
        let count = args[0];
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
        count = Math.max(1, count);
        if (args.length < 1) return conn.reply(m.chat, '• *Example :* .casino 1000', m);

        // E-wallets setup
        let ewalletType = args[1] ? args[1].toLowerCase() : null;
        if (!['dana', 'gopay', 'ovo'].includes(ewalletType)) {
            return conn.reply(m.chat, '🚩 Silakan tentukan e-wallet yang valid (dana/gopay/ovo)', m);
        }
        
        // Ensure e-wallet balances are initialized
        let user = global.db.data.users[m.sender];
        if (user.dana === undefined) user.dana = 0;
        if (user.gopay === undefined) user.gopay = 0;
        if (user.ovo === undefined) user.ovo = 0;

        let balance = user[ewalletType];
        if (balance < count * 1) {
            return conn.reply(m.chat, `🚩 Saldo ${ewalletType.toUpperCase()} kamu tidak mencukupi untuk Casino silahkan isi saldo terlebih dahulu!`, m);
        }

        user[ewalletType] -= count * 1;

        // Increment spin count and set timestamp if not exists
        if (!user.casinospins) user.casinospins = 0;
        if (!user.lastcasinospin) user.lastcasinospin = new Date().getTime();
        let now = new Date().getTime();

        // Reset spins count if it's a new week
        let oneWeek = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
        if (now - user.lastcasinospin > oneWeek) {
            user.casinospins = 0;
        }
        user.casinospins += 1;
        user.lastcasinospin = now;

        // Check for the achievement
        if (user.casinospins >= 100 && !user.raretitle.includes("Dewa Casino")) {
            if (!user.raretitle) user.raretitle = []; // Initialize raretitle if not exists
            user.raretitle.push("Dewa Casino");
            conn.reply(m.chat, `🎉 Selamat! 🎉\n\nKamu telah dinobatkan sebagai *Dewa Casino* karena menyelesaikan 100× spin dalam 1 minggu! 🏆`, m);
        }

        if (Aku > Kamu) {
            conn.sendMessage(m.chat, {
                text: `*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nKamu kehilangan ${count} saldo ${ewalletType.toUpperCase()}`,
                contextInfo: {
                    externalAdReply: {
                        title: "C a s i n o",
                        thumbnailUrl: 'https://telegra.ph/file/3937f327955ad7b1871ce.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            });
        } else if (Aku < Kamu) {
            user[ewalletType] += count * 2;
            conn.sendMessage(m.chat, {
                text: `*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nKamu mendapatkan ${count * 2} saldo ${ewalletType.toUpperCase()}`,
                contextInfo: {
                    externalAdReply: {
                        title: "C a s i n o",
                        thumbnailUrl: 'https://telegra.ph/file/3937f327955ad7b1871ce.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            });
        } else {
            user[ewalletType] += count * 1;
            conn.sendMessage(m.chat, {
                text: `*Kamu:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*SERI*\nKamu mendapatkan ${count * 1} saldo ${ewalletType.toUpperCase()}`,
                contextInfo: {
                    externalAdReply: {
                        title: "C a s i n o",
                        thumbnailUrl: 'https://telegra.ph/file/3937f327955ad7b1871ce.jpg',
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            });
        }
    } catch (e) {
        console.log(e);
        m.reply('Error!!');
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text);
            }
        }
    } finally {
        delete conn.casino[m.chat];
    }
}

handler.help = ['casino'];
handler.tags = ['game'];
handler.command = /^(casino)$/i;

handler.fail = null;

handler.limit = 1;

module.exports = handler;

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}