function testApi(options: "POST" | "GET" | true | 1) {
    console.log(options);
}

testApi("POST");

//TODO testing mapped types
type Person = {
    name: string;
    age: number;
}

type ReadOnly<T> = {
    readonly [p in keyof T]:T[p];
}

type ReadOnlyPerson = ReadOnly<Person>;
let p:ReadOnlyPerson = {name:"hello", age:12};
// p.age =12; //can't assign to readonly type


