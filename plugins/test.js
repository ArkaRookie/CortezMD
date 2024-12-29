const baileys = require("@whiskeysockets/baileys")
const { proto } = baileys

const getUrl = (size, bg, fc, text) => `https://dummyimage.com/${size}/${bg}/${fc}/?text=${encodeURIComponent(text)}`
async function createImage(size, bg, fc, text) {
  const url = getUrl(size, bg, fc, text)
  const { imageMessage } = await baileys.generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: conn.waUploadToServer
  })
  return imageMessage
}
const random = (x) => x[Math.floor(Math.random() * x.length)]

// [[size, bg, fc, text]]
const _images = [
  [
    "512x512",
    "000000",
    "ffffff",
    "This image is 512x512!"
  ],
  [
    "1024x1024",
    "000000",
    "ffffff",
    "This image is 1024x1024!"
  ],
  [
    "1024x512",
    "000000",
    "ffffff",
    "This image is 1024x512!"
  ],
  [
    "512x1024",
    "000000",
    "ffffff",
    "This image is 512x1024!"
  ],
  [
    "1024x768",
    "000000",
    "ffffff",
    "This image is 1024x768!"
  ]
]

const msg = baileys.generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: "test"
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: "test"
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: "test",
          subtitle: "test",
          hasMediaAttachment: false
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `[body] ${_images[0][3]}`
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `[footer] ${_images[0][3]}`
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `[header] ${_images[0][3]}`,
                //subtitle: "only visible if someone replies to this message",
                hasMediaAttachment: true,
                imageMessage: await createImage(_images[0][0], _images[0][1], _images[0][2], _images[0][3])
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
                  },
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"url","url":"${getUrl(..._images[0])}","merchant_url":"${getUrl(..._images[0])}"}`
                  },
                  {
                    name: "cta_copy",
                    buttonParamsJson: `{"display_text":"copy","id":"123456789","copy_code":"${getUrl(..._images[0])}"}`
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `[body] ${_images[1][3]}`
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `[footer] ${_images[1][3]}`
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `[header] ${_images[1][3]}`,
                //subtitle: "only visible if someone replies to this message",
                hasMediaAttachment: true,
                imageMessage: await createImage(_images[1][0], _images[1][1], _images[1][2], _images[1][3])
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
                  },
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"url","url":"${getUrl(..._images[1])}","merchant_url":"${getUrl(..._images[1])}"}`
                  },
                  {
                    name: "cta_copy",
                    buttonParamsJson: `{"display_text":"copy","id":"123456789","copy_code":"${getUrl(..._images[1])}"}`
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `[body] ${_images[2][3]}`
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `[footer] ${_images[2][3]}`
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `[header] ${_images[2][3]}`,
                //subtitle: "only visible if someone replies to this message",
                hasMediaAttachment: true,
                imageMessage: await createImage(_images[2][0], _images[2][1], _images[2][2], _images[2][3])
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "quick_reply",
                    buttonParamsJson: "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
                  },
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"url","url":"${getUrl(..._images[2])}","merchant_url":"${getUrl(..._images[2])}"}`
                  },
                  {
                    name: "cta_copy",
                    buttonParamsJson: `{"display_text":"copy","id":"123456789","copy_code":"${getUrl(..._images[2])}"}`
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `[body] ${_images[3][3]}`
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `[footer] ${_images[3][3]}`
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `[header] ${_images[3][3]}`,
                //subtitle: "only visible if someone replies to this message",
                hasMediaAttachment: true,
                imageMessage: await createImage(_images[3][0], _images[3][1], _images[3][2], _images[3][3])
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "penis",
                    buttonParamsJson: "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
                  },
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"url","url":"${getUrl(..._images[3])}","merchant_url":"${getUrl(..._images[3])}"}`
                  },
                  {
                    name: "penis",
                    buttonParamsJson: `{"display_text":"copy","id":"123456789","copy_code":"${getUrl(..._images[3])}"}`
                  }
                ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `[body] ${_images[4][3]}`
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
                text: `[footer] ${_images[4][3]}`
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `[header] ${_images[4][3]}`,
                //subtitle: "only visible if someone replies to this message",
                hasMediaAttachment: true,
                imageMessage: await createImage(_images[4][0], _images[4][1], _images[4][2], _images[4][3])
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "penis",
                    buttonParamsJson: "{\"display_text\":\"quick_reply\",\"id\":\"message\"}"
                  },
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"url","url":"${getUrl(..._images[4])}","merchant_url":"${getUrl(..._images[4])}"}`
                  },
                  {
                    name: "cta_copy",
                    buttonParamsJson: `{"display_text":"copy","id":"123456789","copy_code":"${getUrl(..._images[4])}"}`
                  }
                ]
              })
            }
          ]
        })
      })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
});
}

handler.help = ['test']
handler.tags = ['main']
handler.command = /^(test)$/i
module.exports = handler