const ReverseAString = require("./ReverseAString")

test('reverse a string', () => {
  expect(ReverseAString("osama")).toBe("amaso")
});

test('reverse a string 2', () => {
  expect(ReverseAString("321")).toBe("123")
});

test('reverse a string 3', () => {
  expect(ReverseAString("beWretsaM")).toBe("MasterWeb")
});
