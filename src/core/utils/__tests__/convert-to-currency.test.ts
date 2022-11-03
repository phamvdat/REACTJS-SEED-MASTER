import { convertToCurrency } from 'core/utils/format';

describe('convertToCurrency()', () => {
  test('should return $1.00 when input is 1', () => {
    // ones
    expect(convertToCurrency(1)).toBe('$1.00');
    expect(convertToCurrency(10)).toBe('$10.00');
    expect(convertToCurrency(100)).toBe('$100.00');
    // thousands
    expect(convertToCurrency(1000)).toBe('$1,000.00');
    expect(convertToCurrency(10000)).toBe('$10,000.00');
    expect(convertToCurrency(100000)).toBe('$100,000.00');
    // millions
    expect(convertToCurrency(1000000)).toBe('$1,000,000.00');
    expect(convertToCurrency(10000000)).toBe('$10,000,000.00');
    expect(convertToCurrency(100000000)).toBe('$100,000,000.00');
    // round
    expect(convertToCurrency(1.595)).toBe('$1.60');
    expect(convertToCurrency(1.495)).toBe('$1.50');
  });
});
