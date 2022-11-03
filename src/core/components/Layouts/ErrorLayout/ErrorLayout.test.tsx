import { render, screen } from '@testing-library/react';
import ErrorLayout from './ErrorLayout';

test('renders error layout', () => {
  render(<ErrorLayout />);
  const layoutElement = screen.getByText(/Error Layout/i);
  expect(layoutElement).toBeInTheDocument();
});
