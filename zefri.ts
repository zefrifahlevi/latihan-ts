interface IProcessor {
    brandname: string;
    baseModel: string;
    modelName: string;
    clockSpeed: number;
    turboBoost: boolean;
}

function spekLaptopzefri (data2: IProcessor): void {
    console.log(`
    Spesifikasi dari Laptop Zeffri
    Nama Perusahaan: ${data2.brandname}
    Tipe Laptop: ${data2.baseModel}
    Jenis Laptop: ${data2.modelName}
    Benchmark = ${data2.clockSpeed}
    turboApps = ${data2.turboBoost}
    `)
};

const tufGaming = {
    brandname: "ASUS",
    baseModel: "ASUS TUF GAMING",
    modelName: "FX-505DT",
    clockSpeed: 500,
    turboBoost: true,
}
spekLaptopzefri(tufGaming)

interface IMusic {
    brandName: string;
    modelName: string;
    basicModel: string;
    rateModel: number;
}

function spekPianozefri (data: IMusic): void {
    console.log(`
    Speksifikasi Piano: ${data.brandName}
    Produk Piano: ${data.modelName}
    Base Model: ${data.basicModel}
    Rating Model: ${data.rateModel}
    `)
};

const Piano = {
    brandName: "Yamaha",
    modelName: "PSR-E473",
    basicModel: "Keyboard",
    rateModel: 90
}

spekPianozefri(Piano)



/* -------Berubah Pikiran-----------

interface Intel extends IProcessor {

}


function spekLaptopzefri (data: IProcessor): void {
    console.log(`
    Spesifikasi dari Laptop Zefri
    Nama Perusahaan: ${data.brandname}
    Tipe Laptop: ${data.baseModel}
    Jenis Laptop: ${data.modelName}
    Benchmark = ${data.clockSpeed}
    turboApps = ${data.turboBoost}
    `)
};

const airM1 = {
    brandname: "Apple MacBook",
    baseModel: "MacBook",
    modelName: "Pro Air M1",
    clockSpeed: 200,
    turboBoost: true,
}
spekLaptopzefri(airM1);
*/