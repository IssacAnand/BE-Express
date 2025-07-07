// print normal messages
// Collect all arguments passed to this function

// Goal: Extract logging into own module
const info = (...params) => {
  console.log(...params)
}
// Collect all arguments passed to this function
const error = (...params) => {
  console.error(...params)
}
// Export both functions as an object
module.exports = { info, error }