import { render, screen } from '@testing-library/react';
import DefaultLayout from './DefaultLayout';

test('renders default layout', () => {
  render(<DefaultLayout />);
  const layoutElement = screen.getByText(/Default Layout/i);
  expect(layoutElement).toBeInTheDocument();
});
