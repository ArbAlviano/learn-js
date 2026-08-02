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