function expect(actual) {
  return {
    toBe: expected => {
      if (expected !== actual) {
        throw `Expected ${actual} to equal ${expected}`;
      }
    },
    toDeeplyEqual: (expected) => {
      for (let i = 0; i < expected.length; i++) {
        for (let j = 0; j < expected[i].length; j++) {
          if (expected[i][j] !== actual[i][j]) {
            console.log(expected[i][j])
            console.log(actual[i][j])
            throw `Expected ${actual} to equal ${expected}`;
          }
        }
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

global.describe = describe;
global.expect = expect;
global.it = it;
