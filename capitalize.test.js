const Capitalize = require('./capitalize');

// arrange
let stringtest1 = 5;

// act
let type1 = typeof(stringtest1);
let cap1 = Capitalize(stringtest1);

// assert
test('check if the argument is a string', () => {
  expect(type1).toBe('number');
});
test('return capitalized string', () => {
  expect(cap1).toBe('Argument is not a string');
});

// arrange
let stringtest2 = 'hello';

// act
let type2 = typeof(stringtest2);
let cap2 = Capitalize(stringtest2);

// assert
test('check if the argument is a string', () => {
  expect(type2).toBe('string');
});
test('return capitalized string', () => {
  expect(cap2).toBe('Hello');
});
