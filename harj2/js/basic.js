console.log("Do i exist")


let button = document.getElementById("btn");

button.addEventListener("click", () => hello("Jorma"))


function hello(x) {
    console.log("Hello" + x)
}

const letter = ["A", "B", "C", "D"]
const numbers = [1, 2, 3, 4]

let squaredNumbers = numbers.map(n => n*n)
console.log(squaredNumbers)

let age = 17
let adultAge = age >= 18 && age
console.log(adultAge)

function takeNumbers(x, y, z, w) {
    return x*y*z*w
}

console.log(takeNumbers(... numbers))

function printEverything(...stuff) {
    console.log("Printing everything:")
    stuff.forEach(x => {
        console.log(x)
    })
}

printEverything("String", 5, 77, "Jorma", {0: "asda"}, letter)

let data = {
    name: "Jorma",
    age: 18,
    addresss: {
        street: "foo",
        code: "1231232",
        city: {
            name: "LPR",
            status: "Alive"
        }
    }
}

//console.log(data.address.city.name)

if(data && data.address && data.address.city) {
    console.log(data.address.city.name)
}
else {
    console.log("Failed")
}

console.log(data?.address?.city?.name)

let a = 0
let b = null
let c = "text"

console.log(b && c)
console.log(b || c)
console.log(b ?? c)