//type annotation in fxn
function testfxn(a:string, b:number):string {
    return a+b;
}
let result = testfxn("hello",12);
console.log(result);

console.log("Using Rest parameters and Spread");
function multiargs(...nos:number[]) {
    return nos.reduce( (a,b) => a+b);
}
console.log(multiargs(2,3,4));
let n=[3,3,4];
console.log(multiargs(...n));
console.log(multiargs(5,...n));

console.log("Extending builtin type. Not Recommended");
Number.prototype.formatAsCurrency = function() { return "$"+this.toFixed(2)};
let no = 5.2;
console.log(no.formatAsCurrency());

let n1=[3,3,4];
console.log("Test APPLY, as compared to CALL")
let sayNovar = function sayNo(no1, no2, no3) {
    console.log(this.namet + ' & args are: '+ no1+ ','+no2 +','+no3);
}
let obj1 = {
    namet: "subash"
};
sayNovar.call(obj1, n1[0],n1[1],n1[2]);
sayNovar.apply(obj1, n1);
let newvar = sayNovar.bind(obj1, n1[0],n1[1],n1[2]);
newvar();

//what if we call the fxn without its context (nothing in left of dot)
sayNovar(n1[0],n1[1],n1[2]); //this.namet is undefined here


//Function types (Is same type if parameter is same and return is same)
console.log("function type: combine parameter type and return type");
function getId(name: string, n : number) : string {
    return name+n;
}
//Create variable and assign the function to the variable
//let IdGenerator = (name: string, n:number)  => name+n; 
let IdGenerator = (string, number)  => string; //variables is optional as shown here
IdGenerator = getId;    //see, we assign the function similar as variable x=5

let res = IdGenerator('subash', 1);
console.log(res);
