//Decorators follow decorator design pattern
//Also known as meta programming

function Component(options: {ver:string}) {  //this is decorator factory
    //console.log('Options: ' + options);
    return (target) => {//This is decorator, do something with options and target
        target.ver = options.ver;
    }
}

//Attaching Decorators to class will give access to ctor
@Component({
    ver: 'v2015'
})
class PointD {
    public static ver: string;
    constructor(private _x:number, private _y: number){}
   
    draw() {
        console.log(this._x + ', ' + this._y);
    }
}

let p1 = new PointD(12,13);
p1.draw();
console.log(`Version:  + ${PointD.ver}`);

//Using string templates
console.log(`1 and 1 make ${1 + 1}`);
var lyrics = `Never gonna give you up
Never gonna let you down`;
console.log(lyrics);