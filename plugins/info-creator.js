import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `${await conn.getName(nomorwa+'@s.whatsapp.net')}`, `Fahrul `, `My Skill Just Copas`, `admin@fahrul`, `Indonesia`, `https://instagram.com/fahrul_mt`, `Developer F.A - MD`]
  ], m)
  } 

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)/i
export default handler