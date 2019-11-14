interface IPointTest {
    x: number,
    y: number
}

interface IdGeneratorITest {
    (string, number):string //remember : instead of =>
}

interface LibrarianTest {
    name : string;
    doWork: () => void;
}