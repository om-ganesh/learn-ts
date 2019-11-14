class Foo {
    foo = 123;
}

class Bar {
    bar = 456;
}

function doStuff(arg: Foo | Bar) {
    if (arg instanceof Foo) {
        //console.log(arg.bar); // ERROR property bar doesn't  exist in Foo
        console.log(arg.foo); // OK
    }
    else {  // MUST BE Bar!
        console.log(arg.bar); // OK
    }
}

doStuff(new Foo());
doStuff(new Bar());
