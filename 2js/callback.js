let sayHello = (name, anotherFn) => {
    console.log(`Hello ${name}`);
    anotherFn(name)
}
let sayBye = (name) => {
    console.log(`Bye ${name}`);
}

let name = "Rahim"
sayHello(name, (name) => {
    console.log(`Welcome ${name}`);
})
// sayBye(name)
// sayWelcome(name)