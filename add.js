var p = console.log.bind(console);
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mul, div };
})();

p(calculator.add(3,5)); // 8
p(calculator.sub(6,2)); // 4
p(calculator.mul(14,5534)); // 77476


//OLD
var ocalculator = (function () {
  function add(a, b) {
    return a + b;
  }
  
  function sub(a, b) {
    return a - b;
  }
  
  function mul(a, b) {
    return a * b;
  }
  
  function div(a, b) {
    return a / b;
  }
  
  return {
    add: add,
    sub: sub,
    mul: mul,
    div: div
  };
})();

console.log(ocalculator.add(3, 5)); // 8
console.log(ocalculator.sub(6, 2)); // 4
console.log(ocalculator.mul(14, 5534)); // 77476


