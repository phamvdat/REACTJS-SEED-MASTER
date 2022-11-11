/** @jsxImportSource @emotion/react */
import { ColorType } from 'core/types/base-ui';
import React from 'react';
import { ShortSolidButtonStyle } from './short-solid-button-style';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  color?: ColorType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (params: any) => void;
}
const ShortSolidButton = (props: ButtonProps) => {
  const { label, color = 'red', ...rest } = props;
  const style = [ShortSolidButtonStyle.self, ShortSolidButtonStyle.color[color]];
  return <button css={style}>{label && <span>{label}</span>}</button>;
};
export default ShortSolidButton;
