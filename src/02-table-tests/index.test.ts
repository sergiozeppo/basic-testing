// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: -5, b: 5, action: Action.Add, expected: 0 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 5, b: 7, action: Action.Subtract, expected: -2 },
  { a: 3, b: 3, action: Action.Subtract, expected: 0 },
  { a: -10, b: -5, action: Action.Subtract, expected: -5 },
  { a: 1, b: 1, action: Action.Multiply, expected: 1 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 5, b: 0, action: Action.Multiply, expected: 0 },
  { a: -5, b: -2, action: Action.Multiply, expected: 10 },
  { a: 3, b: 1, action: Action.Divide, expected: 3 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 15, b: 3, action: Action.Divide, expected: 5 },
  { a: 0, b: 3, action: Action.Divide, expected: 0 },
];

const negativeAndEdgeCases = [
  { a: '1', b: 2, action: Action.Add, expected: null },
  { a: 100, b: 10, action: '/7/7/', expected: null },
  { a: 'eleven', b: 2, action: Action.Add, expected: null },
  {
    a: Number.MAX_SAFE_INTEGER,
    b: 1,
    action: Action.Add,
    expected: Number.MAX_SAFE_INTEGER + 1,
  },
  { a: 11, b: '2', action: Action.Subtract, expected: null },
  { a: '2', b: '2', action: Action.Subtract, expected: null },
  { a: 3, b: true, action: Action.Subtract, expected: null },
  { a: 11, b: '2', action: Action.Multiply, expected: null },
  { a: '2', b: '2', action: Action.Multiply, expected: null },
  { a: '01010101', b: 2, action: Action.Multiply, expected: null },
  {
    a: Number.MAX_SAFE_INTEGER,
    b: 2,
    action: Action.Multiply,
    expected: Number.MAX_SAFE_INTEGER * 2,
  },
  { a: false, b: true, action: Action.Divide, expected: null },
  { a: 18, b: 0, action: Action.Divide, expected: Infinity },
  { a: 15, b: 3, action: 'Action.Divide', expected: null },
  { a: 15, b: 3, action: 'Add', expected: null },
  {
    a: Number.MAX_SAFE_INTEGER,
    b: 1,
    action: Action.Divide,
    expected: Number.MAX_SAFE_INTEGER,
  },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)(
    'Should perform arithmetic operations correctly',
    ({ a, b, action, expected }) => {
      const rawInput = { a, b, action };
      const result = simpleCalculator(rawInput);
      expect(result).toBe(expected);
    },
  );
  test.each(negativeAndEdgeCases)('Ssssss', ({ a, b, action, expected }) => {
    const rawInput = { a, b, action };
    const result = simpleCalculator(rawInput);
    expect(result).toBe(expected);
  });
  // Consider to use Jest table tests API to test all cases above
});
