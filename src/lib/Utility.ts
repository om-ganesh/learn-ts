export function CalculateFee(days:number) : number {
    return days*.25;
}

export function privatefxn() { console.log("Not exported"); }

export class Math {
    static sqrt = (n: number) : number => n*n;
    get PI() : number { return 3.1416;}
}

//alternatively I can also export from here (by removing export keywords above)
//export {CalculateFee, Math};

//Also, can be exported/imported as different name
//export {CalculateFee as CFee, Math};
//export * as UtilAll;