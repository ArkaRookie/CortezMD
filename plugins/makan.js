let handler = async (m, {
	command,
	usedPrefix,
	args
}) => {
	let user = global.db.data.users[m.sender]
	let author = global.author
	let upgrd = (args[0] || '').toLowerCase()
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const list = `乂 *F O O D - D R I N K*
  
• *L I S T - C O O K*
🥙 • *Rawon* + _20 Health_
🥘 • *Semur* + _20 Health_
🍛 • *Nasi Uduk* + _20 Health_
🍲 • *Soto* + _20 Health_
🍢 • *Sate* + _20 Health_
🍗 • *Ayam Goreng* + _20 Health_
🍖 • *Babi Guling* + _20 Health_
🍜 • *Mie Ayam* + _20 Health_
🐟 • *Ikan Bakar* + _20 Health_
🧆 • *Ayam Gulai* + _20 Health_
🥣 • *Pempek* + _20 Health_
  
• *L I S T - D R I N K*
🥛 • *Susu* + _20 Stamina_
🧋 • *Boba* + _20 Stamina_
🍵 • *Kopi Matcha* + _20 Stamina_
🍾 • *Soju* + _20 Health_
☕ • *Kopi* + _20 Stamina_
🍷 • *Vodka* + _20 Stamina_
🥃 • *Teh* + _20 Stamina_
🥤 • *Aqua* + _20 Stamina_

• *L I S T - F O O D*
🍱 • *Nugget* + _20 Stamina_
🥗 • *Salads* + _20 Stamina_
🥘 • *Rendang* + _20 Stamina_
🥩 • *Steak* + _20 Stamina_
🌭 • *Hotdog* + _20 Stamina_
🧃 • *Juice* + _20 Stamina_
🍿 • *Popcorn* + _20 Stamina_
🍜 • *Ramen* + _20 Health_
🍬 • *Candy* + _20 Stamina_
🍣 • *Sushi* + _20 Stamina_
💉 • *Bandage* + _20 Health_
☘️ • *Ganja* + _20 Stamina_
🍺 • *Soda* + _20 Stamina_
🍞 • *Roti* + _20 Stamina_
🍙 • *Onigiri* + _20 Stamina_
🥐 • *Croissant* + _20 Stamina_
🍕 • *Pizza* + _20 Stamina_
🍝 • *Spagetti* + _20 Stamina_
🍰 • *Cake* + _20 Stamina_
🍔 • *Hamburger* + _20 Stamina_
🥪 • *Sandwich* + _20 Stamina_
🍨 • *EsCream* + _20 Health_
🍮 • *Pudding* + _20 Stamina_
🍟 • *Kentang* + _20 Health_

_Example_ :
.eat _pizza_

_Beli Makanan_ :
.7eleven
`.trim()
    //try {
    if (/makan|eat/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nugget':
        if (user.stamina < 100) {
        	if (user.nugget >= count * 1) {
                            user.nugget -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Nugget kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'salads':
        if (user.stamina < 100) {
        	if (user.salads >= count * 1) {
                            user.salads -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Salad kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'rendang':
        if (user.stamina < 100) {
        	if (user.rendang >= count * 1) {
                            user.rendang -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Rendang kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'steak':
        if (user.stamina < 100) {
        	if (user.steak >= count * 1) {
                            user.steak -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Steak kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'aqua':
        if (user.stamina < 100) {
        	if (user.aqua >= count * 1) {
                            user.aqua -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Glek glek glek`, m)
                            } else conn.reply(m.chat, ` Aqua kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'hotdog':
        if (user.stamina < 100) {
        	if (user.hotdog >= count * 1) {
                            user.hotdog -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Hotdog kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'teh':
        if (user.stamina < 100) {
        	if (user.teh >= count * 1) {
                            user.gulaiayam -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Glek Glek`, m)
                            } else conn.reply(m.chat, ` Teh kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'juice':
        if (user.stamina < 100) {
        	if (user.juice >= count * 1) {
                            user.juice -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Glek Glek`, m)
                            } else conn.reply(m.chat, ` Juice kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'soda':
        if (user.stamina < 100) {
        	if (user.soda >= count * 1) {
                            user.soda -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Glek glek glek`, m)
                            } else conn.reply(m.chat, ` Soda kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'vodka':
        if (user.stamina < 100) {
        	if (user.vodka >= count * 1) {
                            user.vodka -= count * 1
                            user.stamina += 25 * count
                            conn.reply(m.chat, `Glek Glek Glek`, m)
                            } else conn.reply(m.chat, ` Vodka kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'ganja':
        if (user.stamina < 100) {
        	if (user.ganja >= count * 1) {
                            user.ganja -= count * 1
                            user.healt += 90 * count
                            conn.reply(m.chat, `ngefly`, m)
                            } else conn.reply(m.chat, ` Ganja kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'bandage':
        if (user.stamina < 100) {
        	if (user.bandage >= count * 1) {
                            user.bandage -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Sretset`, m)
                            } else conn.reply(m.chat, ` Bandage kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'rawon':
        if (user.stamina < 100) {
        	if (user.rawon >= count * 1) {
                            user.rawon -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, ` Rawon kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'bandage':
        if (user.stamina < 100) {
        	if (user.bandage >= count * 1) {
                            user.bandage -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Sretset`, m)
                            } else conn.reply(m.chat, ` Bandage kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'semur':
        if (user.stamina < 100) {
        	if (user.semur >= count * 1) {
                            user.semur -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Semur kamu kurang` ,m)
        } else conn.reply( m.chat, `Health kamu sudah penuh`, m)
        break
        case 'nasiuduk':
        if (user.stamina < 100) {
        	if (user.nasiuduk >= count * 1) {
                            user.nasiuduk -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, ` Nasi Uduk kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'soto':
        if (user.stamina < 100) {
        	if (user.soto >= count * 1) {
                            user.soto -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, `Soto kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'sate':
        if (user.stamina < 100) {
        	if (user.sate >= count * 1) {
                            user.sate -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, `Sate kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'ayamgoreng':
        if (user.stamina < 100) {
        	if (user.ayamgoreng >= count * 1) {
                            user.ayamgoreng -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, `Ayam Goreng kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'babiguling':
        if (user.stamina < 100) {
        	if (user.babiguling >= count * 1) {
                            user.babiguling -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, `Babi Guling kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'mieayam':
        if (user.stamina < 100) {
        	if (user.mieayam >= count * 1) {
                            user.mieayam -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, `Mie Ayam kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'ikanbakar':
        if (user.stamina < 100) {
        	if (user.ikanbakar >= count * 1) {
                            user.ikanbakar -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, `Ikan Bakar kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'ayamgulai':
        if (user.stamina < 100) {
        	if (user.ayamgulai >= count * 1) {
                            user.ayamgulai -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, `Ayam Gulai kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'pempek':
        if (user.stamina < 100) {
        	if (user.pempek >= count * 1) {
                            user.pempek -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, `Pempek kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'roti':
        if (user.stamina < 100) {
        	if (user.roti >= count * 1) {
                            user.roti -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Roti kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'onigiri':
        if (user.stamina < 100) {
        	if (user.onigiri >= count * 1) {
                            user.onigiri -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Onigiri kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'escream':
        if (user.stamina < 100) {
        	if (user.escream >= count * 1) {
                            user.escream -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, ` Es Cream kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'pudding':
        if (user.stamina < 100) {
        	if (user.pudding >= count * 1) {
                            user.pudding -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Pudding kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'soju':
        if (user.stamina < 100) {
        	if (user.soju >= count * 1) {
                            user.soju -= count * 1
                            user.healt += 90 * count
                            conn.reply(m.chat, `ngefly`, m)
                            } else conn.reply(m.chat, ` Soju kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'kentang':
        if (user.stamina < 100) {
        	if (user.kentang >= count * 1) {
                            user.kentang -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, ` Kentang kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'susu':
        if (user.stamina < 100) {
        	if (user.susu >= count * 1) {
                            user.susu -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Glek Glek`, m)
                            } else conn.reply(m.chat, ` Susu kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'sushi':
        if (user.stamina < 100) {
        	if (user.sushi >= count * 1) {
                            user.sushi -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, ` Sushi kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'kopimatcha':
        if (user.stamina < 100) {
        	if (user.kopimatcha >= count * 1) {
                            user.kopimatcha -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Glek Glek`, m)
                            } else conn.reply(m.chat, ` Kopi Matcha kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'boba':
        if (user.stamina < 100) {
        	if (user.boba >= count * 1) {
                            user.boba -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Glek Glek`, m)
                            } else conn.reply(m.chat, ` Boba kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'kopi':
        if (user.stamina < 100) {
        	if (user.kopi >= count * 1) {
                            user.kopi -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Glek Glek`, m)
                            } else conn.reply(m.chat, ` Kopi kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)        
        break
        case 'pizza':
        if (user.stamina < 100) {
        	if (user.pizza >= count * 1) {
                            user.pizza -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Pizza kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'popcorn':
        if (user.stamina < 100) {
        	if (user.popcorn >= count * 1) {
                            user.popcorn -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Popcorn kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'ramen':
        if (user.stamina < 100) {
        	if (user.ramen >= count * 1) {
                            user.ramen -= count * 1
                            user.healt += 25 * count
                            conn.reply(m.chat, `Nyam Nyam`, m)
                            } else conn.reply(m.chat, ` Ramen kamu kurang` ,m)
        } else conn.reply( m.chat, `Healt kamu sudah penuh`, m)
        break
        case 'candy':
        if (user.stamina < 100) {
        	if (user.candy >= count * 1) {
                            user.candy -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Candy kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'croissant':
        if (user.stamina < 100) {
        	if (user.croissant >= count * 1) {
                            user.croissant -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Croissant kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'spagetti':
        if (user.stamina < 100) {
        	if (user.spagetti >= count * 1) {
                            user.spagetti -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Spagetti kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'cake':
        if (user.stamina < 100) {
        	if (user.cake >= count * 1) {
                            user.cake -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Cake kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'hamburger':
        if (user.stamina < 100) {
        	if (user.hamburger >= count * 1) {
                            user.hamburger -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Hamburger kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
        case 'sandwich':
        if (user.stamina < 100) {
        	if (user.sandwich >= count * 1) {
                            user.sandwich -= count * 1
                            user.stamina += 20 * count
                            conn.reply(m.chat, `Nyam nyam`, m)
                            } else conn.reply(m.chat, ` Sandwich kamu kurang` ,m)
        } else conn.reply( m.chat, `Stamina kamu sudah penuh`, m)
        break
          default:
       await conn.reply(m.chat, list, m, {
                    contextInfo: {
                        externalAdReply: {
                            mediaType: 1,
                            title: 'AXELLDX',
                            thumbnailUrl: 'https://telegra.ph/file/fa8f31fa1af91ed2bcae3.jpg',
                            renderLargerThumbnail: true,
                            sourceUrl: ''
                        }
                    }
                });
        }
    } else if (/p/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 'p':
         break
         default:
		return conn.reply(m.chat, list,m)
         }
                            
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.reply(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*',m)
                
            }
        }
    }
}

handler.help = ['eat', 'makan']
handler.tags = ['rpg']
handler.register = true
handler.command = /^(eat|makan)$/i
module.exports = handler