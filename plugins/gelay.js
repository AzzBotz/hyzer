let fs = require('fs')
let handler = async (m) => {
let helloaine = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-04-04-at-04.50.43.opus')
conn.sendFile(m.chat, helloaine, '', '', m, true)
}

handler.customPrefix = /^(gelai|gelay|gamau gasuka gelay)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler