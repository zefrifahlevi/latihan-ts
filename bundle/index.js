"use strict";
let namasaya = "Zefri Fahlevi";
let ID = 1234;
let isDead = false;
let roleplay = "Drian Matteus";
let gua;
gua = 14;
gua = "Patrzalek";
gua = true;
let diriku;
diriku = ["James", "Drian"];
let oranglain;
oranglain = ["Patrzalek", 2206, true];
function create() {
    return 2;
}
const zefri = () => "Zefri";
let user;
user = {
    akunid: 192168,
    namaakun: "Zefry",
    aktifakun: true
};
console.log({ namasaya });
console.log({ gua });
console.log({ ID });
console.log({ isDead });
console.log({ roleplay });
console.log({ diriku });
console.log({ oranglain });
console.log(create());
console.log(zefri());
console.log({ user });
function zefry() {
    let a = 1;
    let b = 2;
    let z = a + b;
    console.log("Hasilnya adalah : " + z);
}
zefry();
function add(x, y) {
    const v = x + y;
    console.log("Totalnya adalah: " + v);
}
add(10, 20);
function learn(u, e) {
    return u + e;
}
learn(5, 5);
function learn2(p, o) {
    return `Hasil dari ${p} + ${o} adalah: ${p + o}`;
}
const hasil = learn2(10, 50);
console.log(hasil);
;
function perusahaan(deskripsi) {
    console.log(`
    Nama Perusahaan ${deskripsi.brandname}
    Founder kami ${deskripsi.founder}
    Didirikan pada ${deskripsi.established}
    Website kami ${deskripsi.website}
    Anggota Kami = ${deskripsi.members}
    `);
}
;
const Icompany2 = {
    brandname: "Zef Company",
    founder: "Zefri Fahlevi",
    website: "zefcompany.com",
    established: "20 Mei 2023",
    members: "Leader | Zefri Fahlevi",
};
perusahaan(Icompany2);
