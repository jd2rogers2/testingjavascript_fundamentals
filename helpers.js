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

global.describe = describe;
global.expect = expect;
global.it = it;
