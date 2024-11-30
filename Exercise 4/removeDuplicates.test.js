const removeDuplicates = require("./removeDuplicates")

test('Remove Duplicates from array', () => {
  expect(removeDuplicates([1,3,5,5,8,8,1,3])).toEqual([ 1, 3, 5, 8 ])
});

test('Remove Duplicates from array 2', () => {
  expect(removeDuplicates([4,3,50,20,15,50,4,6])).toEqual([ 4, 3, 50, 20, 15, 6 ])
});

test('Remove Duplicates from array 3', () => {
  expect(removeDuplicates([32,20,51,47,80,80,47,2])).toEqual([ 32, 20, 51, 47, 80, 2 ])
});