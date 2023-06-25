interface IProcessor {
    brandname: string;
    baseModel: string;
    modelName: string;
    clockSpeed: number;
    turboBoost: boolean;
}

interface Intel extends IProcessor {

}

function spekPC (data: IProcessor): void {
    console.log(`
    Speksifikasi dari PC 1
    Nama Perusahaan ${data.brandname}
    Founder kami ${data.baseModel}
    Didirikan pada ${data.modelName}
    Website kami ${data.clockSpeed}
    Anggota Kami = ${data.turboBoost}
    `)
};

const intelI5 = {
    brandname: "Zef Company",
    baseModel: "Zefri Fahlevi",
    modelName: "zefcompany.com",
    clockSpeed: 200,
    turboBoost: true,
}
spekPC(intelI5);