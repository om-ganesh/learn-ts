//let v/s var
function test() {
    
    if(true) {
        //console.log(thisisvar); //being used before declared
        var thisisvar=21;
        let thisislet=22;
    }
    console.log('var outside scope: ' + thisisvar);
    //console.log(thisislet); //not allowed
}
//console.log(thisisvar); //not available at this level

//type annotations
let count: number;
let bol: boolean;
let str: string;

count=12;
console.log(count);

//any annotation
let a : any;
a=false;
a='hello';
console.log(a);

let nos: number[]=[2,3,3];
console.log(nos);

//defining enumerations
enum Color { Red = 0, Green, Blue};
let bg = Color.Blue;
console.log(bg);


//Intellisense won't work if you don't define type (i.e. any by default)
//so, using assertions
let message;
message = 'hello';
//let oEnds = message.endsWith('o'); //with type defined
let oEnds = (<string>message).endsWith('o'); //using assertion
//Note:endsWith is es6/es2015 declaration so need to target es6 or higher
console.log(oEnds);
