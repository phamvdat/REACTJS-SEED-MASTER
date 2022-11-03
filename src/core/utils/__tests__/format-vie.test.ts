import { formatVie } from 'core/utils/format';

describe('formatVie()', () => {
  test('should have a specific return value', () => {
    // should encode vietnamese individual utf-8 characters
    expect(formatVie('việt nam')).toBe('viet-nam');
    // should remove special characters
    expect(formatVie('$dollar sang việt nam đồng')).toBe('dollar-sang-viet-nam-dong');
    // should remove part - at the beginning
    expect(formatVie('--việt nam')).toBe('viet-nam');
    // should remove residual - at the end
    expect(formatVie('việt nam--')).toBe('viet-nam');
    // should remove residual - at the beginning and the end
    expect(formatVie('--việt nam--')).toBe('viet-nam');
    // should remove extra spaces
    expect(formatVie('  việt nam  ')).toBe('viet-nam');
  });

  test('should return empty string', () => {
    expect(formatVie('!@#$%^&*()[]{}<>,./?|\\`~:;')).toBe('');
    expect(formatVie('')).toBe('');
  });
});
