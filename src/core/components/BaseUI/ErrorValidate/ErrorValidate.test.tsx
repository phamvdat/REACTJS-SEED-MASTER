import { render } from '@testing-library/react';
import ErrorValidate from './ErrorValidate';

describe('Input component', () => {
  test('renders checkbox component', () => {
    const { container } = render(<ErrorValidate message="Please enter your email" />);
    expect(container).toHaveTextContent('Please enter your email');
  });
});
