import { render, screen } from '@testing-library/react';
import LoginForm from './login-form';

test('renders login form', () => {
  render(<LoginForm onSubmit={data => data} />);
  // email field should have label
  const labelEmail = screen.getByLabelText('Email:');
  expect(labelEmail).toBeInTheDocument();
  // password field should have label
  const labelPassword = screen.getByLabelText('Password:');
  expect(labelPassword).toBeInTheDocument();
});
