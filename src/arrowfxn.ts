let doLog = (message) => { console.log(message); }
//let doLog = message => console.log(message); //more concise
doLog("Test arrow fxn");

//arrow fxn for array element
let arrPost: string[] = ['developer', 'advisor', 'architect'];
arrPost.forEach(x => console.log(x));

//arrow function are useful on capturing class when creating class, rather than while invoking method
//they insure that the this variable is referring to the class
class MyClass {
	
	regularfxn() {
        console.log('inside regular');
    }
	arrowfxn = () => console.log('inside arrow');
}

var cl = new MyClass();
cl.regularfxn();
cl.arrowfxn();

cl.regularfxn.call;
cl.arrowfxn.call;