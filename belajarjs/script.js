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
