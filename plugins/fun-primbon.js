let { Primbon } = require('scrape-primbon')
const primbon = new Primbon()

let handler = async (m, { conn, args, text, usedPrefix, command}) => {
switch (command) { 

case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) return m.reply(`Contoh : ${usedPrefix + command} 6288292024190`)
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'suamiistri': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artinama': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} Dika Ardianta`)
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} Dika, 7, 7, 2005`)
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} Dika|Novia`)
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let imageBuffer = await (await fetch(anu.message.gambar)).buffer()
conn.sendMessage(m.chat, { image: imageBuffer, caption: `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}` }, { quoted: m })
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 6, 12, 2024`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *Karakteristik :* ${anu.message.karakteristik}`)
}
break
case 'sifatusaha': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`)
}
break
case 'rejeki': case 'rezeki': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}`)
}
break
case 'pekerjaan': case 'kerja': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}`)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Hoki :* ${anu.message.hoki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'artitarot': case 'tarot': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Kartu Tarot :* ${anu.message.kode_kartu}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'fengshui': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} Dika, 1, 2005\n\nNote : nama, tahun lahir cina`)
let [nama, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, tahun)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Grup :* ${anu.message.grup}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
}
break
case 'haribaik': case 'harisangar': case 'taliwangke': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Hari Sanag :* ${anu.message.hari_sangar}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'harinaas': case 'harisial': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.haribaik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'nagahari': case 'naga': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'peruntungan': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.peruntungan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan :* ${anu.message.peruntungan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': case 'wetonjawa': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Tanggal :* ${anu.message.tanggal}\n• *Weton :* ${anu.message.weton}\n• *Nagara :* ${anu.message.nagara}\n• *Pancasuda :* ${anu.message.pancasuda}\n• *Sifat :* ${anu.message.sifat}\n• *Hoki :* ${anu.message.hoki}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'sifat': case 'karakter': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Lahir :* ${anu.message.tgl_lahir}\n• *Sifat :* ${anu.message.sifat}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'keberuntungan': case 'hoki': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.keberuntungan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Keberuntungan :* ${anu.message.keberuntungan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'memancing': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.hasil}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'masasubur': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} 28, 12, 2023`)
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Tanggal :* ${anu.message.tgl}\n• *Masa Subur :* ${anu.message.masa_subur}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'zodiak': case 'zodiac': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} taurus`)
let anu = await primbon.zodiak(text)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`)
}
break
case 'shio': {
if (!text) return m.reply(`Contoh : ${usedPrefix + command} tikus`)
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
m.reply(`• *Shio :* ${anu.message.nama}\n• *Elemen :* ${anu.message.elemen}\n• *Angka :* ${anu.message.angka_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Arah :* ${anu.message.arah_keberuntungan}\n• *Pasangan :* ${anu.message.pasangan}\n• *Catatan :* ${anu.message.catatan}`)
}
break
}}
handler.help = ['nomorhoki','artimimpi','ramalanjodoh','ramalanjodohbali','suamiistri','ramalancinta','artinama','kecocokannama','kecocokanpasangan','jadianpernikahan','sifatusaha','rejeki','pekerjaan','ramalannasib','potensipenyakit','artitarot','fengshui','haribaik','harisangar','taliwangke','harinaas','harisial','nagahari','arahrejeki','peruntungan','weton','sifat','keberuntungan','memancing','masasubur','zodiak','shio']
handler.tags = ['primbon']
handler.command = /^nomorhoki|artimimpi|ramalanjodoh|ramalanjodohbali|suamiistri|ramalancinta|artinama|kecocokannama|kecocokanpasangan|jadiannikah|sifatusaha|rejeki|pekerjaan|ramalannasib|potensipenyakit|artitarot|fengshui|haribaik|harisangar|taliwangke|harinaas|harisial|nagahari|arahrejeki|peruntungan|weton|sifat|keberuntungan|memancing|masasubur|zodiak|shio/i
handler.limit = true
module.exports = handler