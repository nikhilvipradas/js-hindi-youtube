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

/************************************************************************/
// Stack , Heap

// In primitive types - Stack is used

// In non primitive types , heap is used

let myYouTubeName = "nikhilvipradas.com"
let anotherName = myYouTubeName
anotherName = "chaiaurcode"
console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "nikhil@google.com"

console.log(userOne)
console.log(userTwo)

// For primitive , copy of variable is created so if value is updated , it may not update for older variable
// For non primitive , same value for 2 different variables exists , so if value is updated for one , it also reflects for other