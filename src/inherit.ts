class Point1 {
    constructor(public x: number,public y: number) {    }
    add(point: Point1) :Point1 {
        return new Point1(this.x + point.x, this.y + point.y);
    }
}

class Point3D extends Point1 {
    constructor(x: number, y: number, private z: number) {
        super(x, y);    //constructor for derived class must call super()
    }
    add(point: Point3D):Point3D {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

let p3 = new Point3D(1,2,3);
let p3result = p3.add(p3)
console.log(p3result);

//Showing child classes super() when base doesn't have constructor
console.log("Explaining super, override methods in inheritance");
class RefItem {
    name : string;
    show = () => console.log("From parent class");
    print = () :string => "Nothing to print"; 
}
class RefItemChild extends RefItem {
    constructor(name:string, private publisher:string) {
        super();    //must define super() always in child class constructor
        this.name =name;
    }
    print = () :string => this.name + " is published by " + this.publisher; 
}
let rc = new RefItemChild("Java", "Sun Microsystems");
rc.show();
console.log(rc.print());

//Show the abstract method
