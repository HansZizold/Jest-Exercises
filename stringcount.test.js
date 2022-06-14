const stringLength = require('./stringcount');

// arrange
let stringtest1 = 'hello';
// act
let charCount1 = stringLength(stringtest1);
// assert
it('return string length', () => {
  expect(charCount1).toBe(5);
});

// arrange
stringtest2 = '';
// act
charCount2 = stringLength(stringtest2);
// assert
it('Empty String', () => {
  expect(charCount2).toBe('String empty');
});

// arrange
stringtest3 = 'longerthanten';
// act
charCount3 = stringLength(stringtest3);
// assert
it('Empty String', () => {
  expect(charCount3).toBe('String longer than 10 characters');
});