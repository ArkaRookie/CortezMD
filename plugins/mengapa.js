let handler = async (m, { conn, text, args, command }) => {
  if (!args[0]) throw `[ ! ] *example:* .${command} sc bakal update?`;

  const answers = ['Karena anda ganteng', 'Karna lo wibu :[', 'karna lo didikan wahyu', 'Karna gw gk tau', 'Lo punya jin', 'Tidak mungkin'];
  const answer = pickRandom(answers);

  const replyText = `
*Pertanyaan:* ${command + ' ' + args.join(' ')}
*Jawaban:* ${answer}
`.trim();

  await conn.reply(m.chat, replyText, m, m.mentionedJid ? {
    mentions: conn.parseMention(m.text)
  } : {});
}

handler.help = ['mengapa'].map(v => v + ' <text>');
handler.tags = ['fun'];
handler.command = /^(mengapa)$/i;
handler.limit = true

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}