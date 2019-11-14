interface MyDuck {
	quack : () => void;
	walk : () => void;
	swim : () => void;
}
let myvar = {
    quack : () => console.log("Quacks"),
    walk : () => console.log("Walks"),
    swim : () => console.log("Swims")
}

function acceptDuck(a: MyDuck):void {
    a.quack();
}

acceptDuck(myvar); //I am passing myvar since it represents same structure

