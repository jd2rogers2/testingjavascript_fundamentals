const { describe, it, expect } = require('./helpers');
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
