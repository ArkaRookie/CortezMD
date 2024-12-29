/** !! THIS CODE GENERATE BY RODOTZ X ZHUBOT !! **/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw 'Mana Provinsinya?\n\nContoh: *' + usedPrefix + command + ' Jateng*'
  m.reply('_Mohon Tunggu Sebentar_')
  let res = await KodePos(text)
  let hasil = res.map(item => `• *Provinsi:* ${item.province}\n• *Kota:* ${item.city}\n• *Kecamatan:* ${item.subdistrict}\n• *Desa:* ${item.village}\n• *KodePos:* ${item.postalcode}`

).join("\n\n");
 let tex = `${hasil || 'Not Found'}`
  m.reply('*KODEPOS INDONESIA*\n\n' + tex)
}
handler.help = ["kodepos"]
handler.tags = ["internet"]
handler.command = ["kodepos"]
module.exports = handler

    let axios = require('axios')
    let cheerio = require('cheerio')
    function KodePos(query) {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                data
            } = await axios.get('https://nomorkodepos.com/?s=' + query);
            const $ = cheerio.load(data);
            let _data = []

            $('table.pure-table.pure-table-horizontal > tbody > tr').each((i, u) => {
                let _doto = [];
                $(u).find('td').each((l, p) => {
                    _doto.push($(p).text().trim())
                })
                _data.push({
                    province: _doto[0],
                    city: _doto[1],
                    subdistrict: _doto[2],
                    village: _doto[3],
                    postalcode: _doto[4]
                })
            })
            resolve(_data)
        } catch (err) {
            console.error(err)
        }
    })
}