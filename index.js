const { add, subtract } = require('./math');

let expected = 15;
let actual = add(10, 5);

if (expected !== add) {
  throw `Expected ${actual} to equal ${expected}`;
}


expected = 5;
actual = subtract(10, 5);

if (expected !== add) {
  throw `Expected ${actual} to equal ${expected}`;
}