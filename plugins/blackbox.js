let axios = require('axios');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Use ${usedPrefix + command} hi`;
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }});
  
  try {
    let res = await blackbox(text);
    await m.reply(res);
  } catch (e) {
    console.log(e);
    await m.reply(e.toString());
  }
}

handler.help = ['blackbox'];
handler.tags = ['ai'];
handler.command = /^(blackbox)$/i;
module.exports = handler;

async function blackbox(text) {
  try {
    let id = text.split("@")[0];
    let json = {
      messages: [{ id: id, content: text, role: "user" }],
      id: id,
      previewToken: null,
      userId: "4d112c20-3201-46a5-afc6-6b308d98a450",
      codeModelMode: true,
      agentMode: {},
      trendingAgentMode: {},
      isMicMode: false,
      isChromeExt: false,
      githubToken: null,
    };

    let { data } = await axios.post("https://www.blackbox.ai/api/chat", json);
    
    // Cleaning the data
    let cleanedData = data.replace(/[^a-zA-Z0-9().\s]/g, "");
    cleanedData = cleanedData.replace(/^.*?(\b\w+\b|\b\d+\b)\s*/, "");
    cleanedData = cleanedData.replace(/(\s\s+).*(\s\s+)$/g, "");
    
    return cleanedData;
  } catch (e) {
    return e.toString();
  }
}