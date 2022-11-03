import { render, screen } from '@testing-library/react';
import RegisterPage from '.';

test('should have register page', () => {
  expect(render(<RegisterPage />)).toBeTruthy();
  // page should have a title
  const headingElement = screen.getByRole('heading', {
    level: 1,
    name: title => title === 'Register Page',
  });
  expect(headingElement).toBeInTheDocument();
});
