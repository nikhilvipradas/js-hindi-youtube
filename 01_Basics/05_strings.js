const name="nikhil"
const repoCount=7

// console.log(name+ repoCount+ " Value"); // Not recommended in current time

//Recommended way as below
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//Alternate way to declare string
const gameName = new String('nikhilnv-com')

console.log(gameName[0]) //key - value pair
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,3)
console.log(anotherString)

const newStringOne = "    hitesh   "
console.log(newStringOne)

//To remove the unwanted space given by users in the input form in website except for password
console.log(newStringOne.trim())

const url = "https://nikhilvipradas.com/nikhil%20vipradas"


console.log(url.replace('%20','-'))

console.log(url.includes('nik'))

console.log(gameName.split('-'))



