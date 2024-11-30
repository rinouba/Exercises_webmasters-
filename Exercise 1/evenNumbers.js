// sum.js
function evenNumbers(array) {
  const arr = array.filter((e) => e%2===0)
  return arr
}
module.exports = evenNumbers;