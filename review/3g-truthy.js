let temp = 40       // 0, 0.0, 0n are falsy values...everything else are truthy.
const s = ""        // empty string, null or undefined is falsy...otherwise truthy.

if (temp) {
  console.log("Non-Zero")
} else {
  console.log("Temp is zero")
}

let str = (s) ? "Str is non-empty" : "Str is empty"
console.log(str)