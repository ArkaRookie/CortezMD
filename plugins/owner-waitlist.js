const Veliue = require("../lib/queque.js");

let handler = async (m, { usedPrefix, text, isROwner, command }) => {
  if (!isROwner) return;
  const list = Veliue.list;
  if (!list || typeof list !== 'object') {
    m.reply("No waiting commands");
    return;
  }
  const keys = Object.keys(list);
  if (!keys.length) {
    m.reply("No waiting commands");
    return;
  }
  let message = "";
  for (const key of keys) {
    message += `*${key}*\n`;
    for (const plugin of list[key]) {
      const command = Array.isArray(plugin.command) ? plugin.command[0] : plugin.command;
      message += `↳ ${command}\n`;
    }
  }
  m.reply(message.trim());
};

handler.command = ["waitlist"];
handler.tags = ["owner"];
handler.help = ["waitlist"];

module.exports = handler;