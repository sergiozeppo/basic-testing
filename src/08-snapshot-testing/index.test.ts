// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const rawInput = ['ManCity', 'ManUnited', 'Chelsea'];
    const expected = {
      value: 'ManCity',
      next: {
        value: 'ManUnited',
        next: {
          value: 'Chelsea',
          next: {
            value: null,
            next: null,
          },
        },
      },
    };

    expect(generateLinkedList(rawInput)).toStrictEqual(expected);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const rawInput = ['Liverpool', 'Newcastle', 'Tottenham'];
    expect(generateLinkedList(rawInput)).toMatchSnapshot();
  });
});
