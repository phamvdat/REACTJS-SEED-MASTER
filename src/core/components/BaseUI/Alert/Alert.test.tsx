import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { theme } from 'core/styles/theme-variables';
import Alert, { AlerProps } from './Alert';

const setup = (props?: Partial<AlerProps>) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <Alert {...props} />
    </ThemeProvider>,
  );
  return { ...utils };
};

test('should render Title', () => {
  const props = {
    title: 'Alert title',
    // type: 'success',
  } as AlerProps;
  const { getByTestId, container } = setup(props);
  expect(container).toBeInTheDocument();
  expect(getByTestId('alert-title')).toHaveTextContent('Alert title');
});

describe('Render Alert compo with type prop should have Style correctly', () => {
  test('success', () => {
    const props = {
      type: 'success',
    } as AlerProps;
    const { getByRole, getByTestId } = setup(props);
    expect(getByRole('alert')).toHaveStyle('background: #DCFCE7; padding: 8px 16px');
    expect(getByTestId('alert-title')).toHaveStyle('color: #226024');
  });

  test('warning', () => {
    const props = {
      type: 'warning',
    } as AlerProps;
    const { getByRole, getByTestId } = setup(props);
    expect(getByRole('alert')).toHaveStyle('background: #FFF7ED; padding: 8px 16px');
    expect(getByTestId('alert-title')).toHaveStyle('color: #AB6703');
  });

  test('error', () => {
    const props = {
      type: 'error',
    } as AlerProps;
    const { getByRole, getByTestId } = setup(props);
    expect(getByRole('alert')).toHaveStyle('background: #FEE2E2; padding: 8px 16px');
    expect(getByTestId('alert-title')).toHaveStyle('color: #7F1D1D');
  });

  test('infor', () => {
    const props = {
      type: 'infor',
    } as AlerProps;
    const { getByRole, getByTestId } = setup(props);
    expect(getByRole('alert')).toHaveStyle('background: #DBEAFE; padding: 8px 16px');
    expect(getByTestId('alert-title')).toHaveStyle('color: #1B4D75');
  });
});
