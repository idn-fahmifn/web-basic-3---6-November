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
let waktu = "Pagi";
let ucapan = `Ayo kita ucapkan ${sapa} ${waktu}, kepada semua tamu`; //template literal

// hallo selamat, pagi
console.log(ucapan);

// Tipe data number
// mewakili angka bulat, desimal, +/-infinity, Nan

let umur = 0.5;
let usia = 50;
console.log(usia - sapa);

let isMakan = true; //boolean benar.
//false = 0, true = 1
console.log(isMakan + waktu);

//tipe data undifined
//  wajib menggunakan let
let contoh;
console.log(contoh);

// tipe data null
let kosong = null;
console.log(kosong + isMakan);

// Tipe data object

let saya = {
  nama: "Fahmi Nuradi",
  umur: 23,
  asal: "Jakarta Barat",
  menikah: false,
  pendidikan: {
    sd: "SDN 1 Jakarta",
    smp: "SMPN 1 Jakarta",
  },
};
// Halo nama saya [nama], sdaya umurnya [umur], dulu saya sd di [nama sd] dan smpnya di [smp]
console.log(`Haloo nama saya ${saya.nama}, Saya umurnya ${saya.umur}. 
Dulu saya sd di ${saya.pendidikan.sd} dan saya melanjutkan smp di ${saya.pendidikan.smp}`);

// Tipe data array :
let buah = ["Apel", "Durian", "Nanas", "Jeruk"];
console.log(buah[1]);

// Modifikasi data array
// 1. menambahkan data dari awal/dari akhir array
buah.push("alpukat"); //menambah data di index terakhir
console.log(buah);
// 'Apel', 'Durian', 'Nanas', 'Jeruk', Alpukat

buah.pop(); //menghapus data di index terakhir
console.log(buah);
// 'Apel', 'Durian', 'Nanas', 'Jeruk'

// 2. menghapus data dari awal/dari akhir array
buah.unshift("Alpukat"); //menambah data di awal index
console.log(buah);

buah.shift(); //Menghapus data di awal index
console.log(buah);

// Operator
// Operator Aritmatika

let angka1 = 10;
let angka2 = 20;
let angka3 = 30;

let convert = String(angka3);
console.log(convert + 30);

console.log("Penjumlahan", angka1 + angka2); //penjumlahan
console.log("pengurangan", angka3 - angka2); //pengurangan
console.log("Perkalian", angka3 * angka2); //Perkalian
console.log("Pembagian", angka3 / angka2); //Pembagian
console.log("Pangkat", angka1 ** 3); //Pangkat
console.log("Modulus", angka2 % 6); //Modulus

// Operator Penugasan
let assign = 40;
console.log("Penugasan dasar", assign); //Modulus

assign += 50; //90
console.log("Tambah dan tugaskan", assign); //Modulus

assign -= 10; //80
console.log("Kurangi dan tugaskan", assign); //Modulus

// operator perbandingan
let kondisi1 = "10";
let kondisi2 = 10;
let kondisi3 = 30;

console.log("Sama dengan nilai", kondisi1 == kondisi2); //sama dengan nilai = true
console.log("Sama dengan nilai dan tipe data", kondisi1 === kondisi2); //sama dengan nilai dan tipe data = false

console.log("Tidak sama dengan nilai", kondisi1 != kondisi2); //false
console.log("Tidak sama dengan nilai dan tipe data", kondisi1 !== kondisi2); //true

console.log("Lebih Besar", kondisi2 <= kondisi1); //true

let gajian = true;
let uang = true;
let hiling = false;
let masuk_kerja = false;

// and && => keduanya operated true
console.log("perbandingan", gajian && uang); //true
console.log("perbandingan", gajian && hiling); //false
console.log("perbandingan", masuk_kerja && hiling); //false

//  or || => salah satu bernilai true
console.log("perbandingan 3", gajian || uang || masuk_kerja); //false
console.log("perbandingan", gajian || masuk_kerja); //true
console.log("perbandingan", hiling || masuk_kerja); //false

// ! not => nilai kebalikan
// console.log("perbandingan", !gajian && masuk_kerja) //false

// kondisi
// if conditional

let eat = "gatau dehh";
// jika kondisi pertama yang dipilih
if (eat === true) {
  console.log("Saya sudah makan");
}
// jika kondisi pertama dan terakhir tidak dipili
else if (eat === "lupa") {
  console.log("Saya lupa udah makan atau belum");
}
// tidak semua kondisi cocok
else {
  console.log("Saya belum makan");
}

// switch
let day = 30;

switch (
  day //ini adalah variable yang akan dijadikan pembanding
) {
  case "senin": // jika nilainya senin :
    console.log("Kok udah hari senin lagi?");
    break;
  case "selasa":
  case "rabu":
  case "kamis":
    console.log("Yok semangat kerja");
    break;
  case "jumat":
    console.log("yeay besok libur");
    break;
  case "sabtu":
  case "minggu":
    console.log("Yey hari ini libur");
    break;
  default:
    console.log("Ini hari apa? saya gatau");
    break;
}

//chalnges
//  Predikat nilai
// jika input : 0-60 = D, 61 - 75 = C, 76 - 85 = B, 86 - 100 = A.
// Jika tidak semuanya, outputnya nilai error

// Mas zam, Mas farel = IF Statement
// Mas aris, Mas toni, Mas juan = Switch
// fahmi dua duanya

// switch :
let nilai = 30;

switch (true) {
  case nilai >= 0 && nilai <= 60:
    console.log("Predikat kamu adalah D");
    break;
  case nilai >= 61 && nilai <= 75:
    console.log("Predikat kamu adalah C");
    break;
  case nilai >= 76 && nilai <= 85:
    console.log("Predikat kamu adalah B");
    break;
  case nilai >= 86 && nilai <= 100:
    console.log("Predikat kamu adalah A");
    break;
  default:
    console.log("nilai yang kamu masukan salah");
}

if (nilai >= 0 && nilai <= 60) {
  console.log("Predikat kamu D");
} else if (nilai >= 61 && nilai <= 75) {
  console.log("Predikat kamu C");
} else if (nilai >= 76 && nilai <= 85) {
  console.log("Predikat kamu B");
} else if (nilai >= 85 && nilai <= 100) {
  console.log("Predikat kamu A");
} else {
  console.log("Input salah");
}

// looping
// Loop dengan for

for (let i = 0; i <= 10; i++) {
  console.log("Saya Sedang mengulang", i);
}

buah = ["Apel", "Durian", "Nanas", "Jeruk", "alpukat", "salak"];

for (let i = 0; i < buah.length; i++) {
  console.log("Saya suka buah buahan, yaitu : ", buah[i]);
}

// looping dengan while
const secret = "fahmi";
let tebak = "";
let count = 0;

while (tebak.toLowerCase() !== secret) {
  tebak = prompt("Hayoo aku siapa?");
  count++;
  if(tebak !== secret ){
    alert(`wkwkwk salah 😋, Kamu udah nebak sebanyak ${count} kali`)
  }
}
if (tebak.toLowerCase() === secret) {
  alert("Yeay akhirnya bener juga");
}
