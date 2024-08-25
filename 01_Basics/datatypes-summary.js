//For Interview:

// Primitive datatype
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) 

console.log(score)

//bigInt
const bigNumber = 12345566789094n
console.log(bigNumber)

// Reference (Non primitive) types

// Array , Objects , Functions

//Array
const heroes = ["Shaktiman","Naagraj","Doga"];

//Objects
let myObj = {
    name: "Nikhil",
    age: 22
   
}

//Functions
const myFunction = function(){
    console.log("Hello World !")
}

console.log(heroes)
console.log(typeof myFunction)
console.log(typeof myObj)

console.log(typeof anotherId)