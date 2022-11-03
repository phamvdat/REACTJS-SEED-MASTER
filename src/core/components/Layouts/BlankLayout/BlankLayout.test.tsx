import { render, screen } from '@testing-library/react';
import BlankLayout from './BlankLayout';

test('renders blank layout', () => {
  render(<BlankLayout />);
  const layoutElement = screen.getByText(/Blank Layout/i);
  expect(layoutElement).toBeInTheDocument();
});
