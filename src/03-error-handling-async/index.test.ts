// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const greeting = 'Hi!';
    await expect(resolveValue(greeting)).resolves.toBe(greeting);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const message = 'Provided message';
    const result = () => throwError(message);
    expect(result).toThrow(message);
  });

  test('should throw error with default message if message is not provided', () => {
    const defaultMsg = 'Oops!';
    const result = () => throwError();
    expect(result).toThrow(defaultMsg);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const awesomeMsg = 'This is my awesome custom error!';
    const result = () => throwCustomError();
    expect(result).toThrow(MyAwesomeError);
    expect(result).toThrow(awesomeMsg);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(() => rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
