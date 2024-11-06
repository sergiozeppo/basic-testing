// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  let path: string;
  let expected: {
    id: number;
    title: string;
  };

  beforeAll(() => {
    jest.useFakeTimers();
    path = '/users/100';
    expected = {
      id: 100,
      title: 'hi there!',
    };
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should create instance with provided base url', async () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const spyOnAxiosCreate = jest.spyOn(axios, 'create');
    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockImplementation(() => Promise.resolve({ data: expected }));

    await throttledGetDataFromApi(path);
    jest.runOnlyPendingTimers();

    expect(spyOnAxiosCreate).toBeCalledWith({ baseURL });
  });

  test('should perform request to correct provided url', async () => {
    const spyOnAxiosGet = jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockImplementation(() => Promise.resolve({ data: expected }));

    await throttledGetDataFromApi(path);
    jest.runOnlyPendingTimers();
    expect(spyOnAxiosGet).toBeCalledWith(path);
  });

  test('should return response data', async () => {
    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockImplementation(() => Promise.resolve({ data: expected }));

    const res = await throttledGetDataFromApi(path);
    jest.runOnlyPendingTimers();
    expect(res).toEqual(expected);
  });
});
