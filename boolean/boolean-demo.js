console.log(Boolean(1))            // true
console.log(Boolean(0))            // false
console.log(Boolean("Hello"))      // true 
console.log(Boolean(""))           // false
console.log(Boolean(null))         // false
console.log(Boolean(undefined))    // false
console.log(BarProp({}))           // true
console.log(BarProp([]))           // true


while (1) {
  console.log("Hello")
  break;
} 

do {
  console.log("One iteration")
} while(0)

  for (let i = 1; 1; i++) {
    console.log("In for")
    break
  }

  let num = 10
  while (num) {
    console.log(num)
    num--
  }

// && || !
console.log("Coding" && 7)  // truthy && truthy -> last truthy value(epistrefei value kai oxi true or false diladi 7!)
// if the first is falsy -> first falsy value

console.log(true || "Default") // First truthy value or the last falsy value if all are falsy

const username = "" || "Default"
let isBtnExists = true
let button = "Button"
const buttonToShow = isBtnExists && button