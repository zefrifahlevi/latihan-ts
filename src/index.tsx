let namasaya: string = "Zefri Fahlevi";
let ID: number = 1234;
let isDead: boolean = false;

let roleplay = "Drian Matteus";

let gua: number | string | boolean;
gua = 14;
gua = "Patrzalek";
gua = true;

let diriku: string[];
diriku = ["James", "Drian"];

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
console.log({ diriku });
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

console.log("Zefri Fahlevi")
