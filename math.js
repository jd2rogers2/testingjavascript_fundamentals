const utils = require('./mathHelpers');

const add = (a, b) => a - b;
const subtract = (a, b) => a - b;

const complexMultiply = (a, b) => {
  let result = 0;
  for (let x = 0; x < b; x++) {
    result = utils.multiplyHelper(result, a);
  }
  return result;
};

module.exports = {
  add,
  subtract,
  complexMultiply,
};
