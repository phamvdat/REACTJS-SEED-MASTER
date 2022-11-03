import { convertMonthToWord } from 'core/utils/format';

describe('convertMonthToWord()', () => {
  test('should return month when input is 1 to 12', () => {
    // should return 'January' when input is 1
    expect(convertMonthToWord(1)).toBe('January');
    // should return 'February' when input is 2
    expect(convertMonthToWord(2)).toBe('February');
    // should return 'March' when input is 3
    expect(convertMonthToWord(3)).toBe('March');
    // should return 'April' when input is 4
    expect(convertMonthToWord(4)).toBe('April');
    // should return 'May' when input is 5
    expect(convertMonthToWord(5)).toBe('May');
    // should return 'June' when input is 6
    expect(convertMonthToWord(6)).toBe('June');
    // should return 'July' when input is 7
    expect(convertMonthToWord(7)).toBe('July');
    // should return 'August' when input is 8
    expect(convertMonthToWord(8)).toBe('August');
    // should return 'September' when input is 9
    expect(convertMonthToWord(9)).toBe('September');
    // should return 'October' when input is 10
    expect(convertMonthToWord(10)).toBe('October');
    // should return 'November' when input is 11
    expect(convertMonthToWord(11)).toBe('November');
    // should return 'December' when input is 12
    expect(convertMonthToWord(12)).toBe('December');
  });

  test('should return empty when input is out of range 1 to 12', () => {
    expect(convertMonthToWord(-1)).toBe('');
    expect(convertMonthToWord(0)).toBe('');
    expect(convertMonthToWord(13)).toBe('');
  });
});
