// Uncomment the code below and write your tests
import { getBankAccount } from '.';
import _ from 'lodash';

describe('BankAccount', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create account with initial balance', () => {
    const initialBalance = 1000;
    const bankAccount = getBankAccount(initialBalance);
    const balance = bankAccount.getBalance();
    expect(balance).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const initialBalance = 1000;
    const amount = 1001;
    const bankAccount = getBankAccount(initialBalance);
    const withdraw = () => bankAccount.withdraw(amount);
    expect(withdraw).toThrowError();
  });

  test('should throw error when transferring more than balance', () => {
    const initialBalance = 1000;
    const amount = 1001;
    const bankAccount = getBankAccount(initialBalance);
    const toAccount = getBankAccount(initialBalance);
    const transfer = () => bankAccount.transfer(amount, toAccount);
    expect(transfer).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    const initialBalance = 1000;
    const amount = 100;
    const bankAccount = getBankAccount(initialBalance);
    const transfer = () => bankAccount.transfer(amount, bankAccount);
    expect(transfer).toThrowError();
  });

  test('should deposit money', () => {
    const initialBalance = 1000;
    const amount = 500;
    const result = initialBalance + amount;
    const bankAccount = getBankAccount(initialBalance);
    bankAccount.deposit(amount);
    const balance = bankAccount.getBalance();
    expect(balance).toBe(result);
  });

  test('should withdraw money', () => {
    const initialBalance = 1000;
    const amount = 800;
    const result = initialBalance - amount;
    const bankAccount = getBankAccount(initialBalance);
    bankAccount.withdraw(amount);
    const balance = bankAccount.getBalance();
    expect(balance).toBe(result);
  });

  test('should transfer money', () => {
    const initialBalance = 1000;
    const amount = 800;
    const resultBankAcc = initialBalance - amount;
    const resultToAcc = initialBalance + amount;
    const bankAccount = getBankAccount(initialBalance);
    const toAccount = getBankAccount(initialBalance);
    bankAccount.transfer(amount, toAccount);
    const balance = bankAccount.getBalance();
    const toAccountBalance = toAccount.getBalance();
    expect(balance).toBe(resultBankAcc);
    expect(toAccountBalance).toBe(resultToAcc);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const initialBalance = 1000;
    const mockValue = 750;
    const requestNotFailedValue = 1;
    const bankAccount = getBankAccount(initialBalance);
    jest
      .spyOn(_, 'random')
      .mockReturnValueOnce(mockValue)
      .mockReturnValueOnce(requestNotFailedValue);
    await expect(bankAccount.fetchBalance()).resolves.toBe(mockValue);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const initialBalance = 1000;
    const mockValue = 750;
    const bankAccount = getBankAccount(initialBalance);
    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(mockValue);
    await bankAccount.synchronizeBalance();
    expect(bankAccount.getBalance()).toBe(mockValue);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const initialBalance = 1000;
    const mockValue = null;
    const bankAccount = getBankAccount(initialBalance);
    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(mockValue);
    await expect(() => bankAccount.synchronizeBalance()).rejects.toThrowError();
  });
});
