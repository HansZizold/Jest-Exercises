const Calculator = require('./calculator');

// arrange for all tests
let oper1 = new Calculator(10, 5);
let oper2 = new Calculator(5, 0);
let oper3 = new Calculator(20, 7);

// act for addition
let sum1 = oper1.add;
let sum2 = oper2.add;
let sum3 = oper3.add;

// assert for addition
describe('Addition', () => {
  test('Addition', () => {
    expect(sum1).toBe(15);
  });
  test('Addition', () => {
    expect(sum2).toBe(5);
  });
  test('Addition', () => {
    expect(sum3).toBe(27);
  });
});

// act for substration
let sub1 = oper1.sub;
let sub2 = oper2.sub;
let sub3 = oper3.sub;

// assert for substraction
describe('Substraction', () => {
  test('Substraction', () => {
    expect(sub1).toBe(5);
  });
  test('Substraction', () => {
    expect(sub2).toBe(5);
  });
  test('Substraction', () => {
    expect(sub3).toBe(13);
  });
});

// act for multiplying
let mul1 = oper1.mul;
let mul2 = oper2.mul;
let mul3 = oper3.mul;

// assert for substraction
describe('Multiplying', () => {
  test('Multiplying', () => {
    expect(mul1).toBe(50);
  });
  test('Multiplying', () => {
    expect(mul2).toBe(0);
  });
  test('Multiplying', () => {
    expect(mul3).toBe(140);
  });
});

// act for division
let div1 = oper1.div;
let div2 = oper2.div;
let div3 = oper3.div;

// assert for substraction
describe('Division', () => {
  test('Division', () => {
    expect(div1).toBe(2);
  });
  test('Division', () => {
    expect(div2).toBe('Infinite');
  });
  test('Division', () => {
    expect(div3).toBeCloseTo(2.86);
  });
});
