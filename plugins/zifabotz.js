let handler = async (m, { conn }) => {
let caption = `*(￣ヘ￣）HEMM*\nAda Apa Kak. Mau Saya *PUKUL?*`

conn.sendBut( m.chat, caption, ``, `Menu`, `.?`,  m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
