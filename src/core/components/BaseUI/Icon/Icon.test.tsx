import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
  test('render icon not crash', () => {
    render(<Icon icon="close" />);
  });
});
