const didyoumean = require('didyoumean');
const similarity = require('similarity');

let handler = (m) => m;

handler.before = function (m, { match, usedPrefix }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '').trim();
    let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
    let mean = didyoumean(noPrefix, alias);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = `• Cmd yang mungkin anda kenal\n\n◦ CMD: ➠ *${usedPrefix + mean}*\n◦ Kemiripan: ➠ *${similarityPercentage}%*`;

      this.reply(m.chat, response, m, {
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: 'CMD yang mungkin tersesat',
            thumbnailUrl: 'https://telegra.ph/file/600d3c4ee27578852e29a.jpg',
            sourceUrl: 'https://github.com/VynaaValerie',
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      });
    }
  }
};

module.exports = handler;