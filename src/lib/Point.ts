//using export to visible outside, and in ts terms, its known as module
//by default, class has its own scope and not accessible outside
class Point {
    //default all members(fields/methods) are public
    // private x: number;
    // private y: number;

    //Define optional parameters using ?
    //Constructor a preserved keyword
    // constructor(a?:number, b?:number) {
    //     this.x = a;
    //     this.y = b;
    // }

    //ts generate the private/public variables automatically and assign it if defined with keywords in ctor
    constructor(private _x:number, private _y: number){}

    //ts properties
    set x(value) {
        if (value<=0) {
            throw Error("Value can't be negative");
        }
        this._x = value;
    }

    get x() {
        return this._x;
    }

    draw() {
        console.log(this._x + ', ' + this._y);
    }

    getDistance() {
        // ...
    }
}

class AnotherPoint {
    static Message : string = "Test another point";
}

module.exports = {
    Point:Point,
    AnotherPoint
};