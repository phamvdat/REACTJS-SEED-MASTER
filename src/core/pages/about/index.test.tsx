import { render, screen } from '@testing-library/react';
import AboutPage from '.';

test('renders about page', () => {
  render(<AboutPage />);
  const headingElement = screen.getByText(/About Page/i);
  expect(headingElement).toBeInTheDocument();
});
