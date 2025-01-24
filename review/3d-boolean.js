let isDarkMode = false
let username = ""
let isUserLoggedIn = false
let isDashBoardOn = false
console.log(`is dark mode enabled: ${isDarkMode}`)  // interpolation

isUserLoggedIn = true
username = "Anna"
isDashBoardOn = isUserLoggedIn && username
console.log(isDashBoardOn)