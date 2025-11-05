// variabel dengan let.
// 1. Untuk data bisa diubah (reusable);

console.log("hari ini saya belajar js");

let pelajaran = "Hari ini saya sedang belajar javascript";
console.log(pelajaran); //awal data

pelajaran = "Javascript asik bukan?";
console.log(pelajaran); // data yang sudah diubah.

// variable dengan const
const makan = "Saya tiap hari makan 3x";
console.log(makan);


// Tipe data string
// tipe data string bisa menggunakan '', "", ``
let sapa = "Halo selamat, ";
let waktu = 'Pagi';
let ucapan = `Ayo kita ucapkan ${sapa} ${waktu}, kepada semua tamu` //template literal

// hallo selamat, pagi
console.log(ucapan);

// Tipe data number
// mewakili angka bulat, desimal, +/-infinity, Nan

let umur = 0.5
let usia = 50
console.log(usia-sapa);

let isMakan = true //boolean benar.
//false = 0, true = 1
console.log(isMakan + waktu);

 //tipe data undifined
//  wajib menggunakan let
let contoh
console.log(contoh);

// tipe data null
let kosong  = null
console.log(kosong + isMakan)

// Tipe data object

let saya = {
    'nama' : 'Fahmi Nuradi',
    'umur' : 23,
    'asal' : 'Jakarta Barat',
    'menikah' : false,
    'pendidikan' : {
        'sd' : 'SDN 1 Jakarta',
        'smp' : 'SMPN 1 Jakarta'
    }
}
// Halo nama saya [nama], sdaya umurnya [umur], dulu saya sd di [nama sd] dan smpnya di [smp]
console.log(`Haloo nama saya ${saya.nama}, Saya umurnya ${saya.umur}. 
Dulu saya sd di ${saya.pendidikan.sd} dan saya melanjutkan smp di ${saya.pendidikan.smp}`)

// Tipe data array : 
let buah = ['Apel', 'Durian', 'Nanas', 'Jeruk'];
console.log(buah[1]);

// Modifikasi data array
// 1. menambahkan data dari awal/dari akhir array
buah.push('alpukat'); //menambah data di index terakhir
console.log(buah);

buah.pop(); //menghapus data di index terakhir
console.log(buah);

// 2. menghapus data dari awal/dari akhir array
buah.unshift('Alpukat') //menambah data di awal index
console.log(buah);

buah.shift() //Menghapus data di awal index
console.log(buah);










