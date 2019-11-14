interface IPoint {
    x: number,
    y: number
}

let drawPoint = (point:IPoint) : void => {
    console.log(point.x + ', ' + point.y);
}

let myPoint = {
    x: 1,
    y: 2
}
drawPoint(myPoint);

//Using interface as function type
function getIdNew(name: string, n : number) : string {
    return name+n;
}
//This way we can create common type and use at various places
interface IdGeneratorI {
    (string, number):string //remember : instead of =>
}
let NewIdGenerator : IdGeneratorI;
NewIdGenerator = getIdNew;
console.log(NewIdGenerator("newId",12));

//Defining class types
interface Librarian {
    name : string;
    doWork: () => void;
}
//Need to provide all properties and methods
class UnvLibrarian implements Librarian {
    name : string
    doWork() {
        console.log(this.name + " is doing work");
    }
}


let u : Librarian = new UnvLibrarian();
u.name ="Subash";
u.doWork();
