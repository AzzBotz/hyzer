let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_sad_* 
*đŽ: KENAPA NANGIS!? ADA AKU DI SINI KOK SETIA MENEMANI KAMU*
`.trim()
conn.send2ButtonImg(m.chat, await (await fetch(fla + 'JANGAN SEDIH')).buffer(), ext, 'sedih ya', 'COMMAND', '.menu', m)

}
handler.customPrefix = /^(đ­|đ|đ|đ|đĨē|đ|đĨ|đĸ|âšī¸|đ|đ|đ|đŖ|đŠ|đĢ)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
