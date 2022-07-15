let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let regs = /(aku cinta kamu)/i
    let isCintaKamu = regs.exec(m.text)
    let cinmu = [
'❤️',
'🥰',
'😍'
]
let cintakamuh = cinmu[Math.floor(Math.random() * cinmu.length)]
    if (isCintaKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${cintakamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Aku juga sayang kamu ${cintakamuh}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    let regc = /(aku sayang kamu)/i
    let isSayangKamu = regc.exec(m.text)
    let saymu = [
'❤️',
'🥰',
'😍'
]
let sayangkamuh = saymu[Math.floor(Math.random() * saymu.length)]
    if (isSayangKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${sayangkamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Aku juga sayang kamu ${sayangkamuh}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    let regl = /(I love you|love you)/i
    let isLoveYou = regl.exec(m.text)
    let lovou = [
'❤️',
'🥰',
'😍'
]
let loveyou = lovou[Math.floor(Math.random() * lovou.length)]
    if (isLoveYou && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/PTT-20211218-WA0243.opus') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${loveyou}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
    let ass = /(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)/i
    let isAss = ass.exec(m.text)
    let assal = [
'🥰',
'😇',
'😅'
]
let assl = assal[Math.floor(Math.random() * assal.length)]
    if (isAss && !m.fromMe) {
    let assalamualaikum = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.46.15.opus')
    conn.sendMessage(m.chat, {
        react: {
          text: `${assl}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, assalamualaikum, '', '', m, true)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
    let maka = /(makasih|terima kasih|thank you|thanks you|thankyou|thanksyou|terimakasih)/i
    let isMaka = maka.exec(m.text)
    let makasih = [
'🥰',
'😇',
'😅'
]
let makas = makasih[Math.floor(Math.random() * makasih.length)]
    if (isMaka && !m.fromMe) {
    let makasih = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-03-10-at-20.35.07.opus')
    conn.sendMessage(m.chat, {
        react: {
          text: `${makas}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, makasih, '', '', m, true)
    }, 1000)
    }
    
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
    let ara = /(wibu|arara|ara ara|araara)/i
    let isAra = maka.exec(m.text)
    let arara = [
'🥰',
'😇',
'😅'
]
let arar = arara[Math.floor(Math.random() * arara.length)]
    if (isAra && !m.fromMe) {
    let arara = fs.readFileSync('./mp3/WhatsApp-Audio-2021-06-21-at-11.33.19.opus')
    conn.sendMessage(m.chat, {
        react: {
          text: `${arar}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, arara, '', '', m, true)
    }, 1000)
    }
    
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
let regll = /(ididhwhsisidjbdiei)/i
    let isLoveYouu = regll.exec(m.text)
    let lovouu = [
'😐',
'😌',
'😑'
]
let loveyouu = lovouu[Math.floor(Math.random() * lovouu.length)]
    if (isLoveYouu && !m.fromMe) {
    let helloainee = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-18-at-21.37.59.opus') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${loveyouu}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.sendFile(m.chat, helloainee, '', '', m, true)
    }, 1000)
    }
        
    
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
   /* let hiai = /(hi|hii|hiii|hi aine|hii aine|hiii aine|hy|halo|hallo|helo|hello|hy aine|halo aine|hallo aine|helo aine|hello aine)/i
    let isAih = hiai.exec(m.text)
    let hiain = [
'🥰',
'😇',
'😅'
]
let hiaine = hiain[Math.floor(Math.random() * hiain.length)]
    if (isAih && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-07-14-at-18.12.33.opus') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${hiaine}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }*/

}

handler.limit = true
module.exports = handler
