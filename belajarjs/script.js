/*function cekGanjilGenap (number){
    if (number % 2 === 0){
        return "genap";
    } else {
        return "ganjil";
    }
}

console.log(cekGanjilGenap(10));
console.log(cekGanjilGenap(7));*/

let ganti = document.getElementById("manipulasi");
ganti.textContent = "WORLD HELLO";

//bealajar js with kelas terbuka

let kebo = "kebokem";
console.log(kebo);
kebo = "bokem";
console.log(kebo);

let keboBelakang = "tidur";
{
    let keboBelakang = "zzz"; // hanya mengubah yang didalam
    console.log(keboBelakang)
}
console.log(keboBelakang); // yang diluar tetap mengikuti yang atas

const NIK = "1234";
console.log(NIK);
//NIK = "12345"; tidak bisa mengubah karna const

let data1 = "kebo";
console.log(data1);
console.log(typeof data1); //string

let data2 = 10;
console.log(data2);
console.log(typeof data2); //number

let data3 = true;
console.log(data3);
console.log(typeof data3); //boolean

data1 = 5;
console.log(data1)
console.log(typeof data1) //dapat mengubah data dari string ke int

let kosong;
console.log(kosong);
console.log(typeof kosong); //undefined dan bisa diisi nanti
kosong = "Kebo";
console.log(kosong);
console.log(typeof kosong);

// escaping string 
let data4 = 'Kebo berkata "halo dunia"';
console.log(data4)
let data5= "kebo berkata \"aduh le\"";
console.log(data5)
let data6 = "kebo sedang sibuk bermain bola, \ndi bulan";
console.log(data6);

// literal string
let namaDepan = "kebo";
let namaBelakang = "bobo";
let umur = 15;

let biokebo = `${namaDepan} ${namaBelakang} di umur ${umur}`;
console.log(biokebo);

// operasi string
//char at
let dataString = "abcdef";
let dataChar = dataString.charAt(3);
console.log(`character pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(6);
console.log(`character pada index 6 = ${dataChar}`);

//menyambung str
let namaPayun = "rb";
let namaPengker = "rolbek";
let namaLengkap = namaPayun.concat(' ',namaPengker);
console.log(namaLengkap);

//mengambil inddek 
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('r'));

//substring
console.log(namaLengkap.substring(3,9));
console.log(namaLengkap.substring(9,3));

//slice
console.log(namaLengkap.slice(9,3));
console.log(namaLengkap.substring(3,9));

//replace
namaLengkap = namaLengkap.replace('rb rolbek', 'rolberk rb');
console.log(namaLengkap);

//tolower
console.log(namaLengkap.toLocaleLowerCase());
//toupper
console.log(namaLengkap.toUpperCase());

let ubah = '10';
console.log(typeof ubah);
let rubah = parseInt(ubah);
console.log(rubah);
console.log(typeof rubah)