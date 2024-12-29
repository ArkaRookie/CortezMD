let {
    jadwalsholat
} = require('@bochilteam/scraper')

let handler = async (m, {
    text,
    usedPrefix,
    command
}) => {
    if (!text) throw `[ ! ] *example:* .jadwalsholat Padang`
    var ayat = text.split('|')

    if (ayat[0] && ayat[1]) {
        try {
            let resu = await jadwalsholat(ayat[0])
            m.reply(wait)
            m.reply(`
Jadwal Sholat

${Object.entries(resu.list[--ayat[1]]).map(([name, data]) => `Sholat *${name}* : ${data}`).join('\n').trim()}
`.trim())
            } catch (error) {
    console.error(error);
    m.reply(`Failed to progresing. Please try again later: ${error}`);
  }
    } else {
        try {
            let res = await jadwalsholat(text)
            conn.sendMessage(m.chat, {
		react: {
			text: '🕑',
			key: m.key,
		}
	})
            m.reply(`
Jadwal Sholat

${Object.entries(res.today).map(([name, data]) => `Sholat *${name}* : ${data}`).join('\n').trim()}
`.trim())
            } catch (error) {
    console.error(error);
    m.reply(`Failed to progresing. Please try again later: ${error}`);
  }
    }

}
handler.help = ['jadwalsholat <daerah>']
handler.tags = ['islami']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler