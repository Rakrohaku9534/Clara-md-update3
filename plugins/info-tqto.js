import fs from 'fs'

let handler = async (m, { conn }) => {
	let tqto = `Thanks Too :
	
- ShirokamiRyzn

- BochilGamng

- Xct007

- Ekuzika

- Nurutomo

- ImYanXiao

- VynaaChan

- Fahrul

Pengembang: Xyroinee/Zeltoria
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/24f38f1982ea8358cc482.jpg' }, caption: tqto }, m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto)$/i;

export default handler;
