class Calculator {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }
  get add() {
    return this.a + this.b;
  }
  get sub() {
    return this.a - this.b;
  }
  get mul() {
    return this.a * this.b;
  }
  get div() {
    if (this.b !== 0) {
      return this.a/this.b;
    }
    return 'Infinite';
  }
}
module.exports = Calculator;