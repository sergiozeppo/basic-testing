// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const rawInput = {
      a: 7,
      b: 5,
      action: Action.Add,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(12);
  });

  test('should subtract two numbers', () => {
    const rawInput = {
      a: 7,
      b: 5,
      action: Action.Subtract,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(2);
  });

  test('should multiply two numbers', () => {
    const rawInput = {
      a: 7,
      b: 5,
      action: Action.Multiply,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(35);
  });

  test('should divide two numbers', () => {
    const rawInput = {
      a: 100,
      b: 10,
      action: Action.Divide,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(10);
  });

  test('should exponentiate two numbers', () => {
    const rawInput = {
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    const rawInput = {
      a: 100,
      b: 10,
      action: '/7/7/',
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const rawInput = {
      a: '100',
      b: '10',
      action: Action.Divide,
    };
    const result = simpleCalculator(rawInput);
    expect(result).toBeNull();
  });
});
