

//Defining property using custom accessors(getters/setters)
class Item {
    static description:string ="These are items";
    constructor(private _count:number){}
    get count() : number {
        return this._count
    }
    set count(n:number) {
        this._count = n;
    }
    
}
let itm = new Item(12);
console.log(itm.count);
itm.count = 23;
console.log(itm.count);
console.log(Item.description);  //Showing use of static variable
