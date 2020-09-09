const { add, subtract } = require('./math');

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

function expect(actual) {
  return {
  toBe: expected => {
      if (expected !== actual) {
        throw `Expected ${actual} to equal ${expected}`;
      }
    },
  };
};

function it(statement, callback) {
  try {
    callback();
    console.log(`  √ - ${statement}`);
  } catch(err) {
    console.log(`  x - ${statement}`);
    console.error(`    ${err}\n`);
  }
};

function describe(statement, callback) {
  console.log(statement);
  callback();
};
