import { render, screen } from '@testing-library/react';
import HomePage from '.';

test('renders home page', () => {
  render(<HomePage />);
  const headingElement = screen.getByText(/Home Page/i);
  expect(headingElement).toBeInTheDocument();
});
