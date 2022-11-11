/** @jsxImportSource @emotion/react */
import { ColorType } from 'core/types/base-ui';
import React from 'react';
import { TradingButtonStyle } from './trading-button-style';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  color?: ColorType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (params: any) => void;
}
const TradingButton = (props: ButtonProps) => {
  const { label, color = 'red', ...rest } = props;
  const style = [TradingButtonStyle.self, TradingButtonStyle.color[color]];
  return <button css={style}>{label && <span>{label}</span>}</button>;
};
export default TradingButton;
