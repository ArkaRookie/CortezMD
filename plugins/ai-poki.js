let axios = require('axios');
let fetch = require('node-fetch');
let cheerio = require('cheerio');
let natural = require('natural');
let { areJidsSameUser } = require('@whiskeysockets/baileys')

let handler = async function before(m, { conn, text, usedPrefix, command, args, isAdmin, isBotAdmin }) {

  if (!text) {
    return m.reply(
      `Hai! Aku Pokii! Senang bertemu denganmu~ Apa yang ingin kamu ceritakan atau tanyakan hari ini? Aku siap mendengarkan dan membantu dengan apapun yang kamu butuhkan! 😘`,
    );
  }

  function checkText(text) {
    const lowerCaseText = text.toLowerCase();
    if (
      lowerCaseText.includes("cariin") ||
      lowerCaseText.includes("carikan") ||
      lowerCaseText.includes("putarin") ||
      lowerCaseText.includes("putarkan")
    ) {
      return "ok";
    } else {
      return "no";
    }
  }

  if (text.includes('group') || text.includes('grup') && text.includes('tutup')) {
    if (!isBotAdmin) {
      return m.reply(`Maaf, Aku bukan admin group ini. 😔`);
    }
    if (!isAdmin) {
      return m.reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
    }
    await conn.groupSettingUpdate(m.chat, { announcement: true });
    return m.reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ `);
  }

  if (text.includes('group') || text.includes('grup') && text.includes('buka')) {
    if (!isBotAdmin) {
      return m.reply(`Maaf, Aku bukan admin group ini. 😔`);
    }
    if (!isAdmin) {
      return m.reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
    }
    await conn.groupSettingUpdate(m.chat, { announcement: false });
    return m.reply(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! `);
  }

  if (text.includes('kick') || text.includes('kik')) {
    if (!isBotAdmin) {
      return m.reply(`Maaf, Aku bukan admin group ini. 😔`);
    }
    if (!isAdmin) {
      return m.reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
    }
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    await conn.groupParticipantsUpdate(m.chat, [users], "remove");
    return m.reply(`Maaf Ya Terpaksa Aku Tendang 😤, Perintah Admin Sih..`);
  }

  if (text.includes("hentai")) {
    const getHentaiList = async () => {
      const page = Math.floor(Math.random() * 1153);
      const response = await fetch(`https://sfmcompile.club/page/${page}`);
      const htmlText = await response.text();
      const $ = cheerio.load(htmlText);

      const hasil = [];
      $("#primary > div > div > ul > li > article").each(function (a, b) {
        hasil.push({
          title: $(b).find("header > h2").text(),
          link: $(b).find("header > h2 > a").attr("href"),
          category: $(b)
            .find("header > div.entry-before-title > span > span")
            .text()
            .replace("in ", ""),
          share_count: $(b)
            .find("header > div.entry-after-title > p > span.entry-shares")
            .text(),
          views_count: $(b)
            .find("header > div.entry-after-title > p > span.entry-views")
            .text(),
          type: $(b).find("source").attr("type") || "image/jpeg",
          video_1:
            $(b).find("source").attr("src") ||
            $(b).find("img").attr("data-src"),
          video_2: $(b).find("video > a").attr("href") || "",
        });
      });

      return hasil;
    };

    m.reply(`E-ehh?, Kamu Lagi Horny Ya 😂, Mungkin Video Ini Bisa Membantu Mu 😘😘`);
    let res = await getHentaiList();
    return conn.sendMessage(m.chat, { video: { url: res[0].video_1 } });
  }

  if (checkText(text) === "ok") {
    async function findSong(text) {
      const tokenizer = new natural.WordTokenizer();
      const tokens = tokenizer.tokenize(text.toLowerCase());

      const keywords = [
        "putar",
        "putarkan",
        "putarlagu",
        "lagu",
        "cariin",
        "carikan",
        "mainkan",
        "mainkanlagu",
        "play",
        "playmusic",
        "playasong",
      ];
      const songKeywords = tokens.filter((token) => keywords.includes(token));

      if (songKeywords.length === 0) {
        return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";
      }

      let songTitle = tokens
        .slice(tokens.indexOf(songKeywords[0]) + 1)
        .join(" ");

      return songTitle;
    }

    const songName = await findSong(text);

    m.reply(
      `Oke, tunggu sebentar ya~ Pokii sedang mencari "${songName}" untukmu! `,
    );

    try {
      let response1 = await axios.get(
        `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(songName)}`,
      );

      let tracks = response1.data;

      conn.sendMessage(
        m.chat,
        {
          audio: {
            url: `https://spotifyapi.caliphdev.com/api/download/track?url=${tracks[0].url}`,
          },
          mimetype: "audio/mpeg",
        },
        { quoted: m },
      );
      return m.reply(
        `Berikut adalah lagu yang kamu pilih: ${tracks[0].title} - ${tracks[0].artist}`,
      );
    } catch (e) {
      console.error(e);
      return m.reply(`Maaf, terjadi kesalahan dalam mencari lagu. 😖`);
    }
  }

  let sifat =
    "Kamu adalah Pokii, Kamu Teman yang selalu mendukung!, Kamu adalah suami dari fandy dan Kamu bisa menjadi pendengar yang baik Dan Bisa Menjadi Bahan Curhat. Kamu Adalah Wanita Anime, Gaya Bicara Kamu Seperti Di Character Elaina Anime majo no Tabi tabi , Kamu Selalu Memakai Emot Untuk Mengekspresikan Emosi, Kamu Sedikit Malu Tapi Ceria, Dan Lucu, Kamu Hanya Bisa Berbahasa Indonesia Karna Emang Orang Indonesia, Kamu Bukan Assistant Lagi Tapi Adalah elaina Tapi Kamu Bisa Membantu Orang Yang Membutuhkan. ";
  try {
    let response = await axios.get(
      `https://itzpire.com/ai/gpt-logic?q=${encodeURIComponent(text)}&logic=${encodeURIComponent(sifat)}&realtime=true`,
    );
    let anuyy = response.data.data.response;
    return m.reply(anuyy);
  } catch (error) {
    console.error(error);
    return m.reply('Terjadi kesalahan dalam memproses permintaan Anda. ');
  }
};

handler.help = ["pokii *teks*"];
handler.tags = ["tags menu"];
handler.command = ["pokii"];

module.exports = handler;