interface IProcessor {
    brandname: string;
    baseModel: string;
    modelName: string;
    clockSpeed: number;
    turboBoost: boolean;
}

interface Intel extends IProcessor {

}

function spekLaptop (data: IProcessor): void {
    console.log(`
    Speksifikasi dari Laptop Zefri
    Nama Perusahaan ${data.brandname}
    Tipe Laptop ${data.baseModel}
    Jenis Laptop ${data.modelName}
    Benchmark ${data.clockSpeed}
    turboApps? = ${data.turboBoost}
    `)
};

const intelI5 = {
    brandname: "Apple MacBook",
    baseModel: "MacBook",
    modelName: "MacBook Pro Air M1",
    clockSpeed: 200,
    turboBoost: true,
}
spekLaptop(intelI5);