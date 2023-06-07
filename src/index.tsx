let namasaya: string = "Zefri Fahlevi";
let ID: number = 1234;
let isDead: boolean = false;

let roleplay = "Drian Matteus";

let gua: number | string | boolean;
gua = 14;
gua = "Patrzalek";
gua = true;

/*let diriku: string[];
diriku = ["James", "Drian"];
*/

let oranglain: [string, number, boolean];
oranglain = ["Patrzalek", 2206, true]

function create(): number {
    return 2;
}

const zefri = ():string => "Zefri"

type Akun = {
    akunid: number
    namaakun: string
    aktifakun?: boolean
};

let user: Akun;
user = {
    akunid: 192168,
    namaakun: "Zefry",
    aktifakun: true
}

console.log({ namasaya });
console.log({ gua })
console.log({ ID });
console.log({ isDead });
console.log({ roleplay });
// console.log({ diriku });
console.log({ oranglain });
console.log(create())
console.log(zefri())
console.log({ user })

function zefry(): void {
    let a = 1
    let b = 2
    let z = a + b
    console.log("Hasilnya adalah : " + z)
}
zefry()

function add(x: number, y: number): void {
    const v = x + y
    console.log("Totalnya adalah: " + v)
}
add(10, 20)

function learn(u: number, e: number): number {
    return u + e
}
learn(5, 5)

function learn2(p: number, o: number): string {
    return `Hasil dari ${p} + ${o} adalah: ${p + o}` 
}
const hasil = learn2(10, 50)
console.log(hasil)

interface Icompany {
    brandname: string;
    founder: string;
    website: string;
    established: string;
    members: string;
};

function perusahaan (deskripsi: Icompany): void {
    console.log(`
    Nama Perusahaan ${deskripsi.brandname}
    Founder kami ${deskripsi.founder}
    Didirikan pada ${deskripsi.established}
    Website kami ${deskripsi.website}
    Anggota Kami = ${deskripsi.members}
    `)
};

const Icompany2 = {
    brandname: "Zef Company",
    founder: "Zefri Fahlevi",
    website: "zefcompany.com",
    established: "20 Mei 2023",
    members: "Leader | Zefri Fahlevi",
}
perusahaan(Icompany2);

let diriku: string = "Be Yourself"
let today: boolean = true  // True | False
let yesterday: boolean = true // True

if (yesterday = today) {
    console.log("Zefri's Way..");
    console.log(`Not Different You Are In The Right Path (${diriku})`);
} 
else {
    console.log("Zefri's Way..");
    console.log("Today Is Different From Yesterday");
}