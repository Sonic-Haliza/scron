let handler = async (m, { conn }) => {
let url = await conn.profilePictureUrl(global.owner[0] + '@s.whatsapp.net', 'image').catch(_ => `https://storage.pnggilajacn.my.id/file/my-profile.jpg`) 
let teks = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Ada Deh
*✉️ Nama RL* : Mau tau aja lu
*♂️ Gender* : Laki - laki
*🕋 Agama* : Satanic
*⏰ Tanggal lahir* : 29 Februari 2024
*🎨 Umur* : -99
*🧮 Kelas* : 31
*🧩 Hobby* : Nonton Anime, Chatting, Dengerin Musik
*💬 Sifat* : Pedofil

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : Brynzx06
*🇫  Facebook* : Scron

`
conn.sendMessage(m.chat, { image: { url }, caption: teks }, { quoted: m})
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i
export default handler
