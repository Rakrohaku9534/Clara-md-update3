import fs from 'fs'

let handler = async (m, { conn }) => {
	let pfft = `Hai Kak, Sebelum Ke Menu Fitur Ku Harap Di Baca Ya Rules Penggunaan Botnya :)
	
1. Di Larang Spam Bot
2. Di Larang Menelpon Bot
3. Di Larang Menelpon No Owner
4. Di Larang Spam Ke No Owner

*Ketik .allmenu Untuk Menampilkan Menu*

_Note: Jika Kamu Tidak Tahu Cara Menggunakan Bot Kamu Bisa Ketik .tutorial_


`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `Clara - Official Group`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}
handler.command = /^(menu)$/i;

export default handler;
