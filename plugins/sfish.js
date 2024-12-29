const Bhiu = 1500
const Shiu = 10
const Bikan = 500
const Sikan = 10
const Bdory = 800
const Sdory = 10
const Borca = 1500
const Sorca = 10
const Bpaus = 2000
const Spaus = 10
const Bcumi = 1400
const Scumi = 10
const Bgurita = 1600
const Sgurita = 10
const Bbuntal = 700
const Sbuntal = 10
const Budang = 500
const Sudang = 10
const Blumba = 1500
const Slumba = 10
const Blobster = 800
const Slobster = 10
const Bkepiting = 700
const Skepiting = 10
let handler = async (m, {
    conn,
    command,
    args,
    usedPrefix,
    DevMode
}) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kaine = `乂 *F I S H - S H O P*

• *B U Y*
*[ 🦈 ]* - *Hiu* • Price _${Bhiu}_
*[ 🐟 ]* - *Ikan* • Price _${Bikan}_
*[ 🐠 ]* - *Dory* • Price _${Bdory}_
*[ 🐳 ]* - *Orca* • Price _${Borca}_
*[ 🐋 ]* - *Paus* • Price _${Bpaus}_
*[ 🦑 ]* - *Cumi* • Price _${Bcumi}_
*[ 🐙 ]* - *Gurita* • Price _${Bgurita}_
*[ 🐡 ]* - *Buntal* • Price _${Bbuntal}_
*[ 🦐 ]* - *Udang* • Price _${Budang}_
*[ 🐬 ]* - *Lumba* • Price _${Blumba}_
*[ 🦞 ]* - *Lobster* • Price _${Blobster}_
*[ 🦀 ]* - *Kepiting* • Price _${Bkepiting}_


• *S E L L*
*[ 🦈 ]* - *Hiu* • Price _${Shiu}_
*[ 🐟 ]* - *Ikan* • Price _${Sikan}_
*[ 🐠 ]* - *Dory* • Price _${Sdory}_
*[ 🐳 ]* - *Orca* • Price _${Sorca}_
*[ 🐋 ]* - *Paus* • Price _${Spaus}_
*[ 🦑 ]* - *Cumi* • Price _${Scumi}_
*[ 🐙 ]* - *Gurita* • Price _${Sgurita}_
*[ 🐡 ]* - *Buntal* • Price _${Sbuntal}_
*[ 🦐 ]* - *Udang* • Price _${Sudang}_
*[ 🐬 ]* - *Lumba* • Price _${Slumba}_
*[ 🦞 ]* - *Lobster* • Price _${Slobster}_
*[ 🦀 ]* - *Kepiting* • Price _${Skepiting}_

_Example_ :
.buy _hiu_
.sell _hiu_
`.trim()

    try {
        if (/shopfish/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 : Math.min(1, count)
            switch (jualbeli) {
                case 'buy':
                    switch (_type) {
                        case 'hiu':
                            if (global.db.data.users[m.sender].money >= Bhiu * count) {
                                global.db.data.users[m.sender].hiu += count * 1
                                global.db.data.users[m.sender].money -= Bhiu * count
                                conn.reply(m.chat, `Succes membeli ${count} Hiu dengan harga ${Bhiu * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Hiu dengan harga ${Bhiu * count} money`.trim(), m)

                            break
                        case 'ikan':
                            if (global.db.data.users[m.sender].money >= Bikan * count) {
                                global.db.data.users[m.sender].ikan += count * 1
                                global.db.data.users[m.sender].money -= Bikan * count
                                conn.reply(m.chat, `Succes membeli ${count} Ikan dengan harga ${Bikan * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} ikan dengan harga ${Bikan * count} money`.trim(), m)

                            break
                        case 'dory':
                            if (global.db.data.users[m.sender].money >= Bdory * count) {
                                global.db.data.users[m.sender].dory += count * 1
                                global.db.data.users[m.sender].money -= Bdory * count
                                conn.reply(m.chat, `Succes membeli ${count} Dory dengan harga ${Bdory * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Dory dengan harga ${Bdory * count} money`.trim(), m)

                            break
                        case 'orca':
                            if (global.db.data.users[m.sender].money >= Borca * count) {
                                global.db.data.users[m.sender].orca += count * 1
                                global.db.data.users[m.sender].money -= Borca * count
                                conn.reply(m.chat, `Succes membeli ${count} Orca dengan harga ${Borca * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} orca dengan harga ${Borca * count} money`.trim(), m)

                            break
                        case 'paus':
                            if (global.db.data.users[m.sender].money >= Bpaus * count) {
                                global.db.data.users[m.sender].paus += count * 1
                                global.db.data.users[m.sender].money -= Bpaus * count
                                conn.reply(m.chat, `Succes membeli ${count} Paus dengan harga ${Bpaus * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Paus dengan harga ${Bpaus * count} money`.trim(), m)

                            break
                        case 'cumi':
                            if (global.db.data.users[m.sender].money >= Bcumi * count) {
                                global.db.data.users[m.sender].cumi += count * 1
                                global.db.data.users[m.sender].money -= Bcumi * count
                                conn.reply(m.chat, `Succes membeli ${count} Cumi dengan harga ${Bcumi * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Cumi dengan harga ${Bcumi * count} money`.trim(), m)

                            break
                        case 'gurita':
                            if (global.db.data.users[m.sender].money >= Bgurita * count) {
                                global.db.data.users[m.sender].gurita += count * 1
                                global.db.data.users[m.sender].money -= Bgurita * count
                                conn.reply(m.chat, `Succes membeli ${count} Gurita dengan harga ${Bgurita * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Gurita dengan harga ${Bgurita * count} money`.trim(), m)

                            break
                        case 'buntal':
                            if (global.db.data.users[m.sender].money >= Bbuntal * count) {
                                global.db.data.users[m.sender].buntal += count * 1
                                global.db.data.users[m.sender].money -= Bbuntal * count
                                conn.reply(m.chat, `Succes membeli ${count} Buntal dengan harga ${Bbuntal * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Buntal dengan harga ${Bbuntal * count} money`.trim(), m)

                            break
                        case 'udang':
                            if (global.db.data.users[m.sender].money >= Budang * count) {
                                global.db.data.users[m.sender].udang += count * 1
                                global.db.data.users[m.sender].money -= Budang * count
                                conn.reply(m.chat, `Succes membeli ${count} Udang dengan harga ${Budang * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Udang dengan harga ${Budang * count} money`.trim(), m)

                            break
                        case 'lumba':
                            if (global.db.data.users[m.sender].money >= Blumba * count) {
                                global.db.data.users[m.sender].lumba += count * 1
                                global.db.data.users[m.sender].money -= Blumba * count
                                conn.reply(m.chat, `Succes membeli ${count} Lumba² dengan harga ${Blumba * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Lumba² dengan harga ${Blumba * count} money`.trim(), m)

                            break
                        case 'lobster':
                            if (global.db.data.users[m.sender].money >= Blobster * count) {
                                global.db.data.users[m.sender].lobster += count * 1
                                global.db.data.users[m.sender].money -= Blobster * count
                                conn.reply(m.chat, `Succes membeli ${count} Lobster dengan harga ${Blobster * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Lobster dengan harga ${Blobster * count} money`.trim(), m)

                            break
                        case 'kepiting':
                            if (global.db.data.users[m.sender].money >= Bkepiting * count) {
                                global.db.data.users[m.sender].kepiting += count * 1
                                global.db.data.users[m.sender].money -= Bkepiting * count
                                conn.reply(m.chat, `Succes membeli ${count} Kepiting dengan harga ${Bkepiting * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kepiting dengan harga ${Bkepiting * count} money`.trim(), m)

                            break
                        default:
                            return conn.reply(m.chat, Kaine, m)
                    }
                    break
                case 'sell':
                    switch (_type) {
                        case 'hiu':
                            if (global.db.data.users[m.sender].hiu >= count * 1) {
                                global.db.data.users[m.sender].hiu -= count * 1
                                global.db.data.users[m.sender].money += Shiu * count
                                conn.reply(m.chat, `Succes menjual ${count} hiu, dan anda mendapatkan ${Shiu * count} money`, m)
                            } else conn.reply(m.chat, `Hiu anda tidak cukup`, m)
                            break
                        case 'ikan':
                            if (global.db.data.users[m.sender].ikan >= count * 1) {
                                global.db.data.users[m.sender].ikan -= count * 1
                                global.db.data.users[m.sender].money += Sikan * count
                                conn.reply(m.chat, `Succes menjual ${count} ikan, dan anda mendapatkan ${Sikan * count} money`, m)
                            } else conn.reply(m.chat, `Ikan anda tidak cukup`, m)
                            break
                        case 'dory':
                            if (global.db.data.users[m.sender].dory >= count * 1) {
                                global.db.data.users[m.sender].dory -= count * 1
                                global.db.data.users[m.sender].money += Sdory * count
                                conn.reply(m.chat, `Succes menjual ${count} dory, dan anda mendapatkan ${Sdory * count} money`, m)
                            } else conn.reply(m.chat, `Dory anda tidak cukup`, m)
                            break
                        case 'orca':
                            if (global.db.data.users[m.sender].orca >= count * 1) {
                                global.db.data.users[m.sender].orca -= count * 1
                                global.db.data.users[m.sender].money += Sorca * count
                                conn.reply(m.chat, `Succes menjual ${count} orca, dan anda mendapatkan ${Sorca * count} money`, m)
                            } else conn.reply(m.chat, `Orca anda tidak cukup`, m)
                            break
                        case 'paus':
                            if (global.db.data.users[m.sender].paus >= count * 1) {
                                global.db.data.users[m.sender].paus -= count * 1
                                global.db.data.users[m.sender].money += Spaus * count
                                conn.reply(m.chat, `Succes menjual ${count} paus, dan anda mendapatkan ${Spaus * count} money`, m)
                            } else conn.reply(m.chat, `Paus anda tidak cukup`, m)
                            break
                        case 'cumi':
                            if (global.db.data.users[m.sender].cumi >= count * 1) {
                                global.db.data.users[m.sender].cumi -= count * 1
                                global.db.data.users[m.sender].money += Scumi * count
                                conn.reply(m.chat, `Succes menjual ${count} Cumi, dan anda mendapatkan ${Scumi * count} money`, m)
                            } else conn.reply(m.chat, `Cumi anda tidak cukup`, m)
                            break
                        case 'gurita':
                            if (global.db.data.users[m.sender].gurita >= count * 1) {
                                global.db.data.users[m.sender].gurita -= count * 1
                                global.db.data.users[m.sender].money += Sgurita * count
                                conn.reply(m.chat, `Succes menjual ${count} Gurita, dan anda mendapatkan ${Sgurita * count} money`, m)
                            } else conn.reply(m.chat, `Hiu anda tidak cukup`, m)
                            break
                        case 'buntal':
                            if (global.db.data.users[m.sender].buntal >= count * 1) {
                                global.db.data.users[m.sender].buntal -= count * 1
                                global.db.data.users[m.sender].money += Sbuntal * count
                                conn.reply(m.chat, `Succes menjual ${count} Buntal, dan anda mendapatkan ${Sbuntal * count} money`, m)
                            } else conn.reply(m.chat, `Buntal anda tidak cukup`, m)
                            break
                        case 'udang':
                            if (global.db.data.users[m.sender].udang >= count * 1) {
                                global.db.data.users[m.sender].udang -= count * 1
                                global.db.data.users[m.sender].money += Sudang * count
                                conn.reply(m.chat, `Succes menjual ${count} Udang, dan anda mendapatkan ${Sudang * count} money`, m)
                            } else conn.reply(m.chat, `Udang anda tidak cukup`, m)
                            break
                        case 'lumba':
                            if (global.db.data.users[m.sender].lumba >= count * 1) {
                                global.db.data.users[m.sender].lumba -= count * 1
                                global.db.data.users[m.sender].money += Slumba * count
                                conn.reply(m.chat, `Succes menjual ${count} Lumba², dan anda mendapatkan ${Slumba * count} money`, m)
                            } else conn.reply(m.chat, `Lumba² anda tidak cukup`, m)
                            break
                        case 'lobster':
                            if (global.db.data.users[m.sender].lobster >= count * 1) {
                                global.db.data.users[m.sender].lobster -= count * 1
                                global.db.data.users[m.sender].money += Slobster * count
                                conn.reply(m.chat, `Succes menjual ${count} Lobster, dan anda mendapatkan ${Slobster * count} money`, m)
                            } else conn.reply(m.chat, `Lobster anda tidak cukup`, m)
                            break
                        case 'kepiting':
                            if (global.db.data.users[m.sender].kepiting >= count * 1) {
                                global.db.data.users[m.sender].kepiting -= count * 1
                                global.db.data.users[m.sender].money += Skepiting * count
                                conn.reply(m.chat, `Succes menjual ${count} Kepiting, dan anda mendapatkan ${Skepiting * count} money`, m)
                            } else conn.reply(m.chat, `Kepiting anda tidak cukup`, m)
                            break
                        default:
                            return conn.reply(m.chat, Kaine, m, {
                        contextInfo: {
                            externalAdReply: {
                                mediaType: 1,
                                title: 'AXELLDX',
                                thumbnailUrl: 'https://telegra.ph/file/2b05b57a9f304a1ade5ee.jpg',
                                renderLargerThumbnail: true,
                                sourceUrl: ''
                            }
                        }
                    });
                    }
                    break
                default:
                    return await conn.reply(m.chat, Kaine, m, {
                        contextInfo: {
                            externalAdReply: {
                                mediaType: 1,
                                title: 'AXELLDX',
                                thumbnailUrl: 'https://telegra.ph/file/2b05b57a9f304a1ade5ee.jpg',
                                renderLargerThumbnail: true,
                                sourceUrl: ''
                            }
                        }
                    });
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kaine, m)
        console.log(e)
    }
}

handler.help = ['shopfish <sell|buy> <args>']
handler.tags = ['rpg']

handler.command = /^(shopfish)$/i
handler.limit = true
handler.group = true
module.exports = handler