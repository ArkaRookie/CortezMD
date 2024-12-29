let fetch = require("node-fetch")
let {
    FormData
} = require('formdata-node')

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {
    try {
        let text
        if (args.length >= 1) {
            text = args.slice(0).join(" ")
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text
        } else return m.reply("• *Example :* .boredprompt Girl, White hair")
        await m.reply(wait)
        let result = await PromptMaker(text)
        if (!result) {
            throw 'Failed.';
        }
        let list = result.output.map((chat, index) => {
            return `*[ ${index + 1} ]*\n*Title:* ${chat.title || ''}\n*Prompt:* ${chat.prompt || ''}`;
        }).join('\n\n');
        await m.reply(`📺 Prompt List:\n\n${list}`);
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
handler.help = ["boredprompt *<text>*"]
handler.tags = ["tools"];
handler.command = /^(boredprompt)$/i;
handler.limit = true;
module.exports = handler

async function PromptMaker(prompt) {
    try {
        let form = new FormData();
        form.append('prompt', encodeURIComponent(prompt));
        const response = await fetch("https://boredhumans.com/prompts_api.php", {
            method: 'POST',
            body: form,
        });
        if (!response.ok) {
            throw new Error("Request failed with status code " + response.status);
        }
        const base64Data = await response.text();
        return JSON.parse(base64Data);
    } catch (error) {
        return null;
    }
}