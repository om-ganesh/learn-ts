function readonly(_target, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

class Test {
    
    @readonly
    print() {
        console.log("This should not be overridden");
    }
}

let t = new Test();
t.print = function() {
    console.log('overridden blah blah');
}
console.log(t.print());