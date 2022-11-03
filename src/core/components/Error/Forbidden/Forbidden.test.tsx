import { render, screen } from '@testing-library/react';
import Error403 from './Forbidden';

test('renders learn react link', () => {
  render(<Error403 />);
  const linkElement = screen.getByText(/Access denied/i);
  expect(linkElement).toBeInTheDocument();
});
