import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
let tiktok = await fetch('https://api.xyroinee.xyz/api/downloader/tiktok?url=${text}apikey=ASjKWQpFVz')
let result = await tiktok.json()
conn.sendFile(m.chat, result.data.video, 'anu.mp4', 'username: {result.data.username}\nDescription: ${result.data.description}', m)
  }
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true

export default handler
