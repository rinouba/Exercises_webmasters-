const largestNumber = require("./largestNumber")

test('Find the Largest Number in array', () => {
  expect(largestNumber([1,2,5,1,9])).toBe(9)
});

test('Find the Largest Number in array 2', () => {
  expect(largestNumber([100,99,62,87,1000])).toBe(1000)
});

test('Find the Largest Number in array 3', () => {
  expect(largestNumber([5,123,567,65,0])).toBe(567)
});