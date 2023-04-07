import { apivisit } from './kanghit.js'
import fs from 'fs'

let handler = async (m, { conn }) => {
let url = API('can', '/api/cecan/random', {}, 'apikey')
let pp = fs.readFileSync('./thumbnail.jpg')
let a = {
document: { url: `./src/font/Roboto-ThinItalic.ttf`},
jpegThumbnail: await conn.resize(url, 200, 200),
mimetype: global.doc,
fileName: `Hai kak ` + await conn.getName(m.sender),
fileLength: 999999999999999,
pageCount: 1234567890123456789012345,
caption: `List harga sewabot :
1 Minggu: 7k`
}
await conn.sendMessage(m.chat, a, { quoted: { key: { fromMe: false,participant:"0@s.whatsapp.net", remoteJid: "status@broadcast"}, message: { orderMessage: { itemCount: 2023, status: 200, thumbnail: await conn.resize(pp, 100, 100), surface: 200, message: `Simple WhatsApp Bot`, orderTitle: 'Scron', sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore :999, isForwarded: true }, sendEphemeral: true}, ephemeralExpiration: global.ephemeral, forwardingScore: 99999, isForwarded: true })
await apivisit
}
handler.command = /^(rental|iklan)$/i
export default handler