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
// 'Apel', 'Durian', 'Nanas', 'Jeruk', Alpukat

buah.pop(); //menghapus data di index terakhir
console.log(buah);
// 'Apel', 'Durian', 'Nanas', 'Jeruk'


// 2. menghapus data dari awal/dari akhir array
buah.unshift('Alpukat') //menambah data di awal index
console.log(buah);

buah.shift() //Menghapus data di awal index
console.log(buah);

// Operator
// Operator Aritmatika

let angka1 = 10
let angka2 = 20
let angka3 = 30

console.log("Penjumlahan", angka1 + angka2) //penjumlahan
console.log("pengurangan", angka3 - angka2) //pengurangan
console.log("Perkalian", angka3 * angka2) //Perkalian
console.log("Pembagian", angka3 / angka2) //Pembagian
console.log("Pangkat", angka1 ** 3) //Pangkat
console.log("Modulus", angka2 % 6) //Modulus

// Operator Penugasan
let assign = 40;
console.log("Penugasan dasar", assign) //Modulus

assign += 50 //90
console.log("Tambah dan tugaskan", assign) //Modulus

assign -= 10 //80
console.log("Kurangi dan tugaskan", assign) //Modulus

// operator perbandingan
let kondisi1 = "10"
let kondisi2 = 10
let kondisi3 = 30

console.log("Sama dengan nilai", kondisi1 == kondisi2) //sama dengan nilai = true
console.log("Sama dengan nilai dan tipe data", kondisi1 === kondisi2) //sama dengan nilai dan tipe data = false

console.log('Tidak sama dengan nilai', kondisi1 != kondisi2) //false
console.log('Tidak sama dengan nilai dan tipe data', kondisi1 !== kondisi2) //true

console.log('Lebih Besar', kondisi2 <= kondisi1) //true

let gajian = true
let uang = true
let hiling = false
let masuk_kerja = false

// and && => keduanya operated true
console.log("perbandingan", gajian && uang) //true
console.log("perbandingan", gajian && hiling) //false
console.log("perbandingan", masuk_kerja && hiling) //false

//  or || => salah satu bernilai true
console.log("perbandingan", gajian || uang) //true
console.log("perbandingan", gajian || masuk_kerja) //true
console.log("perbandingan", hiling || masuk_kerja) //false

// ! not => nilai kebalikan
console.log("perbandingan", !gajian && masuk_kerja) //false



















