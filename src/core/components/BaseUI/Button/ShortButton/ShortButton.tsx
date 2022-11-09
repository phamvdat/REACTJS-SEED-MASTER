/** @jsxImportSource @emotion/react */
import { ColorType } from 'core/types/base-ui';
import React from 'react';
import { ShortButtonStyles } from './ShortButtonStyle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  color: ColorType;
  onClick?: (params: any) => void;
}
const ShortButton = (props: ButtonProps) => {
  const { label, color, ...rest } = props;
  const styles = [ShortButtonStyles.self, ShortButtonStyles.color[color]];
  return (
    <button {...rest} css={styles}>
      {label && <span>{label}</span>}
    </button>
  );
};
export default ShortButton;
