import { render } from '@testing-library/react';
import Button from './Button';

test('renders component button', () => {
  const { container } = render(<Button />);
  expect(container).toBeInTheDocument();
});

test('renders component button with loading', () => {
  const { container } = render(<Button loading />);
  expect(container).toBeInTheDocument();
});

test('renders component only icon circle', () => {
  const { container } = render(<Button prefixIcon={<div>X</div>} circleIcon={<div>A</div>} />);
  expect(container).toBeInTheDocument();
});
