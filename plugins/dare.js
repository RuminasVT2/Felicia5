/*
Made by Aine
*/

let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
	let dares = [
"Foto kuburan tengah malam berani ga?",
"Ambil foto bot, jadikan foto profil kamu selama 1 hari",
"VN nyanyi balonku ada 5",
"Minum Coca-Cola sampai habis tanpa sendawa selama 30 detik",
"Makan 1 Cabe tanpa minum, tanpa gorengan selama 2 menit",
"Celupin hp kamu ke air selama 30 detik",
"VN *Aku sayang kamu*",
"Nyanyi potong bebek angsa (VN)",
"Kirim pesan ke mantan kamu dan bilang _aku masih suka sama kamu_",
"Telfon crush/pacar sekarang dan ss ke pemain",
"Pap ke salah satu anggota grup",
"Pap apa yang di depan kamu",
"SS recent call whatsapp",
"Kirim voice note bilang can i call u baby?",
"Pake foto sule sampe 3 hari'",
"Ketik pake bahasa daerah 24 jam",
"Ganti nama menjadi _gue anak lucinta luna_ selama 5 jam",
"Chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia _i lucky to hv you_",
"Prank chat mantan dan bilang *i love u, pgn balikan*",
"Record voice baca surah al-kautsar",
"Ganti nama jadi *BOWO* selama 24 jam",
"Sebutkan tipe pacar mu!",
"VN *aku mencintaimu*",
"Kamu harus pap sekarang!",
"Ambil foto bot, jadikan foto profil kamu selama 1 hari",
"Makan satu gigitan kulit pisang.",
"Cium salah satu kaus kaki di antara kita.",
"Berikan ponselmu kepada salah satu di antara kita dan biarkan orang tersebut mengirim satu pesan kepada siapapun yang dia mau.",
"Biarkan orang lain membuat status menggunakan akun sosial mediamu.",
"Lakukan rap gaya bebas selama 3 menit.",
"Biarkan satu orang menggambar tato di wajahmu.",
"Bertingkahlah seperti ayam sampai giliranmu yang selanjutnya.",
"Tirukan seorang selebriti sampai ada yang bisa menebak.n",
"Peragakan salah satu orang di antara kita sampai ada yang bisa menebak siapa orang yang diperagakan",
"Katakan ‘meong’ di setiap akhir kalimat sampai giliranmu yang selanjutnya",
"Plank selama satu menit.",
"Kayang selama satu menit.",
"Push up 20 kali.'",
"Ungkapkan persaanmu kepada gebetanmu.",
"Gunakan penutup mata lalu raba muka salah satu di antara kita sampai kamu bisa menebak siapa orang itu.",
"ngewe ma orng yang ada disampingmu",
"cipokan ma orng yng ada disampingmu",
"Ajak berantem orang yg ada disampingmu",
"bunuh siapapun itu",
"Donasi ke owner sekarang!",
"VN *aku mencintaimu*",
"Kamu harus pap sekarang!",
"Kamu harus bagi bagi limit, minimal 2 setiap pengguna",
"Chatingan selama 1 jam harus 4l4Y 8AN93T"
] // tambahin kata kata sendiri 
let der = dares[Math.floor(Math.random() * dares.length)]
	conn.sendFile(m.chat, img, 'dare.png', `*DARE*\n\n“${der}”`, m)
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare|berani|tantangan)$/i
handler.limit = false
handler.register = true
module.exports = handler
