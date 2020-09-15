const utils = require('./mathHelpers');
const {
  add,
  subtract,
  complexMultiply,
} = require('./math');

describe('add', () => {
  it('adds positive numbers correctly', () => {
    expect(add(10, 5)).toBe(15);
    expect(add(100, 775)).toBe(875);
  });
});

describe('subtract', () => {
  it('subtracts the second number from the first correctly, given positive numbers', () => {
    expect(subtract(10, 5)).toBe(5);
  });
});

describe('complexMultiply', () => {
  it('correctly multiplies 2 positive numbers', () => {
    expect(complexMultiply(8, 7)).toBe(56);
  });

  it('calls the helper b amount of times', () => {
    function mock(func) {
      const newFunc = (...args) => {
        newFunc.mock.calls.push(args);
        return func(...args);
      };
      newFunc.mock = { calls: [] };

      return newFunc;
    };

    const originalMultiplyHelper = utils.multiplyHelper;
    utils.multiplyHelper = mock((a, b) => a + b);
    expect(complexMultiply(2, 3)).toBe(6);
    console.log()
    expect(utils.multiplyHelper.mock.calls).toDeeplyEqual([[0, 2], [2, 2], [4, 2]]);
    utils.multiplyHelper = originalMultiplyHelper;
  });
});
