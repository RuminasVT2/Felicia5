let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw '*Example: #covid Indonesia*'
  if (json.confirmed) m.reply(`
*「 COUNTRY ${text} 」*

🏥 Dikonfirmasi : ${json.confirmed.value}
☑️ Pulih : ${json.recovered.value}
🥀 Meninggal : ${json.deaths.value}
📁 Pembaharuan Terakhir : ${json.lastUpdate}
`.trim())
  else throw json
}
handler.help = ['infocovid'].map(v => v + ' <country>')
handler.tags = ['info']
handler.command = /^(infocorona|corona|covid|covid19)$/i
handler.register = true
//susu
module.exports = handler
