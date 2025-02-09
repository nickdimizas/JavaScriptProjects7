const objArray = [
  {id: 1, first: "Bob", age: 23},
  {id: 2, first: "Alice", age: 40},
  {id: 3, first: "Costas", age: 20},
  {id: 4, first: "Costas", age: 18},
  {id: 5, first: "Γιώργος", age: 32}
]

// Sort by age
objArray.sort(function(a, b) {
  return a.age - b.age
})

console.log(objArray)

// Sort by first and age
objArray.sort(function(a, b) {
  if (a.first === b.first) {
    return a.age -b.age
  }
  return a.first.localeCompare(b.first, "el")
})

console.log(objArray)