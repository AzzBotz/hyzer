let handler = async (m, { conn }) => {
let caption = `π©πΊπππΊπ ππππΊ πππππ ππΊπ π€
	
β­ π­πΊππΊ :
β π΄πππ :
β π¦πΎππ½πΎπ :
β π ππππ :
β°β π―πΊππππ ππππΎπ ππππ ππΊ ππΊk ~`

conn.sendBut( m.chat, caption, ``, `OKE KAK><`,  m)

       }
       
handler.customPrefix = /^(intro)/i
handler.command = new RegExp
module.exports = handler
