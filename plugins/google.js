var googleIt = require('google-it');

var handler = async (m, { conn, command, args }) => {
    var full = /f$/i.test(command);
    var text = args.join(' ');
    if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk dicari 🚫', m);
    var url = 'https://google.com/search?q=' + encodeURIComponent(text);
    var search = await googleIt({ query: text });
    var msg = search.map(({ title, link, snippet }) => {
        return `*${title}*\n_${link}_\n_${snippet}_`;
    }).join('\n\n');
    let ss = 'https://telegra.ph/file/dbe24f7b11d48d7e7790e.jpg';
    conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m);
};

handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>');
handler.tags = ['internet'];
handler.command = /^(google(f)?)$/i;
handler.limit = true;
module.exports = handler;