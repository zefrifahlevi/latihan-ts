console.log("   Calculator Sederhana")
console.log("")

function pertambahan (tambahx: number, tambahy: number):string {
    return `    Hasil Pertambahan dari ${tambahx} + ${tambahy} = ${tambahx + tambahy} `;
}
const hasilpertambahan = pertambahan(100,1000); // <- Input Angka disini
console.log(hasilpertambahan)


function pengurangan (kurangx: number, kurangy: number):string {
    return `    Hasil Pengurangan dari ${kurangx} - ${kurangy} = ${kurangx - kurangy} `;
}
const hasilpengurangan = pengurangan(2000,500); //Input Angka disini
console.log(hasilpengurangan)


function perkalian (kalix: number, kaliy: number):string {
    return `    Hasil Perkalian dari ${kalix} x ${kaliy} = ${kalix * kaliy} `;
}
const hasilperkalian = perkalian(50,100); //Input Angka disini
console.log(hasilperkalian)


function pembagian (bagix: number, bagiy: number):string {
    return `    Hasil Pembagian dari ${bagix} / ${bagiy} = ${bagix / bagiy} `;
}
const hasilpembagian = pembagian(5000,1150); //Input Angka disini
console.log(hasilpembagian)

console.log(" ")