import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285786539008', 'Fahrul', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285786539008'
global.packname = 'F.A - MD by'
global.author = '© fahrul'
global.namebot = '​F.A - MD'
global.wm = '© F.A By Fahrul'
global.stickpack = 'F.A - MD by'
global.stickauth = '© fahrul'
global.fotonya = 'https://telegra.ph/file/dc3ed7b279d775b9f356f.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/fahrul_mt'
global.sgh = 'https://github.com/fahrul6868'
global.sgc = 'https://chat.whatsapp.com/HZ0XzL2hYl5EtKgz15Qdfv'
// Donasi
global.psaweria = 'https://saweria.co/fahrul76'
global.ptrakterr = 'https://trakteer.id/fahrul98'
global.povo = '-'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.rose = 'fahrul76' //api.itsrose.life
global.xyro = '7nSF7vjMdE'// api.xyroinee.xyz
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "7nSF7vjMdE",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
