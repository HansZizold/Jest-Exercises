const stringReverse = require('./stringreverse');

// arrange
let stringtest1 = 'hello';
// act
let reversedstring1 = stringReverse(stringtest1);
// assert
it('return reversed string', () => {
  expect(reversedstring1).toBe('olleh');
});
