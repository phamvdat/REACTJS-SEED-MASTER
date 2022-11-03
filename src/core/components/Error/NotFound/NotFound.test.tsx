import { render, screen } from '@testing-library/react';
import Error404 from './NotFound';

test('renders learn react link', () => {
  render(<Error404 />);
  const linkElement = screen.getByText(/404 Not Found/i);
  expect(linkElement).toBeInTheDocument();
});
