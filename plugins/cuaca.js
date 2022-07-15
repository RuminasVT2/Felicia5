const axios = require('axios')




let handler = async (m, { conn, args  , usedPrefix, command })=>{


if(!args[0]) throw "*Example: #infocuaca Jakarta*"

    try{

        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
        const res = await response

        const name = res.data.name
        const Country = res.data.sys.country
        const Weather= res.data.weather[0].description
        const Temperature = res.data.main.temp + '°C'
        const Minimum_Temperature= res.data.main.temp_min + '°C'
        const Maximum_Temperature= res.data.main.temp_max + '°C'
        const Humidity= res.data.main.humidity + '%'
        const Wind= res.data.wind.speed + 'km/h'


        conn.reply(m.chat,`
        *「 WEATHER IN ${name} 」*\n\n⛳ Negara: ${Country}\n⛅ Cuaca: ${Weather}\n🌡️ Suhu: ${Temperature}\n🌡️ Suhu Minimum: ${Minimum_Temperature}\n🌡️ Suhu Maks: ${Maximum_Temperature}\n💧 Kelembaban: ${Humidity}\n🍃 Angin: ${Wind}
        `.trim(),m)
    }catch(e){
throw '*Location Not Found*' 
console.log(e)

    }




}

handler.help = ['infocuaca <city>']
handler.tags = ['info']
handler.command = /^infocuaca|weather$/i
handler.limit = true
handler.register = true
module.exports = handler