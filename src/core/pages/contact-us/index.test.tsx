import { render, screen } from '@testing-library/react';
import ContactPage from '.';

test('renders contact page', () => {
  render(<ContactPage />);
  const headingElement = screen.getByText(/Contact Page/i);
  expect(headingElement).toBeInTheDocument();
});
