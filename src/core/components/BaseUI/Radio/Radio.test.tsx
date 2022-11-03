import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { theme } from 'core/styles/theme-variables';
import Radio, { RadioProps } from './Radio';

const setup = (props?: RadioProps) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <Radio label="test label radio" activeColorLabel={false} {...props} />
    </ThemeProvider>,
  );

  const checkmarElement = utils.getByTestId('checkmark');
  const selectorInputElement = utils.container.querySelector('input[type="radio"]');

  return { checkmarElement, selectorInputElement, ...utils };
};

test('should have prop label', async () => {
  const { container } = setup();
  // render radio component
  expect(container).toBeInTheDocument();
  // the content on the render matches prop label
  expect(container).toHaveTextContent('test label radio');
});

test('should have text color primary when have activeColorLabel', async () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Radio label="test label radio" defaultChecked={true} />
    </ThemeProvider>,
  );
  await expect(getByTestId('label')).toHaveStyle(`color: ${theme.colors.primary}`);
});

describe('should have prop size(sm,md)', () => {
  test('it should keep size sm(16x16)', () => {
    const { checkmarElement } = setup({ size: 'sm', label: 'test' });
    expect(checkmarElement).toHaveStyle('width: 16px; height: 16px');
  });
  test('it should keep size md(20x20)', () => {
    const { checkmarElement } = setup({ size: 'md', label: 'test' });
    expect(checkmarElement).toHaveStyle('width: 20px; height: 20px');
  });
});

describe('checked attribute', () => {
  test('should have checked', () => {
    const { selectorInputElement } = setup({ defaultChecked: true, label: 'test' });
    expect(selectorInputElement).toBeChecked();
  });
  test('should not have checked', () => {
    const { selectorInputElement } = setup({ defaultChecked: false, label: 'test' });
    expect(selectorInputElement).not.toBeChecked();
  });
});
