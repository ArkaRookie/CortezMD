let fetch = require('node-fetch')
let { MessageType } = require('@whiskeysockets/baileys')
let handler = async(m, { conn, args, usedPrefix, command, text }) => {
 
             let timeoute = 1000
             let timeoutem = 60000
             let timeoutu = 600000
             let timeouto = 1000
             let timeouten = 60000
             let timeoutum = 600000
             let timeoutol = 1000
             let timeoutel = 60000
             let timeoutul = 600000
             let timeoutog = 1000
             let timeouteg = 60000
             let timeoutug = 600000
             let timeoutoy = 1000
             let timeoutey = 60000
             let timeoutuy = 600000
             let timeoutst = 1000
             let timeoutstt = 60000
             let timeoutsttt = 600000
             let timeoutww = 1000
             let timeoutwww = 60000
             let timeoutwwww = 600000
             let type = (args[0] || '').toLowerCase()
                 switch (type) {
                     case 'ramuan': 
                                     let apelu = global.db.data.users[m.sender].apel
                                     let angguru = global.db.data.users[m.sender].anggur
                                     let manggau = global.db.data.users[m.sender].mangga
                                     let pisangu = global.db.data.users[m.sender].pisang
                                     let jeruku = global.db.data.users[m.sender].jeruk 
                                     let __waktuga = (new Date - global.db.data.users[m.sender].lastramuanclaim)
                                     let _waktuga = (600000 - __waktuga)
                                     let waktuga = clockString(_waktuga)
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply('*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - global.db.data.users[m.sender].lastramuanclaim > 600000) {
                                 	if (global.db.data.users[m.sender].mangga > 499) {
                                 	if (global.db.data.users[m.sender].apel > 499) {
                                 	if (global.db.data.users[m.sender].pisang > 499) {
                                 	if (global.db.data.users[m.sender].jeruk > 499) {
                                 	if (global.db.data.users[m.sender].anggur > 499) {
                                     let _manggas = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jeruks = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apels = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _ramuans = `${pickRandom(['1','2','3','4','5'])}`.trim()
                                     let ramuans = (_ramuans * 1)
                                     let manggas = (_manggas * 1)
                                     let anggurs = (_anggurs * 1)
                                     let jeruks = (_jeruks * 1)
                                     let apels = (_apels * 1)
                                     let pisangs = (_pisangs * 1)
                                     global.db.data.users[m.sender].mangga -= manggas * 1
                                     global.db.data.users[m.sender].anggur -= anggurs * 1
                                     global.db.data.users[m.sender].jeruk -= jeruks * 1
                                     global.db.data.users[m.sender].apel -= apels * 1
                                     global.db.data.users[m.sender].pisang -= pisangs * 1
                                     global.db.data.users[m.sender].ramuan += ramuans * 1
                                     global.db.data.users[m.sender].lastramuanclaim = new Date * 1
                                     let srcs = `
Berhasil meracik ramuan:
-${apels} Apel
-${manggas} Mangga
-${anggurs} Anggur
-${jeruks} Jeruk
-${pisangs} Pisang

Selamat kamu mendapatkan ramuan: 
+${ramuans}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutu)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcs, m)
                                      }, timeoutem)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk ramuan', m)
                                      }, timeoute)
                                      } else m.reply(`Pastikan anggur kamu *500* untuk bisa meracik ramuan`)
                                   } else m.reply(`Pastikan jeruk kamu *500* untuk bisa meracik ramuan`)
                                } else m.reply(`Pastikan pisang kamu *500* untuk bisa meracik ramuan`)
                             } else m.reply(`Pastikan apel kamu *500* untuk bisa meracik ramuan`)
                          } else m.reply(`Pastikan mangga kamu *500* untuk bisa meracik ramuan`)
                       } else m.reply(`Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktuga} lagi untuk meracik kembali `)
                     break 
                     case 'cupon':
                                     let gemses = global.db.data.users[m.sender].gems 
                                     let __waktutiones = (new Date - global.db.data.users[m.sender].lastgemsclaim)
                                     let _waktutiones = (600000 - __waktutiones)
                                     let waktutiones = clockString(_waktutiones)
                                     if (gemses == 0) return m.reply('*Pastikan kamu memiliki gems*')
                                     if (new Date - global.db.data.users[m.sender].lastgemsclaim > 600000) {
                                     if (global.db.data.users[m.sender].gems > 1000000) {
                                   //  let cupon = `${pickRandom(['1','1','1','1','1','2','1','1','1','1','1','2'])}`.trim()
                                     global.db.data.users[m.sender].gems -= 1000000
                                     global.db.data.users[m.sender].cupon += 1
                                     global.db.data.users[m.sender].lastgemsclaim = new Date * 1
                                     let gmss = `
Berhasil meracik cupon:
-1 Juta gems 

Selamat kamu mendapatkan cupon:
+1 Cupon
`.trim()
                                     conn.reply(m.chat, gmss, m)
                                     } else m.reply('Pastikan kamu memiliki 1 Juta gems untuk bisa meracik cupon')
                                  } else m.reply(`Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktuga} lagi untuk meracik kembali `)
                     break 
                     case 'gems':
                                     let eleksirbh = global.db.data.users[m.sender].eleksirb 
                                     let __waktutioneso = (new Date - global.db.data.users[m.sender].lastgemsclaim)
                                     let _waktutioneso = (600000 - __waktutioneso)
                                     let waktutioneso = clockString(_waktutioneso)
                                     if (eleksirbh == 0) return m.reply('*Pastikan kamu memiliki eleksir biru*')
                                     if (new Date - global.db.data.users[m.sender].lastgemsclaim > 600000) {
                                     if (global.db.data.users[m.sender].eleksirb > 10000) {
                                     let _gemss = `${Math.floor(Math.random() * 500)}`.trim()
                                     let gemss = (_gemss * 1)
                                     global.db.data.users[m.sender].eleksirb -= 10000
                                     global.db.data.users[m.sender].gems += gemss * 1
                                     global.db.data.users[m.sender].lastgemsclaim = new Date * 1
                                     let gamse = `
Berhasil meracik gems:
-10000 Eleksir Biru

Selamat kamu mendapatkan gems:
+${gemss} Gems
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, 600000)
                                     setTimeout(() => {
                                          conn.reply(m.chat, gamse, m)
                                      }, 30000)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk gems', m)
                                      }, 0)
                                      } else m.reply(`Pasti kan kamu memiliki eleksir biru 10000, untuk bisa meracik gems`)
                                   } else m.reply(`Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutioneso} lagi untuk meracik kembali `)
                     break 
                     case 'troops':
                                     let pendudukkes = global.db.data.users[m.sender].penduduk 
                                     let __waktutionkes = (new Date - global.db.data.users[m.sender].lastpotionclaim)
                                     let _waktutionkes = (600000 - __waktutionkes)
                                     let waktutionkes = clockString(_waktutionkes)
                                     if (pendudukkes == 0) return m.reply('*Pastikan kamu memiliki penduduk untuk menjadikan prajurit*')
                                     if (new Date - global.db.data.users[m.sender].lastpotionclaim > 600000) {
                                     if (global.db.data.users[m.sender].penduduk > 9) {
                                     global.db.data.users[m.sender].penduduk -= 10
                                     global.db.data.users[m.sender].archer += 5
                                     global.db.data.users[m.sender].shadow += 5
                                     global.db.data.users[m.sender].lastpotionclaim = new Date * 1 
                                     let cdskes = `
Berhasil menukar pasukan:
-10 Penduduk 
+5 Archer
+5 Shadow
`.trim()
                                     conn.reply(m.chat, cdskes, m)
                                     } else m.reply(`Minimal penduduk kamu 10 untuk menukar sebuah pasukan`)
                                  } else m.reply(`Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktutionkes} lagi untuk meracik kembali `)
                     break 
                     case 'penduduk':
                                     let apeleks = global.db.data.users[m.sender].apel 
                                     let anggureks = global.db.data.users[m.sender].anggur
                                     let manggaeks = global.db.data.users[m.sender].mangga
                                     let pisangeks = global.db.data.users[m.sender].pisang
                                     let jerukeks = global.db.data.users[m.sender].jeruk 
                                     let __waktuteks = (new Date - global.db.data.users[m.sender].lastpotionclaim)
                                     let _waktuteks = (600000 - __waktuteks)
                                     let waktuteks = clockString(_waktuteks)
                                     if (apeleks == 0 || anggureks == 0 || manggaeks == 0 || pisangeks == 0 || jerukeks == 0) return m.reply('*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - global.db.data.users[m.sender].lastpotionclaim > 600000) {
                                     if (global.db.data.users[m.sender].mangga > 499) {
                                 	if (global.db.data.users[m.sender].apel > 499) {
                                 	if (global.db.data.users[m.sender].pisang > 499) {
                                 	if (global.db.data.users[m.sender].jeruk > 499) {
                                 	if (global.db.data.users[m.sender].anggur > 499) {
                                 	let _manggaahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apelahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jerukahs = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pendudukahs = `${Math.floor(Math.random() * 501)}`.trim()
                                     let pendudukahs = (_pendudukahs * 1)
                                     let manggaahs = (_manggaahs * 1)
                                     let apelahs = (_apelahs * 1)
                                     let anggurahs = (_anggurahs * 1)
                                     let pisangahs = (_pisangahs * 1)
                                     let jerukahs = (_jerukahs * 1)
                                     global.db.data.users[m.sender].mangga -= manggaahs * 1
                                     global.db.data.users[m.sender].anggur -= anggurahs * 1
                                     global.db.data.users[m.sender].jeruk -= jerukahs * 1
                                     global.db.data.users[m.sender].apel -= apelahs * 1
                                     global.db.data.users[m.sender].pisang -= pisangahs * 1
                                     global.db.data.users[m.sender].penduduk += pendudukahs * 1
                                     global.db.data.users[m.sender].lastpotionclaim = new Date * 1 
                                     let psnan = `
Berhasil menghabiskan buah buahan:
-${manggaahs} Mangga
-${apelahs} Apel
-${anggurahs} Anggur
-${pisangahs} Pisang
-${jerukahs} Jeruk

Berhasil menambahkan penduduk:
+${pendudukahs} Penduduk
`.trim()
                                     conn.reply(m.chat, psnan, m)
                                      } else m.reply(`Pastikan anggur kamu *500* untuk bisa menambahkan penduduk`)
                                   } else m.reply(`Pastikan jeruk kamu *500* untuk bisa menambahkan penduduk`)
                                } else m.reply(`Pastikan pisang kamu *500* untuk bisa menambahkan penduduk`)
                             } else m.reply(`Pastikan apel kamu *500* untuk bisa menambahkan penduduk`)
                          } else m.reply(`Pastikan mangga kamu *500* untuk bisa menambahkan penduduk`)
                       } else m.reply(`Kamu sudah menambahkan penduduk, tidak bisa menambahkan penduduk kembali..\nMohon tunggu ${waktuteks} lagi untuk menambahkan penduduk kembali `)
                     break
                     case 'potion':
                                     let apele = global.db.data.users[m.sender].apel
                                     let anggure = global.db.data.users[m.sender].anggur
                                     let manggae = global.db.data.users[m.sender].mangga
                                     let pisange = global.db.data.users[m.sender].pisang
                                     let jeruke = global.db.data.users[m.sender].jeruk 
                                     let __waktution = (new Date - global.db.data.users[m.sender].lastpotionclaim)
                                     let _waktution = (600000 - __waktution)
                                     let waktution = clockString(_waktution)
                                     if (apele == 0 || anggure == 0 || manggae == 0 || pisange == 0 || jeruke == 0) return m.reply('*Pastikan kamu memiliki semua buah buahan*\n*Seperti Apel, Mangga, Jeruk, Pisang, Anggur*')
                                     if (new Date - global.db.data.users[m.sender].lastpotionclaim > 600000) {
                                     if (global.db.data.users[m.sender].mangga > 499) {
                                 	if (global.db.data.users[m.sender].apel > 499) {
                                 	if (global.db.data.users[m.sender].pisang > 499) {
                                 	if (global.db.data.users[m.sender].jeruk > 499) {
                                 	if (global.db.data.users[m.sender].anggur > 499) {
                                     let _manggan = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _anggurn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _jerukn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _apeln = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _pisangn = `${Math.floor(Math.random() * 500)}`.trim()
                                     let _potionn = `${pickRandom(['1','2','3','4','5','6','7','8','9','10'])}`.trim()
                                     let potionn = (_potionn * 1)
                                     let manggan = (_manggan * 1)
                                     let anggurn = (_anggurn * 1)
                                     let jerukn = (_jerukn * 1)
                                     let apeln = (_apeln * 1)
                                     let pisangn = (_pisangn * 1)
                                     global.db.data.users[m.sender].mangga -= manggan * 1
                                     global.db.data.users[m.sender].anggur -= anggurn * 1
                                     global.db.data.users[m.sender].jeruk -= jerukn * 1
                                     global.db.data.users[m.sender].apel -= apeln * 1
                                     global.db.data.users[m.sender].pisang -= pisangn * 1
                                     global.db.data.users[m.sender].potion += potionn * 1
                                     global.db.data.users[m.sender].lastpotionclaim = new Date * 1
                                     let srcn = `
Berhasil meracik potion:
-${apeln} Apel
-${manggan} Mangga
-${anggurn} Anggur
-${jerukn} Jeruk
-${pisangn} Pisang

Selamat kamu mendapatkan potion: 
+${potionn}
`.trim()
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Yuk meracik lagi..', m)
                                      }, timeoutum)
                                     setTimeout(() => {
                                          conn.reply(m.chat, srcn, m)
                                      }, timeouten)
                                     setTimeout(() => {
                                          conn.reply(m.chat, 'Mohon tunggu sedang mengaduk potion', m)
                                      }, timeouto)
                                      } else m.reply(`Pastikan anggur kamu *500* untuk bisa meracik potion`)
                                   } else m.reply(`Pastikan jeruk kamu *500* untuk bisa meracik potion`)
                                } else m.reply(`Pastikan pisang kamu *500* untuk bisa meracik potion`)
                             } else m.reply(`Pastikan apel kamu *500* untuk bisa meracik potion`)
                          } else m.reply(`Pastikan mangga kamu *500* untuk bisa meracik potion`)
                       } else m.reply(`Kamu sudah meracik, tidak bisa meracik kembali..\nMohon tunggu ${waktution} lagi untuk meracik kembali `)
                     break
                     case 'string':
                                     let apelg = global.db.data.users[m.sender].apel
                                     let anggurg = global.db.data.users[m.sender].anggur