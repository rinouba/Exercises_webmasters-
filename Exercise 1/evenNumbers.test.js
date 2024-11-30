// sum.test.js
const evenNumbers = require('./evenNumbers');

test('expact to get even numbers from array', () => {
  expect(evenNumbers([10,2,4,3,7,9,12])).toEqual([10,2,4,12]);
});

test('expact to get even numbers from array 2', () => {
  expect(evenNumbers([6,8,16,7,1,11])).toEqual([6,8,16]);
});

test('expact to get even numbers from array 3', () => {
  expect(evenNumbers([1,2,3,4,5,6,7,8,9,10])).toEqual([2,4,6,8,10]);
});