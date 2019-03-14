// import { Bar } from './bar'

export class Foo {
    hello: string = "world"

    constructor() {
        console.log("ctor fooooo")
    }
}

console.log("foo!")
document.body.innerHTML = new Foo().hello

// function greeter(person) {
//     return "Hello, " + person;
// }

// var user = "Jane User";

// document.body.innerHTML = greeter(user);