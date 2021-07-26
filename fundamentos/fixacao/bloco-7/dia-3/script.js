const assert = require('assert');

const division = (x, y) => {
  if (y === 0) throw new Error('Parametro não pode ser 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5, '10 / 2 = 5');
assert.strictEqual("23", "2"+3, '"2"+3=23');