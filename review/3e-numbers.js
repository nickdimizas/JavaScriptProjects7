let num1 = 10 
let num2 = 3

let divResult = num1 / num2
let expr = (num2 / num1) * (8.5 /3.3)

let fixedDiv = (num1 / num2).toFixed(1)   // 3.3
let inResult = Math.floor(num1 / num2)    // bottom limit
let upperInt = Math.ceil(num1 / num2)     // upper limit
let roundResult = Math.round(num1 / num2) // rounds up for .5+ , rounds down for 0.4-

//to modulo diathrei to proshmo tou Diaireteou
let modResult = num1 % num2;   // JS & Java remaining part of a division

console.log(divResult, expr, fixedDiv, inResult, upperInt, roundResult, modResult)