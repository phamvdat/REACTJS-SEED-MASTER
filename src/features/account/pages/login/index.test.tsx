import { render, screen } from '@testing-library/react';
import LoginPage from '.';

test('should have login page', () => {
  expect(render(<LoginPage />)).toBeTruthy();
  // page should have a title
  const headingElement = screen.getByRole('heading', {
    level: 1,
    name: title => title === 'Login Page',
  });
  expect(headingElement).toBeInTheDocument();
});

test('renders login form', () => {
  render(<LoginPage />);
  // email field should have label
  const labelEmail = screen.getByLabelText('Email:');
  expect(labelEmail).toBeInTheDocument();
  // password field should have label
  const labelPassword = screen.getByLabelText('Password:');
  expect(labelPassword).toBeInTheDocument();
});
