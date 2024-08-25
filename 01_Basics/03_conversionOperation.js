let score = "33bac"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// Basic conversion 
//"33" => 33 
//"33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// *************************OPERATIONS***************************

let value = 3
let negValue = -value

//console.log(negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%3)

let str1 = "hello"
let str2 = "Nikhil"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2")
// console.log ("1" + 2 + 2)

// console.log(1 + 2 + "2")

// console.log((3+4) * 5 % 3)

// console.log(true)
// console.log(+true) //console.log(true+) => not allowed 
// console.log(+"") //not preferred

let gameCounter = 100

gameCounter++;
console.log(gameCounter);

++gameCounter;
console.log(gameCounter);

//link to study - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

